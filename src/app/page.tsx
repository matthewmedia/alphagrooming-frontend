import Layout from "@/components/Layout/Layout";
import "../app/globals.css";
import { FaAlignCenter } from "react-icons/fa";
import PostLayoutThirteen from "@/components/PostLayoutOne/PostLayoutOne";
import HeadMeta from "@/components/HeadMeta/HeadMeta";
import { loadQuery } from "@/sanity/lib/store";
import {
  POSTS_QUERY,
} from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";

import PostSectionTwo from "@/components/SectionLayout/SectionLayout";
import PostLayoutOne from "@/components/SingleLargePost/SingleLargePost";
import MiniPost from "@/components/MiniPost/MiniPost";
import { Button } from "react-bootstrap";
import ProgressBar from "@/components/ProgressBar/ProgressBar";


export default async function Home() {
  const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY);

  // left hand side cards
  const leftCards = initial.data.slice(0, 6);
  const rightCards = initial.data.slice(8, 13);





  return (
    <>
      <ProgressBar color={"#33cc99"} />

      <HeadMeta />
      <Layout style={{ backgroundImage: `url('/background.png')` }}>
        <div
          className="bg-gradient-to-r from-green-400 to-blue-500 border rounded-3xl shadow-lg p-16 mb-36"
          style={{ backgroundImage: `url('/shaving-brush-bg.jpeg')` }}
        >
          <div className="bg-green-400 border rounded-3xl shadow-lg p-4">
            <PostSectionTwo posts={initial.data} />
          </div>
        </div>
          <div className="flex items-center justify-center space-x-8">
          <FaAlignCenter className="text-6xl text-custom-green " />
          <h1 className="text-6xl font-bold mb-4 italic text-center">Beard Insights</h1>
          </div>
        <div className="flex items-center justify-left space-x-16">
          <PostLayoutThirteen posts={leftCards} />
          <PostLayoutThirteen posts={rightCards} />
        </div>
        <div className="flex items-center justify-center space-x-16 ml-56">
        <Button className="bg-custom-green text-white font-bold text-2xl m-4 w-full sm:w-4/5 px-4 pt-8 sm:ml-60 text-white"
        href="/beard-care"
        >
          <span className="text-white">Load More</span>
        </Button>
        </div>
        
        <div className="recent-news-wrapper section-gap flex justify-center ">
          <PostLayoutOne post={initial.data[13]} />
          <div className="flex flex-col ">
            {initial.data.slice(15, 18).map((post) => (
              <MiniPost key={post._id} post={post} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
