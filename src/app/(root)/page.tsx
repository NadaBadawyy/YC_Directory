import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { StartupCardType } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import { STARTUP_QUERY } from "@/sanity/lib/queries";


export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query ?? "";
  const posts=await client.fetch(STARTUP_QUERY)

  return (
    <>
      <section className="pattern py-16 xl:py-28 px-5 xl:px-52 bg-primary">
        <div className="header ">
          <p>
            Pitch Your Startup, <br /> Connect With Entrepreneurs
          </p>
        </div>
        <p className="sub-header">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <div className="lg:px-16">
          <SearchForm query={query} />
        </div>
      </section>

      <section className="px-28 py-10">
        <p className="font-semibold text-3xl  "> {query!=''?` Search Results for "${query}"`: 'All Startups'} </p>
        <div className="grid grid-cols-3 gap-5 my-5">
          {posts?.map((p) => {
            return  <StartupCard key={p._id} post={p as StartupCardType}/>
          })}
         

        </div>
      </section>
    </>
  );
}
