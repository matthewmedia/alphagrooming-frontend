import Link from "next/link";
import Image from "next/image";
import { SanityDocument } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";

const MiniPost = ({ post } : { post: SanityDocument }) => {
    return (
        <div className="space-y-4 m-4 sm:m-8 md:m-16 flex flex-col sm:flex-row items-center">
            <Link href={post.slug.current}>
                <div className="block relative rounded-3xl overflow-hidden">
                    <Image
                        src={urlForImage(post.mainImage) || "/images/placeholder.png"}
                        alt={post.mainImage.alt}
                        width={240}
                        height={240}
                        placeholder="blur"
                        blurDataURL="/images/placeholder.png"
                        className="rounded-3xl"
                    />
                </div>
            </Link>
            <div className="w-full sm:w-3/4">
                <p className="text-left text-xl sm:text-2xl md:text-3xl font-bold mt-4 sm:mt-0 m-2 text-white">{post.title}</p>
                <p className="text-left text-sm sm:text-md md:text-base text-white m-2">{new Date(post.publishedAt).toDateString()}</p>
                <p className="text-left text-sm sm:text-md md:text-base text-white m-2">{post.author.name}</p>
            </div>
        </div>
    );
}

export default MiniPost;