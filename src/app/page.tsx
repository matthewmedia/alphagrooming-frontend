import Layout from "@/components/Layout/Layout";
import "../app/globals.css";
import { Slogan } from "@/components/Slogan/Slogan";
import ImageComponent from "@/components/ImageComponent/ImageComponent";
import { FaAlignCenter } from "react-icons/fa";
import PostLayoutThirteen from "@/components/PostLayoutOne/PostLayoutOne";
import HeadMeta from "@/components/HeadMeta/HeadMeta";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";

export default async function Home() {

  const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY);


  return (
    <>
      <HeadMeta/>
      <Layout style={{ backgroundImage: `url('/background.png')` }}>
        <div className="flex items-center justify-center  mt-auto flex-col sm:flex-row items-start">
          <div className=" flex text-center items-top justify-top min-h-screen content-top place-items-top lg:mb-16">
            <Slogan />
          </div>
          <div className="flex min-h-screen flex-col items-start justify-start p-16 mt-[-280px] sm:mt-[-80px]">
            <ImageComponent/>
          </div>
        </div>
          <div className=" mb-16">
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