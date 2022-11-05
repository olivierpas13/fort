import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

import login from 'services/login';
import { getIndividualUser } from 'services/users';

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async jwt({ token, user }) {

      user && (token.user = user);

      const { data: userFromDB } = await getIndividualUser(token.user.id);

      token.user = {
        ...token.user,
        role: userFromDB.role,
        project: userFromDB?.project,
      };

      return token;

    },
    async session({ session, token, user }) {

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