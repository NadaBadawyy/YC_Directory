import { client } from "@/sanity/lib/client"
import { AUTHER_STARTUP_QUERY } from "@/sanity/lib/queries"
import StartupCard from "./StartupCard"
import { StartupCardType } from "@/lib/types"

async function UserStartups({id}:{id:string}) {
    const startups=await client.fetch(AUTHER_STARTUP_QUERY,{id})
  return (
    <>
      {startups.length>0 ?<>
      {startups.map((s:StartupCardType)=><StartupCard post={s} key={s._id}/>)}
      
      </>:<p className="text-3xl underline p-5 bg-primary-100 rounded-3xl w-fit shadow-xl   "> No Posts Yet</p>}
    </>
  )
}

export default UserStartups
