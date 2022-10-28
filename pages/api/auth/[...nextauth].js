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
      console.log(user);
      user && (token.user = user);
      // if(!token.user.organization){
      //   this.jwt();
      // }
      return token;
    },
    async session({ session, token, user }) {
      // console.log(token);
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
        // credentials ={
        //   ...credentials,
        //   id: 123
        // };
        console.log(credentials);

        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)


        const user =  await login({
          email: credentials.email,
          password: credentials.password
        });
        // const user ={
        //   email: 'olaola'
        // };

        // const res = await fetch('/your/endpoint', {
        //   method: 'POST',
        //   body: JSON.stringify(credentials),
        //   headers: { 'Content-Type': 'application/json' }
        // });
        // const user = await res.json();

        // If no error and we have user data, return it
        if (user) {
          // console.log(user);
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
    // Set to jwt in order to CredentialsProvider works properly
    strategy: 'jwt'
  }
};

export default NextAuth(authOptions);