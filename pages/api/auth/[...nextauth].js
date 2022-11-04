import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

import login from 'services/login';

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      user && (token.user = user);
      return token;
    },
    async session({ session, token, user }) {
      session = {
        ...session,
        user:
          token.user,
        // id: token?.user.id,
        // organization: token?.user?.organization,
        // ...session.user

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