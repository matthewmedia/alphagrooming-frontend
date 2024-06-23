// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]{
    title,
    slug,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    metaDescription,
    categories[]->{
      title
    },
    publishedAt,
    author->{
      name,
    },
    keyword [],
  }`;
export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  metaDescription,
  body,
  publishedAt,
  author -> {
    name,
    image {
      asset->{
        url
      }
    }
  },
  categories[]->{
    title
  },
  keyword[],
  schemaMarkup
}`;

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

export const PRIVACY_POLICY_QUERY = groq`*[_type == "category" && title == "Privacy"]`;

export const SEARCH_QUERY = groq`*[_type == "post" && title match $searchQuery]{
  title,
  slug,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  metaDescription,
  categories[]->{
    title
  },
  publishedAt,
  author->{
    name,
  },
  keyword [],
}`;