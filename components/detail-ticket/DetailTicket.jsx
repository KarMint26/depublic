"use client";

import { TicketData } from "@/context/TicketContext";
import Image from "next/image";
import React from "react";
import NavigationBar from "../custom/NavigationBar";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Footer from "../custom/Footer";
import UpcomingEvent from "../custom/UpcomingEvent";
import HeadDetailEvent from "../custom/HeadDetailEvent";
import BodyDetailEvent from "../custom/BodyDetailEvent";

const daysData = [
  {
    id: 1,
    dayName: "Sun",
    date: "30 Aug",
  },
  {
    id: 2,
    dayName: "Mon",
    date: "31 Aug",
  },
  {
    id: 3,
    dayName: "Tue",
    date: "1 Sep",
  },
  {
    id: 4,
    dayName: "Wed",
    date: "2 Sep",
  },
  {
    id: 5,
    dayName: "Thu",
    date: "3 Sep",
  },
  {
    id: 6,
    dayName: "Fri",
    date: "4 Sep",
  },
  {
    id: 7,
    dayName: "Sat",
    date: "5 Sep",
  },
];

export default function DetailTicket({ id }) {
  const { upcomingEventData } = TicketData();
  const detailEventData = upcomingEventData[id - 1];

  return (
    <>
      <NavigationBar whatPage="detailEvents" />
      <div className="wrapper w-full h-fit">
        <div className="head-all-event pt-28 pb-6 w-full h-fit flex justify-center items-center flex-col gap-5 Mobile-M:gap-6 Mobile-L:gap-6 px-5 Mobile-M:px-6">
          <div className="breadcumbs flex justify-center items-center gap-3 self-start">
            <Link
              href="/"
              className="text-sm cursor-pointer font-medium text-[#A6A6A6]"
            >
              Home
            </Link>
            <IoIosArrowForward className="text-[#A6A6A6]" />
            <Link
              href="/all-event"
              className="text-sm cursor-pointer font-medium text-[#A6A6A6]"
            >
              Ticket
            </Link>
            <IoIosArrowForward className="text-[#A6A6A6]" />
            <Link
              href="#"
              className="text-sm cursor-pointer font-medium text-primary"
            >
              Detail Event
            </Link>
          </div>
        </div>

        <div className="w-full h-fit px-5 Mobile-M:px-6 flex justify-center items-center">
          <Image
            src={detailEventData.url}
            width={350}
            height={250}
            alt="image-hero"
            className="Mobile-L:w-full rounded-2xl"
          />
        </div>

        <div className="w-full h-fit pt-8 pb-4">
          <div className="btn-menu flex justify-center items-center gap-4 Mobile-M:gap-5 Mobile-L:gap-7 border-b border-[#A6A6A6] text-[#A6A6A6] text-[0.6rem] Mobile-M:text-[0.65rem] Mobile-L:text-xs">
            <div className="box-menu cursor-pointer pb-3 border-b border-primary text-primary font-bold">
              Summary
            </div>
            <div className="box-menu cursor-pointer pb-3 border-b">
              Highlighted
            </div>
            <div className="box-menu cursor-pointer pb-3 border-b">Package</div>
            <div className="box-menu cursor-pointer pb-3 border-b">
              Location
            </div>
            <div className="box-menu cursor-pointer pb-3 border-b">Order</div>
          </div>
        </div>

        <div className="content-detail-event px-5 Mobile-M:px-6">
          <HeadDetailEvent detailEventData={detailEventData} />
        </div>

        <div
          className="event-container"
          style={{ paddingBottom: "2rem", paddingTop: "1.5rem" }}
        >
          <BodyDetailEvent daysData={daysData} />
        </div>

        <div className="upcoming-event-container">
          <UpcomingEvent upcomingEventData={upcomingEventData} />
        </div>
      </div>
      <Footer />
    </>
  );
}
