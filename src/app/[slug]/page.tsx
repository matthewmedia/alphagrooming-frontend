// ./app/[slug]/page.tsx

import { QueryParams, SanityDocument } from "next-sanity";

import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY, POST_QUERY } from "@/sanity/lib/queries";
import Post from "@/components/SinglePost/SinglePost";
import { client } from "@/sanity/lib/client";
import HeadMeta from "@/components/HeadMeta/HeadMeta";

export async function generateStaticParams() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY)
 
  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

export default async function Page({params} : {params: QueryParams}) {
  const initial = await loadQuery<SanityDocument>(POST_QUERY, params);


  if (!initial) {
    return <div>Loading...</div>;
  }



  return  (
    <>
      <HeadMeta metaDescription={initial.data.metaDescription} metaTitle={initial.data.title}  metaImage={initial.data.mainImage} metAlt={initial.data?.mainImage?.alt}/>
      <Post post={initial.data} />
    </>
    
  )
}