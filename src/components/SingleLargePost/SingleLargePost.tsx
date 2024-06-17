import Image from "next/image";
import Link from "next/link";
import { SanityDocument } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";

const PostLayoutOne = ({ post }: { post: SanityDocument }) => {
  return (
    <div className="mx-auto sm:w-full md:w-3/4 lg:w-1/2">
      <Link href={post.slug.current}>
        <Image
          src={urlForImage(post.mainImage)}
          alt={post.mainImage.alt}
          width={840}
          height={840}
          placeholder="blur"
          blurDataURL="/images/placeholder.png"
          className="rounded-3xl"
        />
      </Link>
      <div className="mt-4">
        <h2 className="text-3xl font-bold text-white text-center">{post.title}</h2>
      </div>
    </div>
  );
};

export default PostLayoutOne;
