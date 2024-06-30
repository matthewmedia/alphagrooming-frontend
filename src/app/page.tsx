import Layout from "@/components/Layout/Layout";
import "../app/globals.css";
import { FaAlignCenter } from "react-icons/fa";
import PostLayoutThirteen from "@/components/PostLayoutOne/CardLayoutOne";
import HeadMeta from "@/components/HeadMeta/HeadMeta";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";

import PostSectionTwo from "@/components/SectionLayout/SectionLayout";
import PostLayoutOne from "@/components/SingleLargePost/SingleLargePost";
import MiniPost from "@/components/MiniPost/MiniPost";
import { Button } from "react-bootstrap";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import LayoutCards from "@/components/PostLayoutOne/LayoutHorizontalCards";
import Logo from "@/components/Logo/Logo";

export default async function Home() {
  const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY);


  const postsWithKeywordsAndMetaDescription = initial.data.filter(
    (post) => post.keyword && post.metaDescription
  );

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
          <h1 className="text-6xl font-bold mb-4 italic text-center">
            Beard Insights
          </h1>
        </div>
        <div className="flex items-center justify-center space-x-16">
          <LayoutCards posts={postsWithKeywordsAndMetaDescription} />
        </div>

        <div className="recent-news-wrapper section-gap flex flex-col sm:flex-row justify-center items-center mx-auto bg-blue-500 px-16 mx-16 rounded-3xl shadow-lg">
          <div>
            <h2 className="text-6xl font-bold text-white text-center">
              Tips, Products, and Habits
            </h2>
            <div className="text-center flex items-center justify-center ">
              <Logo />
            </div>
          </div>
          <PostLayoutOne post={initial.data[13]} />
          <div className="">
            {initial.data.slice(15, 18).map((post) => (
              <MiniPost key={post._id} post={post} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
