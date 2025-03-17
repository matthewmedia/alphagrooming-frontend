import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

const BeardCategory = ({ posts }: { posts: SanityDocument[] }) => {
  return (
    <>
      <div className="flex flex-col">
        {posts.map((post) => (
          <div
            key={post._id}
            className="border border-custom-green rounded-3xl shadow-2xl bg-white px-4 pt-8 transform transition-transform duration-200 hover:scale-105 w-4/5 h-auto mx-auto m-4 "
          >
            <Link href={post.slug.current}>
              <div className="flex items-start space-x-4">
                <div className=" rounded-3xl w-1/3 m-4 relative">
                  <Image
                    src={urlForImage(post.mainImage) || "/images/placeholder.png"}
                    alt={post.mainImage.alt}
                    width={400}
                    height={400}
                    placeholder="blur"
                    blurDataURL="/images/placeholder.png"
                    className="rounded-3xl"
                  />
                  <Link href={`/beard-care`}>
                    <div className="post-cat-group m-b-xs-10 absolute top-5 left-10 rounded-3xl">
                      <p
                        className={`post-cat cat-btn bg-green-400 rounded-3xl`}
                      >
                        Fragrance & Perfume
                      </p>
                    </div>
                  </Link>
                  <div className="flex flex-col sm:flex-row justify-between">
                    <p className="text-left text-black-500 text-1xl sm:text-2xl m-4 font-bold">
                      {post.author?.name}
                    </p>
                    <p className="text-left text-black-500 text-1xl sm:text-2xl m-4 font-bold">
                      {new Date(post.publishedAt).toDateString()}
                    </p>
                  </div>
                </div>
                <span className="w-2/3">
                  <div className="block">
                    <h3 className="mt-8 text-3xl m-4">{post.title}</h3>
                    <p className="text-left md:text-left text-gray-500 text-1xl md:text-2xl m-4 ">
                      {post.metaDescription}
                    </p>
                  </div>
                  <div className="">
                    <h4 className="text-custom-green text-2xl px-2">
                      Read Full Article
                    </h4>
                    <FaArrowRightLong className="text-2xl text-custom-green thin-arrow mt-[-20px]" />
                  </div>
                  <Image
                    src={"/alpha-grooming-bg-clear.png"}
                    alt="Alpha Grooming logo"
                    height="20"
                    width="50"
                    className="h-20 tablet:h-[100px] object-contain object-right ml-auto mt-[-30px] transform hover:scale-110 hover:-translate-x-1 hover:translate-x-1 transition-transform duration-200"
                  />
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default BeardCategory;
