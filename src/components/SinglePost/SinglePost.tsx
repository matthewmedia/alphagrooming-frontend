
import Image from "next/image"
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument} from "next-sanity";

import { dataset, projectId } from "@/sanity/env";

const builder = imageUrlBuilder({ projectId, dataset });

import urlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

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
//<img src={urlFor(author.image).width(200).url()} />
const SampleImageComponent: React.FC<{ value: ImageValue }> = ({ value }) => {
  const { width, height } = getImageDimensions(value.asset);
  return (
    <img
    src={urlFor(value.asset).width(300).fit('max').auto('format').url() || ''}
    alt={value.alt || ' '}
      loading="lazy"
    />
  );
};
export default function Post({ post }: { post: SanityDocument }) {
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
      {body ? <PortableText value={body} 
        components={{
          // ...
          types: {
            image: SampleImageComponent,
          },
        }}
      /> : null}
    </main>
  );
}