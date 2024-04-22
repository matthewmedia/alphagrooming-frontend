// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]{
    title,
    slug,
    mainImage,
    categories[]->{
      title
    },
    body
  }`;
export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;

export const LEFT_CARDS_QUERY = `*[_type == "post" && category[].title match "Beard Care"]{
    title,
    slug,
    mainImage,
    categories[]->{
      title
    },
    body
  }`

  export const CATEGORIES_QUERY = groq`*[_type == "category"]`;

  export const CATEGORY_QUERY = groq`count(*[_type == "post" && categories[].title match "Beard Care"])`;