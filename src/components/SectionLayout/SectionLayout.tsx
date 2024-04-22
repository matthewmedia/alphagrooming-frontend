import { SanityDocument } from "next-sanity";
import LayoutFeatured from "../Layout/LayoutFeatured";



const PostSectionTwo = ( { posts }: { posts: SanityDocument[] }) => {

    return (
       
        <div className="flex justify-center items-center container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="grid gap-y-4">
              {posts.slice(1, 3).map((data) => (
                <LayoutFeatured post={data} key={data.slug}/>
              ))}
            </div>
            <div className="lg:col-span-2 gap-y-4 flex justify-center items-center">
              {posts.slice(3, 4).map((data) => (
                <div className="" key={data.slug}>
                <LayoutFeatured post={data} postSizeLg />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-1 md:col-span-3 xl:col-span-1">
              {posts.slice(6, 8).map((data) => (
                <LayoutFeatured post={data} key={data.slug}/>
              ))}
            </div>
          </div>
        </div>
       
    )
}
export default PostSectionTwo;