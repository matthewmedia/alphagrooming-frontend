import Layout from "@/components/Layout/Layout";
import "../app/globals.css";
import Navigation from "@/components/Navigation/NavigationBar";
import { Slogan } from "@/components/Slogan/Slogan";
import ImageComponent from "@/components/ImageComponent/ImageComponent";
import { FaAlignCenter } from "react-icons/fa";
import PostLayoutThirteen from "@/components/PostLayoutOne/PostLayoutOne";


export default function Home() {
  return (
    <>
      <Navigation />
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
              <FaAlignCenter className="text-6xl text-custom-green"/>
              <h2 className="text-6xl text-dark-500">Trending Articles</h2>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-16"> 
            <PostLayoutThirteen image={'/men-face-mask.jpg'} text={'The Best Face Routine For Men in 2023'}/>
            <PostLayoutThirteen image={'/beard.jpg'} text ={'How Often Should You Apply Beard Oil'}/>
          </div>

      </Layout>
    </>
  )
}