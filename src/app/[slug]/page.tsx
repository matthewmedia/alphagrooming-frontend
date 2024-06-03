// ./app/[slug]/page.tsx

import { QueryParams, SanityDocument } from "next-sanity";

import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY, POST_QUERY } from "@/sanity/lib/queries";
import Post from "@/components/SinglePost/SinglePost";
import { client } from "@/sanity/lib/client";
import type { Metadata } from 'next'
import { url } from "inspector";
import { SchemaMarkup } from "@/components/SchemaMarkup/SchemaMarkup";
 
type Props = {
  params: { id: string, slug: string}
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateStaticParams() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY)
 
  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
 
  // fetch data
  const initial = await loadQuery<SanityDocument>(POST_QUERY, params);
  

  return {
    title: initial?.data?.title,
    openGraph: {
      siteName: 'AlphaGrooming',

      images: [
      {
        url: initial.data?.mainImage?.asset?.url,
        width: 1600,
        height: 1490,
        alt: initial.data?.mainImage?.alt,
      }
      ],
      type: 'article',
      authors: [initial.data?.author?.name],
      publishedTime: initial?.data?.publishedAt,
      url: `/${params.slug}`,
      locale: 'en_US',
      tags: initial?.data?.keywords,
    },
    description: initial?.data?.metaDescription,
    alternates: {
      canonical: `/${params.slug}`,
    },
    keywords: [initial?.data?.keywords],
 
  

  }
}


export default async function Page({params} : {params: QueryParams}) {
  const initial = await loadQuery<SanityDocument>(POST_QUERY, params);


  if (!initial) {
    return <div>Loading...</div>;
  }




  return  (
    <>
      <Post post={initial.data} />
      {initial?.data?.schemaMarkup && <SchemaMarkup schema={initial?.data?.schemaMarkup} />}

    </>
    
  )
}