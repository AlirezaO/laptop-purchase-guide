import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
// import {
//   AUTHOR_BY_GITHUB_ID_QUERY,
//   AUTHOR_BY_ID_OR_EMAIL_QUERY,
// } from "./sanity/lib/queries";
// import { client } from "./sanity/lib/client";
// import { writeClient } from "./sanity/lib/write-client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/auth",
    signOut: "/auth",
    error: "/auth",
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      // if (account && profile) {
      //   const user = await client
      //     .withConfig({ useCdn: false })
      //     .fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
      //       id: profile?.id,
      //     });
      //   token.id = user?._id;
      // }
      return token;
    },

    async session({ session, token }) {
      Object.assign(session, { id: token.id });
      return session;
    },

    async signIn({
      user: { name, email, image },
      account,
      profile: { id, login, bio },
    }) {
      // const existingUser = await client
      //   .withConfig({ useCdn: false })
      //   .fetch(AUTHOR_BY_ID_OR_EMAIL_QUERY, {
      //     id,
      //     email,
      //   });

      // if (!existingUser) {
      //   await writeClient.create({
      //     _type: "author",
      //     id,
      //     name,
      //     username: login,
      //     email,
      //     image,
      //     bio: bio || "",
      //   });
      // } else {
      //   // If user exists but with different GitHub ID, update their ID
      //   if (existingUser.id !== id) {
      // await writeClient.patch(existingUser._id).set({ id }).commit();
      //   }
      // }
      return true;
    },
  },
});
