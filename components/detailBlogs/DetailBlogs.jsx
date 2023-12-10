"use client";

import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { CgCalendarDates } from "react-icons/cg";
import Image from "next/image";
import { BlogData } from "@/context/BlogContext";
import Footer from "../custom/Footer";

const DetailBlogs = ({ id }) => {
  const { blogData } = BlogData();
  const blogDataById = blogData[id - 1];

  return (
    <div className="wrapper w-full h-fit">
      <div className="head-all-event pt-28 pb-10 w-full h-fit flex justify-center items-center flex-col px-5 Mobile-M:px-6">
        <div className="breadcumbs flex justify-center items-center gap-3 self-start">
          <Link
            href="/"
            className="text-sm cursor-pointer font-medium text-[#A6A6A6]"
          >
            Home
          </Link>
          <IoIosArrowForward className="text-[#A6A6A6]" />
          <Link
            href="/all-blogs"
            className="text-sm cursor-pointer font-medium text-[#A6A6A6]"
          >
            Blogs
          </Link>
          <IoIosArrowForward className="text-[#A6A6A6]" />
          <Link
            href="#"
            className="text-sm cursor-pointer font-medium text-primary"
          >
            Detail Blog
          </Link>
        </div>
        <div className="w-full h-fit flex justify-center items-center mt-6 Mobile-M:mt-7">
          <Image
            src={blogDataById.imagePath}
            width={350}
            height={250}
            alt="image-blog"
            className="Mobile-L:w-full rounded-2xl"
          />
        </div>
        <div className="self-start head-card flex justify-start items-center text-xs mt-3">
          <CgCalendarDates className="text-primary text-lg Mobile-L:text-xl" />
          <div className="tgl text-primary pl-2 Mobile-L:pl-3 Mobile-M:text-xs text-[0.65rem]">
            {blogDataById.tgl}
          </div>
        </div>
        <div className="w-full h-fit font-bold text-sm Mobile-L:text-lg my-3">
          {blogDataById.titleBlog}
        </div>
        <p className="text-[#7a7a7a] text-[0.65rem] Mobile-M:text-xs mb-2">
          {blogDataById.longDesc}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default DetailBlogs;
