"use client";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
// star icon
import { FaStar } from "react-icons/fa";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import React from "react";
import CardLayoutOne from "./CardLayoutOne";
import { Button } from "react-bootstrap";

const LayoutCards = ({ posts }: { posts: SanityDocument[] }) => {
  return (
    <>
      <div className="container mx-auto pt-10 pb-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
        {
          <Link href={`/beard-care`}>
          <div className="post-cat-group m-b-xs-10 rounded-3xl ">
            <div className={` p-6 bg-green-400 rounded-3xl flex items-center space-x-2 underline decoration-dotted underline-offset-8 decoration-white`}>
              <span className="text-white text-3xl font-bold">Beard Care</span>
              <FaStar className="text-yellow-400 animate-bounce" />
            </div>
          </div>
        </Link>
        }
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10">
          {posts.map((post, _index) => (
            <CardLayoutOne post={post} key={_index} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link href={`/beard-care`}>
            <p className="bg-gradient-to-r from-blue-500 to-green-500 p-10 px-96 flex items-center space-x-2 text-lg font-bold text-white hover:text-green-500 rounded-lg w-full">
              <span className="font-bold text-3xl">View All</span>
              <FaArrowRightLong />
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LayoutCards;
