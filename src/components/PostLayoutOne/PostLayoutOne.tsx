import Image from "next/image";
import Logo from "../Logo/Logo";
import { FaArrowRightLong } from "react-icons/fa6";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import PostLayoutThirteen from "../PostLayoutBasic/PostLayoutBasic";



const PostLayoutOne = ({ posts }: { posts: SanityDocument[] }) => {

  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-auto">

        {posts.map((post) => (
        
            
            <div 
            key={post._id}
            className="align-self-center border border-custom-green rounded-3xl shadow-2xl	bg-white px-4 pt-8 transform transition-transform duration-200 hover:scale-105 w-4/5 h-auto mx-auto ">
            <Link href={post.slug.current}>
                <div className="border border-custom-green rounded-3xl w-full">
                    <Image
                        src={urlForImage(post.mainImage)}
                        alt={post.mainImage.alt}
                        layout="responsive"
                        width={100}
                        height={50}
                        placeholder="blur"
                        blurDataURL="/images/placeholder.png"
                        className="rounded-3xl"
                    />
                </div>
                    <div className="flex flex-col items-start">
                        <div className="block">
                            <h3 className="mt-8 text-3xl">{post.title}</h3>
                        </div>      
                        <div className="flex items-center mt-[-20px]">
                                <h4 className="text-custom-green text-2xl px-2">Read Full Article</h4>
                                <FaArrowRightLong className="text-2xl text-custom-green thin-arrow mt-[-20px]" />
                        </div>
                        <Image
                        src={'/alpha-grooming-bg-clear.png'}
                        alt="Alpha Grooming logo"
                        height="20"
                        width="50"
                        className="h-20 tablet:h-[100px] object-contain object-right ml-auto mt-[-30px] transform hover:scale-110 hover:-translate-x-1 hover:translate-x-1 transition-transform duration-200"
                        />
                    </div>
            </Link>
            </div>
        ))}
        </div>
        
   
    </>
  );
};

export default PostLayoutOne;
