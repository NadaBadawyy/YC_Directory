import RelatedStartups from "@/components/RelatedStartups";
import Views from "@/components/Views";
import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { STARTUP_DETAILS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
export default async function StartupDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await client.fetch(STARTUP_DETAILS_QUERY, { id });

    
  if (!post) return notFound();
  return (
    <section>
      <div className="pink-container pb-5  pt-12 xl:pt-20 pattern  ">
        <div className="flex items-center justify-center my-5  ">
          <div className="bg-container-time px-7 py-3 font-semibold rounded-lg relative tag-tri z-0 ">
           {formatDate(post?._createdAt) }
          </div>
        </div>

        <div className="header">
          <p className="">{post?.title}</p>
        </div>
        <div className="sub-header">
          <p>{post?.description}</p>
        </div>
      </div>
      <div className="px-5 md:px-24 my-5 ">
        <div className="flex justify-between items-center ">
          <Link href={`/author/${id}`}> 
          <div className="flex gap-2 items-center">
            <img src={`${post?.author?.image}`} alt="img" width={64} height={64} className="rounded-full shadow-lg" />
            <div className="">
               <p className="font-medium text-xl" >{post?.author?.name}</p>
          <p className="text-black-300" >@{post?.author?.username}</p>
            </div>
         
          </div>
          </Link>
         
          <div className="px-5 py-2 bg-primary-100 rounded-full font-medium">
            <p>{post?.category}</p>
          </div>
        </div>
        <img src={`${post?.image}`} className="my-5  rounded-xl m-auto object-cover w-full max-h-[600px] " alt=""  height={400}/>
<RelatedStartups category={post?.category||''} id={post._id}/>
      </div>
      <Views id={id}/>
                

    </section>
  );
}
