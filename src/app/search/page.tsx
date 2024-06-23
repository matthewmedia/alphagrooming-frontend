
import { loadQuery } from "@/sanity/lib/store";
import {SEARCH_QUERY } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import BeardCareSearch from "@/components/SearchComponent/SearchComponent";


export default async function BeardCare(context : any) {
   const searchQuery = context?.searchParams.query as string;
   const initial = await loadQuery<SanityDocument[]>(SEARCH_QUERY, { searchQuery: searchQuery ?? '' });
  
  return (
   <BeardCareSearch posts={initial.data}  />
  );
}



