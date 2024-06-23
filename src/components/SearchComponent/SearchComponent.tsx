"use client"
import Layout from "@/components/Layout/Layout";
import HeadMeta from "@/components/HeadMeta/HeadMeta";
import { SanityDocument } from "next-sanity";
import LayoutCards from "@/components/PostLayoutOne/LayoutHorizontalCards";
import { SearchContext } from "@/contexts/SearchContextProvider/SearchContextProvider";
import React, {  use, useContext, useEffect} from "react";
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation'



export default function BeardCareSearch({
  posts,
}: {
  posts: SanityDocument[];
}) {
 
  const { searchQuery, setSearchQuery, setShouldSearch, shouldSearch } = useContext(SearchContext);

  const searchParams = useSearchParams()
  const query = searchParams?.get('query');

  useEffect(() => {
    setShouldSearch(true);
  },[shouldSearch])
   
 



  
    return (
    <>
      <HeadMeta />
      <Layout style={{ backgroundImage: `url('/background.png')` }}>
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Search Results for &apos;{query}&apos;
          </h2>
          <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
            Search Results
          </span>
        </div>
        {posts.length === 0 && (
            <div className="flex items-center justify-center h-96">
                <h2 className="text-5xl font-semibold text-neutral-500 dark:text-neutral-400">
                No results found
                </h2>
            </div>
            
        )}
        <LayoutCards posts={posts} hideCategoryHeader />
      </Layout>
    </>
  );
}


