import { SanityDocument } from "next-sanity";
import LayoutFeatured from "../Layout/LayoutFeatured";

const PostSectionTwo = ({ posts }: { posts: SanityDocument[] }) => {
  return (
    <div className="flex justify-center items-center container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="grid gap-y-4">
          {posts.map((data) => (
            <LayoutFeatured post={data} key={data.slug} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default PostSectionTwo;
