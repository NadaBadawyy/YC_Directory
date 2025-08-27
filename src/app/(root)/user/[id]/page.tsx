import { auth } from "@/auth";
import { StartupCardSkeleton } from "@/components/StartupCardSkeleton";
import UserStartups from "@/components/UserStartups";
import { client } from "@/sanity/lib/client";
import { AUTHOR_GITHUB_BY_ID } from "@/sanity/lib/queries";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await auth();
  const user = await client.fetch(AUTHOR_GITHUB_BY_ID, { id });
  if (!user) return notFound();
  return (
    <section className="mt-24 py-10 md:px-10 px-3 ">
      <div className=" bg-primary  border-t-4 border-r-8 border-l-4 border-b-8 border-black rounded-4xl m-auto text-center relative z-[1]">
        <Image
          src={`${user.image}`}
          alt="user image"
          width={220}
          height={220}
          className="m-auto rounded-full mt-5 border-2 border-black"
        />
        <p className="m-3 text-3xl text-white font-semibold">
          @{user.username}
        </p>

        <p className="text-white text-md">{user.bio}</p>
        <div
          className="absolute -top-7 right-4 left-4 rounded-3xl bg-white text-center p-3 border-4 border-black after:absolute after:content-[''] after:-top-1 after:right-0 after:-skew-y-3 after:bg-black after:rounded-3xl after:w-full after:h-[60px] after:-z-[1]
    before:absolute before:content-[''] before:-bottom-1 before:left-0 before:-skew-y-3 before:w-full before:h-[60px] before:bg-black before:rounded-3xl before:-z-[1] shadow-100"
        >
          <p className="uppercase font-bold text-2xl">{user.name}</p>
        </div>
      </div>
      <div className="my-5">
        <p className="font-semibold text-4xl">
          {session?.id == id ? "Your" : "All"} Startups
        </p>
        <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-y-5 my-5">
    {Array.from({ length: 3 }).map((_, i) => (
      <StartupCardSkeleton key={i} />
    ))}
  </div>}>
  
 
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-y-5 my-5">
          
            <UserStartups id={id} />
          
        </div>
  
  </Suspense>
        
      </div>
    </section>
  );
}
