"use client"
import Image from "next/image";
import { SanityDocument } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";
import React from "react";
import Link from "next/link";

const CardLayoutOne = ({ post}: { post: SanityDocument }) => {
  return (

   
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-transparent">   
      <Link href={post.slug.current}>
        <Image
          src={urlForImage(post.mainImage)}
          alt={post.mainImage.alt}
          width={800}
          height={800}
          placeholder="blur"
          blurDataURL="/images/placeholder.png"
          className="rounded-3xl"
          /> 
   
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{post.title}</div>
            <p className="text-gray-700 text-base">
             {post.metaDescription}
            </p>
          </div>
          <div className="px-6">
            {post.keyword  && post?.keyword.map((category : string , index : number) => (
              category  && <span key={index} className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">
                {category  && `#${category}`}
              </span>
            ))}
          </div> 
      </Link>
      </div>
     
      
  );
};

export default CardLayoutOne;
