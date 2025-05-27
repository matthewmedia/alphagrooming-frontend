import Layout from "@/components/Layout/Layout";
import HeadMeta from "@/components/HeadMeta/HeadMeta";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";

import Image from "next/image";
import LayoutCards from "@/components/PostLayoutOne/LayoutHorizontalCards";

export default async function BeardCare() {
  const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY);
  const sanitzedPosts = initial.data.filter(
    (post) => !post?.keyword?.includes("archived")
  );

  return (
    <>
      <HeadMeta />
      <Layout style={{ backgroundImage: `url('/background-perfume.jpg')` }}>
        <div className="bg-gradient-to-r border rounded-3xl shadow-lg">
          <div className="flex flex-col items-center justify-center space-y-2 text-center bg-gradient-to-r from-purple-500 to-pink-400 mt-24 md:mt-32 lg:mt-48 xl:mt-64 2xl:mt-96 rounded-3xl shadow-2xl p-16">
            <div>
              <h1 className="text-5xl text-white font-bold text-center mb-[0.1rem]">
                Fragrance & Perfume
              </h1>
              <h2 className="text-2xl text-white font-thin">
                Discover Your Signature Scent
              </h2>
            </div>
            <Image
              src="/beard-graphic.gif"
              alt="Fragrance & Perfume"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
        </div>
        <LayoutCards posts={sanitzedPosts} hideCategoryHeader />
      </Layout>
    </>
  );
}
