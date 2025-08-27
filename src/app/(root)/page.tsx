import { auth } from "@/auth";
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { StartupCardSkeleton } from "@/components/StartupCardSkeleton";
import { StartupCardType } from "@/lib/types";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query ;
  const {data:posts}=await sanityFetch({query:STARTUP_QUERY,params:{search: query||null}})
  return (
    <>
    
      <section className="pattern py-16 xl:py-28 pink-container">
        <div className="header mt-20">
          <p>
            Pitch Your Startup, <br /> Connect With Entrepreneurs
          </p>
        </div>
        <p className="sub-header">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <div className="lg:px-16">
          <SearchForm query={query??""} />
        </div>
      </section>

      <section className="xl:px-28 md:px-10 px-3 py-10">
        <p className="font-semibold text-3xl  "> {query!=''?` Search Results for "${query}"`: 'All Startups'} </p>
        <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-y-5 my-5">
            {Array.from({ length: 10 }).map((_, i) => (
              <StartupCardSkeleton key={i} />
            ))}
          </div>}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-y-5 my-5">
          {posts?.map((p) => {
            return  <StartupCard key={p._id} post={p as StartupCardType}/>
          })}
        </div>
          </Suspense>
        
        
        
      </section>
      <SanityLive/>
    </>
  );
}
