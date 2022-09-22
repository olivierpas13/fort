import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    // async organization({ session, token, user }){
    //   session.user.organization = user.organization; // Add role value to user object so it is passed along with session
    //   return session;
    // },
    async jwt({ token, user, account, profile, isNewUser }) {
      user && (token.user = user);
      return token;
    },
    async session({ session, token, user }) {
      session = {
        ...session,
        user: {
          id: user.id,
          organization: user.organization,
          ...session.user
        }
      };
      return session;
    }
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};

export default NextAuth(authOptions);