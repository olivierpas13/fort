import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
// import fetch from 'node-fetch';


import clientPromise from '../../../lib/mongodb';
import login from 'services/login';
import { getIndividualUser, getUserByGithubId } from 'services/users';

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    signIn: async (profile,) => {
      // console.log({ profile });
      const { account, user } = profile;
      if (account.provider === 'github') {
        const existingUser = await getUserByGithubId(user?.id);
        console.log(existingUser);
        if (existingUser) {
          return existingUser;
        }
        const newUser ={
          name: user.name,
          githubId: user.id,
        };

        profile.user = newUser;
        console.log(profile.user);
        // If no existing user, create a new one
        return true;
      }},
    async jwt({ token, user, profile, ...rest }) {

      // console.log({ token });

      user && (token.user = user);

      const { data: userFromDB } = await getIndividualUser(token.user.id);

      token.user = {
        ...token.user,
        organization: userFromDB?.organization,
        githubId: profile?.id,
        role: userFromDB?.role,
        project: userFromDB?.project,
      };

      return token;

    },
    async session({ session, token }) {
      session = {
        ...session,
        user:
          token.user,

      };

      return session;

    }
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith@gmail.com' },
        password: {  label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        const user =  await login({
          email: credentials.email,
          password: credentials.password
        });
        if (user) {
          return user;
        } else{
          return null;
        }
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  session: {
    strategy: 'jwt'
  }
};

export default NextAuth(authOptions);