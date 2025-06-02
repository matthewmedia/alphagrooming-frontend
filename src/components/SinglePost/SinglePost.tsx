"use client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "next-sanity";
import { dataset, projectId } from "@/sanity/env";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";

const builder = imageUrlBuilder({ projectId, dataset });

const ReactPlayer = dynamic(
  () => import("react-player").then((mod) => mod.default),
  { ssr: false }
);

type ImageAsset = {
  _ref: string;
};

type ImageValue = {
  asset: ImageAsset;
  alt?: string;
};

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

function getYouTubeId(url: string) {
  const urlParts = url.split("/");
  return urlParts[urlParts.length - 1];
}

const SampleImageComponent: React.FC<{ value: ImageValue }> = ({ value }) => {
  return (
    <div className="my-8 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Image
        src={
          urlFor(value.asset).width(800).fit("max").auto("format").url() || ""
        }
        alt={value.alt || "Content image"}
        loading="lazy"
        className="w-full h-auto object-cover"
        width={800}
        height={400}
      />
    </div>
  );
};

export default function Post({ post }: { post: SanityDocument }) {
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading amazing content...</p>
        </div>
      </div>
    );
  }

  const { title, mainImage, body } = post;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50/30">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Fragrance & Perfume
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          {/* Article Meta */}
          <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Today</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
            <button className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>

          {/* Title */}
          {title && (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
              {title}
            </h1>
          )}

          {/* Hero Image */}
          {mainImage && (
            <div className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              <Image
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                src={builder.image(mainImage).width(1200).url()}
                width={1200}
                height={600}
                alt={mainImage.alt || "Article hero image"}
                priority
              />
            </div>
          )}
        </div>

        {/* Content */}
        <article className="prose prose-lg prose-gray max-w-none">
          {body && (
            <PortableText
              value={body}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="text-gray-700 leading-relaxed text-lg mb-6 font-light">
                      {children}
                    </p>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-b-2 border-emerald-500 pb-3">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
                      {children}
                    </h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
                      {children}
                    </h4>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-emerald-500 pl-6 my-8 italic text-gray-700 bg-emerald-50/50 py-4 rounded-r-lg">
                      {children}
                    </blockquote>
                  ),
                },
                marks: {
                  strong: ({ children }) => (
                    <strong className="font-semibold text-gray-900">
                      {children}
                    </strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic text-emerald-700">{children}</em>
                  ),
                  link: ({ children, value }) => (
                    <a
                      href={value?.href}
                      className="text-emerald-600 hover:text-emerald-700 font-medium underline decoration-emerald-300 hover:decoration-emerald-500 transition-colors"
                    >
                      {children}
                    </a>
                  ),
                },
                listItem: {
                  bullet: ({ children }) => (
                    <li className="flex items-start gap-3 mb-3 text-gray-700">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-3 flex-shrink-0"></span>
                      <span className="flex-1">{children}</span>
                    </li>
                  ),
                  checkmarks: ({ children }) => (
                    <li className="flex items-start gap-3 mb-3 text-gray-700">
                      <span className="text-emerald-500 text-lg flex-shrink-0">
                        ✅
                      </span>
                      <span className="flex-1">{children}</span>
                    </li>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className="space-y-2 my-6">{children}</ul>
                  ),
                  number: ({ children }) => (
                    <ol className="space-y-2 my-6 counter-reset-list">
                      {children}
                    </ol>
                  ),
                },
                types: {
                  image: SampleImageComponent,
                  youTube: (body) => {
                    const { value } = body;
                    const { url } = value;
                    return (
                      <div className="my-12">
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <ReactPlayer
                            url={url}
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                          />
                        </div>
                      </div>
                    );
                  },
                },
              }}
            />
          )}
        </article>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Enjoyed this article?</h3>
          <p className="text-white mb-6">
            Discover more amazing content in our collection.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-50 transition-colors duration-300"
          >
            Explore More Articles
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </main>
    </div>
  );
}
