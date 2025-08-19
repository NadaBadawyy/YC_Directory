import { client } from '@/sanity/lib/client';
import { STARTUP_DETAILS_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import React from 'react'
export default async function StartupDetails({params}:{params:Promise<{id:string}>}) {
    const {id}=await params;
    const post = await client.fetch(STARTUP_DETAILS_QUERY,{id})
    if(!post) return notFound()
  return (
    <>
      <h1 className='text-3xl mt-28 '> Hello {id} </h1>
    </>
  )
}
