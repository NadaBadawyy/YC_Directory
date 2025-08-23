import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import { after } from "next/server";

export default async function Views({id}:{id:string}) {
    const {views}=await client.withConfig({useCdn:false}).fetch(STARTUP_VIEWS_QUERY,{id})
    after(async()=>await writeClient.patch(id).set({views:views+1}).commit())
  return (
    <>
      <div className="bg-primary-100 p-3 rounded-xl fixed bottom-3 right-3">
        <div className="flex items-center">
          <div className="p-2 rounded-full bg-primary absolute  -top-2 right-0 z-10"></div>
          <div className="p-2 rounded-full bg-primary absolute  -top-2 right-0 animate-ping "></div>

        </div>
              
        <p className="font-medium">Views: {views}</p>
      </div>
    </>
  )
}
