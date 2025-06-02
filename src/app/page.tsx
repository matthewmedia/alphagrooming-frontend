// src/app/page.tsx (Server Component)
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { SanityDocument } from "sanity";
import Index, { SanityDocumentPost } from ".";

export default async function HomePage() {
  const initialData = await loadQuery<SanityDocumentPost[]>(POSTS_QUERY);

  return <Index initialData={initialData.data} />;
}
