"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import CardBlog from "../custom/CardBlog";
import { BlogData } from "@/context/BlogContext";

export default function PopularBlog() {
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);
  const [slideTranslate, setSlideTranslate] = useState(0);
  const { blogData } = BlogData();

  // Algoritma untuk menggeser card container
  const handleSlider = (type) => {
    if (type === "next") {
      if (slideTranslate === 0 || slideTranslate === 16.5) {
        setSlideTranslate((slide) => (slide += 16.5));
      } else if (slideTranslate === 33) {
        setSlideTranslate((slide) => (slide += 13));
      } else {
        setSlideTranslate(0);
      }
    } else {
      if (slideTranslate === 0) {
        setSlideTranslate(46);
      } else if (slideTranslate >= 46) {
        setSlideTranslate((slide) => (slide -= 13));
      } else {
        setSlideTranslate((slide) => (slide -= 16.5));
      }
    }
  };

  return (
    <>
      <div className="blog">
        <div className="head-blog">
          <h1 className="font-bold text-base Mobile-M:text-lg">Popular Blog</h1>
          <div className="flex justify-center items-center gap-2 Mobile-M:gap-3 Mobile-L:gap-4">
            <IoIosArrowForward
              className={`text-lg cursor-pointer ${
                prev ? "text-black" : "text-[#DADADA]"
              } Mobile-M:text-xl rotate-180`}
              onClick={() => {
                setPrev(true);
                setNext(false);
                handleSlider("prev");
              }}
            />
            <IoIosArrowForward
              className={`text-lg cursor-pointer ${
                next ? "text-black" : "text-[#DADADA]"
              } Mobile-M:text-xl`}
              onClick={() => {
                setNext(true);
                setPrev(false);
                handleSlider("next");
              }}
            />
            <Link href="/all-blogs" className="text-xs">
              See All
            </Link>
          </div>
        </div>
        <div
          className={`card-container`}
          style={{ transform: `translateX(-${slideTranslate}rem)` }}
        >
          {blogData.map((data) => (
            <CardBlog dataBlog={data} key={data.id} />
          ))}
        </div>
      </div>
    </>
  );
}
