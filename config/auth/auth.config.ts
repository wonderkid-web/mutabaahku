import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

export default {
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      // @ts-ignore
      async authorize() {
        const user = {
          user: "Mr. Koto",
        };
        if (user) return user;
        return null;
      },
    }),
    Google,
  ],
  callbacks: {
    jwt: async ({ user, token }) => {
      if (user) {
        token.user = user;
        return token;
      }
      return token;
    },

    session: async ({ session, token }) => {
      if (token) {
        // @ts-ignore
        session.user = token.user;
      }
      return session;
    },
  },
  trustHost: true,
  pages: {
    signIn: "/auth/signin",
  },
} satisfies NextAuthConfig;
