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

import React from "react";
import Link from "next/link";

const ArchivedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center p-8">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        This Page is Archived
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        The content you are looking for is no longer available. However, feel free to explore other sections of our website.
      </p>
      <Link href="/">
        <div className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
          Go Back to Home
        </div>
      </Link>
    </div>
  );
};

export default async function Page({params} : {params: QueryParams}) {
  const initial = await loadQuery<SanityDocument>(POST_QUERY, params);
  console.log('initial', initial?.data?.keyword)
  if (initial?.data?.keyword?.includes("archived")) {
    return <ArchivedPage />;
  }


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