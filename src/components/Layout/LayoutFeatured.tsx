"use client"

import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { usePathname } from 'next/navigation'

interface PostLayoutElevenProps {
    
    postSizeLg?: boolean;
    pClass?: string;
    videoPost?: boolean;
    post: SanityDocument
}

const LayoutFeatured = ({ post } : PostLayoutElevenProps ) => {
  return (
    <>
	<div className="axil-img-container ">
		<Link href={`/${post.slug.current}`}>
			<Image
			src={urlForImage(post?.mainImage)}
            alt={post.mainImage.alt}
			width={250}
			height={250}
            className="img-fluid rounded-2xl"
            layout="responsive"
			/>
		</Link>
	</div>

    <div className="bg-white rounded-lg shadow-lg p-4 ">
        <Link href={`/${post.slug.current}`}>
        <h3 className="mt-4 text-3xl text-black hover:underline transition duration-300">{post.title}</h3>
        </Link>
        <Image
         src={'/alpha-grooming-bg-clear.png'}
         alt="Alpha Grooming logo"
         height="20"
         width="50"
         className="h-20 tablet:h-[100px] object-contain object-right ml-auto mt-[-30px] transform hover:scale-110 hover:-translate-x-1 hover:translate-x-1 transition-transform duration-200"
        />
     </div>
   </>
  );
};

export default LayoutFeatured;