import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { client } from "./sanity/lib/client"
import { AUTHOR_GITHUB_BY_ID } from "./sanity/lib/queries"
import { writeClient } from "./sanity/lib/write-client"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({ user, profile }) {
      const existingUser = await client.withConfig({ useCdn: false }).fetch(
        AUTHOR_GITHUB_BY_ID,
        { id: `author-${profile?.id}` }   // ✅ use prefixed id
      );

      if (!existingUser) {
        await writeClient.createIfNotExists({
          _type: "author",
          _id: `author-${profile?.id}`,   // ✅ prefix the GitHub id
          name: user?.name,
          username: profile?.login,
          email: user?.email,
          image: user?.image,
          bio: profile?.bio || "",
        });
      }

      return true;
    },

    async jwt({ token, account, profile }) {
      if (account && profile) {
        const user = await client.fetch(AUTHOR_GITHUB_BY_ID, {
          id: `author-${profile.id}`,     // ✅ always use prefixed id
        });

        if (user) {
          token.id = user._id;            // e.g. "author-123456"
        } else {
          token.id = `author-${profile.id}`;
        }
      }
      return token;
    },

    async session({ token, session }) {
      session.id = token.id as string;
      return session;
    },
  },
});
