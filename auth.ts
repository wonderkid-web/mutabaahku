import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

export const { signIn, signOut, auth, handlers } = NextAuth({
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
        session = token.user;

        return session;
      }
      return session;
    },
  },
});
