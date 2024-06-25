"use client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "next-sanity";

import { dataset, projectId } from "@/sanity/env";

const builder = imageUrlBuilder({ projectId, dataset });

import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Link from "next/link";
import PortableTextTypeComponent from "@sanity/portable-text-editor";

const ReactPlayer = dynamic(
  () => import("react-player").then((mod) => mod.default),
  { ssr: false } // This will load the component only on client side
);
type ImageAsset = {
  _ref: string;
};

type ImageValue = {
  asset: ImageAsset;
  alt?: string;
};

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
function getYouTubeId(url: string) {
  const urlParts = url.split("/");
  return urlParts[urlParts.length - 1];
}

const SampleImageComponent: React.FC<{ value: ImageValue }> = ({ value }) => {
  return (
    <div className="flex justify-center m-4">
      <Image
        src={
          urlFor(value.asset).width(500).fit("max").auto("format").url() || ""
        }
        alt={value.alt || " "}
        loading="lazy"
        className="rounded-lg shadow-lg"
        width={300}
        height={300}
      />

    </div>
  );
};

export default function Post({ post }: { post: SanityDocument }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!post) {
    return <div>Loading...</div>; // or some other placeholder
  }
  const { title, mainImage, body } = post;
  console.log(body) 


  return (
    <main className="container mx-auto prose prose-lg p-4">
     
      <Link href="/beard-care">
        <span className="text-white font-bold transition duration-500 ease-in-out transform hover:scale-110 hover:text-green-200 bg-green-400 p-4 rounded-lg mt-4 mb-4">
          Beard Care & Grooming
        </span>
      </Link>
      {title ? <h1 className="text-black-body">{title}</h1> : null}
      {mainImage ? (
        <Image
          className="float-left m-0 w-1/3 mr-4 rounded-lg"
          src={builder.image(mainImage).url()}
          width={300}
          height={300}
          alt={mainImage.alt || ""}
        />
      ) : null}

      
      {body ? (
        <PortableText
          value={body
          }
       
          components={{
            
            block: {
              // Ex. 1: customizing common block types
             
         
              normal : ({children}) => <p className="text-black-body">{children}</p>, 
              h2 : ({children}) => <h2 className="text-black-body">{children}</h2>,
              h3 : ({children}) => <h3 className="text-black-body">{children}</h3>,




            },
            marks: {
              p: ({ children }) => <p className="your-custom-class">{children}</p>,
            },
            listItem: {
              // Ex. 1: customizing common list types
              bullet: ({children}) => <li style={{listStyleType: 'none'}} className="m-2 text-black-body">✅  {children}</li>,
          
              // Ex. 2: rendering custom list items
              checkmarks: ({children}) => <li className="m-2">✅ {children}</li>,
              h2 : ({children}) => <h2 className="text-2xl text-green">{children}</h2>, 
              p: ({children}) => <p className="text-2xl text-green">{children}</p>,
              text : ({children}) => <p className="text-2xl text-green">{children}</p>,
            },
            types: {
              image: SampleImageComponent,
              youTube: (body) => {
                const { value } = body;
                const { url } = value;
                const id = getYouTubeId(url);
                return (
                  <div className="flex justify-center items-center m-4">
                    {isClient ? <ReactPlayer url={url} /> : "Loading..."}
                  </div>
                );
              }
            },
          }}
        />
      ) : null}
    </main>
  );
}
