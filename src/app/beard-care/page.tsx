import Layout from "@/components/Layout/Layout";
import HeadMeta from "@/components/HeadMeta/HeadMeta";
import { loadQuery } from "@/sanity/lib/store";
import {
  POSTS_QUERY,
} from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import BeardCategory from "@/components/BeardCategory/BeardCategory";





export default async function BeardCare() {
  const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY);
 
  return (
    <>
      <HeadMeta />
      <Layout style={{ backgroundImage: `url('/background.png')` }}>
        <div
          className="bg-gradient-to-r from-green-400 to-blue-500 border rounded-3xl shadow-lg p-16 mb-36"
          style={{ backgroundImage: `url('/shaving-brush-bg.jpeg')` }}
        >
            <div className="flex items-center justify-left space-x-16">
            <BeardCategory posts={initial.data} /> 
            </div>
        </div>
      </Layout>
    </>
  );
}
