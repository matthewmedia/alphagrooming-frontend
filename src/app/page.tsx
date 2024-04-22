import Layout from "@/components/Layout/Layout";
import "../app/globals.css";
import { FaAlignCenter } from "react-icons/fa";
import PostLayoutThirteen from "@/components/PostLayoutOne/PostLayoutOne";
import HeadMeta from "@/components/HeadMeta/HeadMeta";
import { loadQuery } from "@/sanity/lib/store";
import { CATEGORIES_QUERY, CATEGORY_QUERY, LEFT_CARDS_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";

import PostSectionTwo from "@/components/SectionLayout/SectionLayout";

interface Category {
  title: string;
  description: string;
}

export default async function Home() {

  const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY);
  const leftcards = await loadQuery<SanityDocument[]>(CATEGORY_QUERY);
  const leftcard = await loadQuery<SanityDocument[]>(CATEGORIES_QUERY);


 



  const leftCards = initial.data.filter((post) => {
    return post.categories && post.categories.some((category: Category) => category.title === "small-card-beards");
  });


  




  return (
    <>
      <HeadMeta/>
      <Layout style={{ backgroundImage: `url('/background.png')` }}>
      <div className="bg-gradient-to-r from-green-400 to-blue-500 border rounded-3xl shadow-lg p-16 mb-36" style={{ backgroundImage: `url('/shaving-brush-bg.jpeg')` }}>
        <div className="bg-green-400 border rounded-3xl shadow-lg p-4">
        <PostSectionTwo posts={initial.data}/>
        </div>
      </div>
          <div className=" gap-36	">
            <div className="flex items-center justify-center ">
              <FaAlignCenter className="text-6xl text-custom-green mb-6"/>
              <h2 className="text-6xl text-dark-500">Trending Articles</h2>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-16"> 
            <PostLayoutThirteen posts={initial.data}/>
          </div>
      </Layout>
    </>
  )
}