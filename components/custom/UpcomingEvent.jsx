"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import CardEvent from "./CardEvent";

export default function UpcomingEvent({ upcomingEventData }) {
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
      <div className="upcoming-event">
        <div className="head-event">
          <h1 className="font-bold text-base Mobile-M:text-lg">
            Upcoming Event
          </h1>
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
            <Link href="/all-event" className="text-xs">
              See All
            </Link>
          </div>
        </div>
        <div
          className={`card-container`}
          style={{ transform: `translateX(-${slideTranslate}rem)` }}
        >
          {upcomingEventData.map((data) => (
            <>
              <CardEvent dataEvent={data} />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
