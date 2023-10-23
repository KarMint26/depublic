"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import CardBlog from "../custom/CardBlog";

const blogData = [
  {
    id: 1,
    titleBlog: "Musik Itu Sahabat",
    shortDesc: "Musik adalah sahabat yang selalu ada untuk kita dalam setiap momen kebahagiaan dan kesedihan.",
    imagePath: "/assets/blogs/blog-images.png",
    alt: "upcoming-event",
    tgl: "Rabu, Maret 27"
  },
  {
    id: 2,
    titleBlog: "Konser Bahagia",
    shortDesc: "Konser adalah pengalaman yang luar biasa di mana kita dapat merasakan kebahagiaan sejati melalui musik.",
    imagePath: "/assets/blogs/blog-images-2.png",
    alt: "upcoming-event-2",
    tgl: "Kamis, Juli 12"
  },
  {
    id: 3,
    titleBlog: "Menonton Konser",
    shortDesc: "Menonton konser adalah pengalaman yang tidak dapat digantikan. Saat kita semangat.",
    imagePath: "/assets/blogs/blog-images-3.png",
    alt: "upcoming-event-3",
    tgl: "Kamis, Agustus 19"
  },
  {
    id: 4,
    titleBlog: "Penyanyi Favorit",
    shortDesc: "Setiap orang memiliki penyanyi favorit yang lagu-lagu mereka adalah pengiring dalam setiap tahap hidup.",
    imagePath: "/assets/blogs/blog-images-4.png",
    alt: "upcoming-event-4",
    tgl: "Selasa, April 16"
  },
];


export default function PopularBlog() {
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);
  const [slideTranslate, setSlideTranslate] = useState(0);

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
            <>
              <CardBlog dataBlog={data} />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
