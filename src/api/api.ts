
import { client } from "@/sanity/lib/client";

import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";


export async function getSlugs() {
    const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY)
    const sanitizedPosts = posts.filter(
        (post) => !(post?.keyword?.includes("archived"))
    );
    const slugs = sanitizedPosts.map((post) => post.slug.current)


    return slugs

}