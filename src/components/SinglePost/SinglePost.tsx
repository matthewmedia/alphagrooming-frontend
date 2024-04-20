"use client"
import Image from "next/image"
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument} from "next-sanity";

import { dataset, projectId } from "@/sanity/env";

const builder = imageUrlBuilder({ projectId, dataset });

import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";


const ReactPlayer = dynamic(
  () => import('react-player').then((mod) => mod.default),
  { ssr: false } // This will load the component only on client side
);
type ImageAsset = {
  _ref: string;
};

type ImageValue = {
  asset: ImageAsset;
  alt?: string;
};


function urlFor(source :  SanityImageSource) {
  return builder.image(source)
}
function getYouTubeId(url: string) {
  const urlParts = url.split('/');
  return urlParts[urlParts.length - 1];
}

const SampleImageComponent: React.FC<{ value: ImageValue }> = ({ value }) => {
  return (
    <img
    src={urlFor(value.asset).width(300).fit('max').auto('format').url() || ''}
    alt={value.alt || ' '}
      loading="lazy"
    />
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

  return (
    <main className="container mx-auto prose prose-lg p-4">
      {title ? <h1>{title}</h1> : null}
      {mainImage ? (
        <Image
          className="float-left m-0 w-1/3 mr-4 rounded-lg"
          src={builder.image(mainImage).url()}
          width={300}
          height={300}
          alt={mainImage.alt || ''}
        />
      ) : null}
      {body ? <PortableText 
        value={body} 
        components={{
          types: {
            image: SampleImageComponent,
            youTube: (body) => {
              const { value } = body;
              const { url } = value;
              const id = getYouTubeId(url);
              return (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {isClient ? <ReactPlayer url={url} /> : 'Loading...'}
                </div>
              );

            },
           
          },
        }}
            
        
        
        /> : null}
    </main>
  );
}