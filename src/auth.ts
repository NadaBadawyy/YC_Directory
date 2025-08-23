
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { client } from "./sanity/lib/client"
import { AUTHOR_GITHUB_BY_ID } from "./sanity/lib/queries"
import { writeClient } from "./sanity/lib/write-client"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks:{//working after authenticantion
    async signIn({user,profile}){//check if the user already exist or not
       const existingUser= await client.withConfig({useCdn:false}).fetch(AUTHOR_GITHUB_BY_ID,{id:profile?.id});
       if(!existingUser){
        await writeClient.create({
          _type:'author',
          _id:profile?.id,
          name:user?.name,
          username:profile?.login,
          email:user?.email,
          image:user?.image,
          bio:profile?.bio || '',
        }) 
       }
       return true;
    },
    async jwt({ token, account, profile }) {
  if (account && profile) {
    const user = await client.fetch(AUTHOR_GITHUB_BY_ID, { id: profile.id });

    if (user) {
      token.id = user._id;
    } else {
      // fallback to GitHub id if not found
      token.id = profile.id;
    }
  }
  return token;
}
,
    async session({ token, session }) {
  session.id = token.id as string | undefined;
  return session;
}


  }
 }) ;