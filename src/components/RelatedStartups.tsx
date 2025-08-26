import { sanityFetch } from "@/sanity/lib/live";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
import { Suspense } from "react";
import { StartupCardSkeleton } from "./StartupCardSkeleton";
import StartupCard from "./StartupCard";
import { StartupCardType } from "@/lib/types";

async function RelatedStartups({category,id}:{category:string,id:string}) {
        const {data:posts}=await sanityFetch({query:STARTUP_QUERY,params:{search: null}});
        const RelatedPosts=posts.filter((p)=>p.category?.toLowerCase().includes(category.toLowerCase()) && p._id!=id)
    console.log(posts,RelatedPosts);
  return (
    <>
    {RelatedPosts.length>0&&<>
      <p className="font-semibold text-3xl  ">Related Startups</p>
            <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-y-5 my-5">
                        {Array.from({ length: 10 }).map((_, i) => (
                          <StartupCardSkeleton key={i} />
                        ))}
                      </div>}>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-y-5 my-5">
                      {RelatedPosts?.map((p) => {
                        return  <StartupCard key={p._id} post={p as StartupCardType}/>
                      })}
                    </div>
                      </Suspense>
    
    
    </>}
          
      
    </>
  )
}

export default RelatedStartups
