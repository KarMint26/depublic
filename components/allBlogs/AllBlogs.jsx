"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { BlogData } from "@/context/BlogContext";
import { CgCalendarDates } from "react-icons/cg";
import Footer from "../custom/Footer";

const AllBlogs = () => {
  const [query, setQuery] = useState("");
  const { blogData } = BlogData();
  const [blogsData, setBlogsData] = useState(blogData);

  useEffect(() => {
    if (query !== "") {
      const filteredData = blogData.filter((data) =>
        data.titleBlog.toLowerCase().includes(query.toLowerCase())
      );
      setBlogsData(filteredData);
    } else {
      setBlogsData(blogData);
    }
  }, [query]);

  return (
    <div className="wrapper w-full h-fit">
      <div className="head-all-event pt-28 pb-10 w-full h-fit flex justify-center items-center flex-col gap-5 Mobile-M:gap-6 Mobile-L:gap-8 px-5 Mobile-M:px-6">
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
            className="text-sm cursor-pointer font-medium text-primary"
          >
            Blogs
          </Link>
        </div>
        <div className="w-full flex flex-col">
          <div className="pb-1 w-full h-fit font-bold text-sm Mobile-L:text-lg">
            All Blogs
          </div>
          <div className="search-bar w-full text-[#A6A6A6] flex relative text-sm mt-2 Mobile-M:mt-3">
            <LuSearch className="absolute text-xl top-[0.9rem] left-[1rem] z-10" />
            <input
              type="text"
              name="search field"
              className="border px-11 Mobile-L:px-12 w-full h-[50px] bg-white/30 backdrop-blur-lg border-[#DADADA] rounded-[10px] text-sm placeholder:text-sm leading-[50px] placeholder:leading-[50px] text-[#868686]"
              placeholder="Search Blogs"
              value={query}
              onChange={({ target }) => setQuery(target.value)}
            />
          </div>
          <div className="list-all-event flex justify-center items-center flex-col gap-2 pb-12 mt-4 Mobile-M:mt-5">
            <p className="text-[#4D4D4D] self-start text-xs">
              {blogsData.length * 2} Blogs on result
            </p>
            <div
              className={`grid place-items-center gap-4 ${
                blogsData.length > 0 && "grid-cols-1 Mobile-M:grid-cols-2"
              }`}
            >
              {blogsData.length < 1 ? (
                <div className="text-[#4D4D4D] text-xs Mobile-M:text-sm flex justify-center items-center text-center">
                  Tidak Ada Blog
                </div>
              ) : (
                <>
                  {blogsData.map((dataBlog) => (
                    <div
                      key={dataBlog.id}
                      className="card flex justify-center items-center flex-col gap-[1rem] bg-bg-primary shadow-card-shadow p-3 rounded-[14px] Mobile-M:rounded-[16px] Mobile-L:rounded-[20px] Mobile-L:w-[200px] w-[250px] Mobile-M:w-[180px] h-fit group"
                    >
                      <div className="img-container rounded-[14px] Mobile-M:rounded-[16px] w-fit h-fit overflow-hidden">
                        <Image
                          src={dataBlog.imagePath}
                          alt={dataBlog.alt}
                          width={250}
                          height={200}
                          className="rounded-[14px] Mobile-M:rounded-[16px] group-hover:scale-125 transition duration-300"
                          loading="eager"
                        />
                      </div>
                      <div className="desc flex justify-start items-start flex-col gap-2">
                        <div className="head-card flex justify-start items-center text-xs mb-1">
                          <CgCalendarDates className="text-primary text-lg Mobile-L:text-xl" />
                          <div className="tgl text-primary pl-2 Mobile-L:pl-3 Mobile-M:text-xs text-[0.65rem]">
                            {dataBlog.tgl}
                          </div>
                        </div>
                        <h1 className="font-bold text-sm">
                          {dataBlog.titleBlog}
                        </h1>
                        <p className="text-[#A6A6A6] text-xs">
                          {dataBlog.shortDesc}
                        </p>
                      </div>
                      <Link
                        href={`/all-blogs/detail/${dataBlog.id}`}
                        className="btn-card flex justify-center items-center py-2 px-3 w-full bg-primary text-white rounded-[10px] font-semibold cursor-pointer text-sm"
                      >
                        Read More
                      </Link>
                    </div>
                  ))}
                  {blogsData.map((dataBlog) => (
                    <div
                      key={dataBlog.id}
                      className="card flex justify-center items-center flex-col gap-[1rem] bg-bg-primary shadow-card-shadow p-3 rounded-[14px] Mobile-M:rounded-[16px] Mobile-L:rounded-[20px] Mobile-L:w-[200px] w-[250px] Mobile-M:w-[180px] h-fit group"
                    >
                      <div className="img-container rounded-[14px] Mobile-M:rounded-[16px] w-fit h-fit overflow-hidden">
                        <Image
                          src={dataBlog.imagePath}
                          alt={dataBlog.alt}
                          width={250}
                          height={200}
                          className="rounded-[14px] Mobile-M:rounded-[16px] group-hover:scale-125 transition duration-300"
                          loading="eager"
                        />
                      </div>
                      <div className="desc flex justify-start items-start flex-col gap-2">
                        <div className="head-card flex justify-start items-center text-xs mb-1">
                          <CgCalendarDates className="text-primary text-lg Mobile-L:text-xl" />
                          <div className="tgl text-primary pl-2 Mobile-L:pl-3 Mobile-M:text-xs text-[0.65rem]">
                            {dataBlog.tgl}
                          </div>
                        </div>
                        <h1 className="font-bold text-sm">
                          {dataBlog.titleBlog}
                        </h1>
                        <p className="text-[#A6A6A6] text-xs">
                          {dataBlog.shortDesc}
                        </p>
                      </div>
                      <Link
                        href={`/all-blogs/detail/${dataBlog.id}`}
                        className="btn-card flex justify-center items-center py-2 px-3 w-full bg-primary text-white rounded-[10px] font-semibold cursor-pointer text-sm"
                      >
                        Read More
                      </Link>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllBlogs;
