import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";


export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query ?? "";
  const posts = [
{
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1, name:'Nada Badawy' },
    _id: 1,
    description: "This is a description",
    image:
    "https://images.unsplash.com/photo-1634912314704-c646c586b131?q=806w=2940&auto=format&filterop&ixlib=b-4.03&ixid=M3wxMjA3fDB8MMkwaG9Qby1wYWd1fHx8fGVufDB8fHx8fAX3DX3D",
    category: "Robots",
    title: "We Robots",
},
];
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
          {posts.map((p)=>{
            return  <StartupCard key={p._id} post={p}/>
          })}
         

        </div>
      </section>
    </>
  );
}
