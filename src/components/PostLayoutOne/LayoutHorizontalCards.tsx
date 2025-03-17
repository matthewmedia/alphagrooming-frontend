"use client";

import { FaStar } from "react-icons/fa";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import React from "react";
import CardLayoutOne from "./CardLayoutOne";
import { GiPerfumeBottle } from "react-icons/gi"; // Import the perfume bottle icon

const LayoutCards = ({
  posts,
  hideCategoryHeader,
}: {
  posts: SanityDocument[];
  hideCategoryHeader?: boolean;
}) => {
  return (
    <>
      <div className="container mx-auto pt-10 pb-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
        {!hideCategoryHeader && (
          <Link href={`/beard-care`}>
            <div className="post-cat-group m-b-xs-10 rounded-3xl ">
              <div
                className={` p-6 bg-green-400 rounded-3xl flex items-center space-x-2 underline decoration-dotted underline-offset-8 decoration-white`}
              >
                <span className="text-white text-3xl font-bold">
                Fragrance & Perfume
                </span>
                <GiPerfumeBottle className="text-pink-300 animate-bounce" />
              </div>
            </div>
          </Link>
        )}
        <div className="grid justify-items-center  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10 ">
          {posts.map((post, _index) => (
            <CardLayoutOne post={post} key={_index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LayoutCards;
