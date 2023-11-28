"use client";

import React from "react";
import { LuSearch } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { PiMapPin } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import { TicketData } from "@/context/TicketContext";
import Footer from "../custom/Footer";
import { useRouter } from "next/navigation";

export default function AllEvent() {
  const { upcomingEventData } = TicketData();
  const router = useRouter();

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
            href="/all-event"
            className="text-sm cursor-pointer font-medium text-primary"
          >
            Ticket
          </Link>
        </div>
        <div className="search-location flex justify-between items-center gap-3">
          <div className="search-bar w-[70%] text-[#A6A6A6] flex relative text-sm">
            <LuSearch className="absolute text-lg Mobile-L:text-xl top-[0.7rem] Mobile-L:top-[0.6rem] left-[1rem] z-10" />
            <input
              type="text"
              name="search field"
              className="border px-10 Mobile-L:px-12 w-full h-[40px] bg-white/30 backdrop-blur-lg border-[#DADADA] rounded-[10px] text-black placeholder:text-xs Mobile-L:placeholder:text-sm"
              placeholder="Search Activities"
            />
          </div>
          <div className="select-location flex justify-center items-center gap-2 p-2 py-[0.6rem] rounded-lg border bg-[#FDF9F0] border-[#FFF0CC] text-[#D49600] cursor-pointer">
            <PiMapPin />
            <p className="text-[#1F1F1F] text-sm">Location</p>
            <IoIosArrowForward className="rotate-90" />
          </div>
        </div>
        <div className="desc-all flex justify-between items-center pb-3 w-full h-fit border-b border-[#DADADA]">
          <h1 className="font-bold text-sm Mobile-L:text-lg">All Event</h1>
          <div className="feat-search flex justify-center items-center gap-2">
            <div className="box-feat-search cursor-pointer flex justify-center items-center gap-2 bg-white border border-[#EEEEEE] p-2 Mobile-L:py-2 Mobile-L:px-3 rounded-2xl">
              <Image
                src="assets/svg/filter.svg"
                alt="svg-image"
                width={15}
                height={15}
                className="Mobile-L:scale-100 scale-75"
              />
              <p className="text-[0.6rem] Mobile-L:text-xs leading-[15px] text-[#1F1F1F]">
                Filter
              </p>
            </div>
            <div className="box-feat-search cursor-pointer flex justify-center items-center gap-2 bg-white border border-[#EEEEEE] p-2 Mobile-L:py-2 Mobile-L:px-3 rounded-2xl">
              <Image
                src="assets/svg/date.svg"
                alt="svg-image"
                width={15}
                height={15}
                className="Mobile-L:scale-100 scale-75"
              />
              <p className="text-[0.6rem] Mobile-L:text-xs leading-[15px] text-[#1F1F1F]">
                Date
              </p>
            </div>
            <div className="box-feat-search cursor-pointer flex justify-center items-center gap-2 bg-white border border-[#EEEEEE] p-2 Mobile-L:py-2 Mobile-L:px-3 rounded-2xl">
              <Image
                src="assets/svg/price.svg"
                alt="svg-image"
                width={15}
                height={15}
                className="Mobile-L:scale-100 scale-75"
              />
              <p className="text-[0.6rem] Mobile-L:text-xs leading-[15px] text-[#1F1F1F]">
                Price
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="list-all-event flex justify-center items-center flex-col gap-4 pb-12 px-5 Mobile-M:px-6">
        <p className="text-[#4D4D4D] self-start text-xs">60 Event on result</p>
        <div className="grid place-items-center gap-4 grid-cols-1 Mobile-M:grid-cols-2">
          {upcomingEventData.map((dataEvent) => (
            <div
              key={dataEvent.id}
              className="card flex justify-center items-center flex-col gap-[1rem] bg-bg-primary shadow-card-shadow p-3 rounded-[14px] Mobile-M:rounded-[16px] Mobile-L:rounded-[20px] Mobile-L:w-[200px] w-[250px] Mobile-M:w-[180px] h-fit cursor-pointer group"
              onClick={() => router.push(`/all-event/detail/${dataEvent.id}`)}
            >
              <div className="img-container rounded-[14px] Mobile-M:rounded-[16px] w-fit h-fit overflow-hidden">
                <Image
                  src={dataEvent.url}
                  alt={dataEvent.alt}
                  width={250}
                  height={200}
                  className="rounded-[14px] Mobile-M:rounded-[16px] group-hover:scale-125 transition duration-300"
                  loading="eager"
                />
              </div>
              <div className="desc flex justify-start items-start flex-col gap-2">
                <div className="head-card flex justify-start items-center text-xs">
                  <div className="country flex justify-center items-center gap-2 pr-3 border-r border-[#DADADA] text-[#4D4D4D] text-[0.75rem] Mobile-M:text-[0.6rem]">
                    <PiMapPin className="text-lg" />
                    {dataEvent.city}
                  </div>
                  <div className="tgl text-primary pl-3 Mobile-L:text-[0.53rem] Mobile-M:text-[0.46rem] text-[0.55rem]">
                    {dataEvent.tgl}
                  </div>
                </div>
                <h1 className="font-bold text-sm">{dataEvent.titleEvent}</h1>
                <p className="text-[#A6A6A6] text-xs">{dataEvent.shortDesc}</p>
              </div>
              <h1 className="price font-normal self-start text-[0.65rem] Mobile-L:text-xs">
                <span className="text-primary font-bold text-xs Mobile-L:text-sm">
                  {dataEvent.ticketPrice}
                </span>
                / 1 Person
              </h1>
              <div className="btn-card flex justify-center items-center py-2 px-3 w-full bg-[#EAF2E2] text-[#0B640D] rounded-[12px] cursor-pointer text-sm">
                Tersedia
              </div>
            </div>
          ))}
          {upcomingEventData.map((dataEvent) => (
            <div
              key={dataEvent.id}
              className="card flex justify-center items-center flex-col gap-[1rem] bg-bg-primary shadow-card-shadow p-3 rounded-[14px] Mobile-M:rounded-[16px] Mobile-L:rounded-[20px] Mobile-L:w-[200px] w-[250px] Mobile-M:w-[180px] h-fit cursor-pointer group"
              onClick={() => router.push(`/all-event/detail/${dataEvent.id}`)}
            >
              <div className="img-container rounded-[14px] Mobile-M:rounded-[16px] w-fit h-fit overflow-hidden">
                <Image
                  src={dataEvent.url}
                  alt={dataEvent.alt}
                  width={250}
                  height={200}
                  className="rounded-[14px] Mobile-M:rounded-[16px] group-hover:scale-125 transition duration-300"
                  loading="eager"
                />
              </div>
              <div className="desc flex justify-start items-start flex-col gap-2">
                <div className="head-card flex justify-start items-center text-xs">
                  <div className="country flex justify-center items-center gap-2 pr-3 border-r border-[#DADADA] text-[#4D4D4D] text-[0.75rem] Mobile-M:text-[0.6rem]">
                    <PiMapPin className="text-lg" />
                    {dataEvent.city}
                  </div>
                  <div className="tgl text-primary pl-3 Mobile-L:text-[0.53rem] Mobile-M:text-[0.46rem] text-[0.55rem]">
                    {dataEvent.tgl}
                  </div>
                </div>
                <h1 className="font-bold text-sm">{dataEvent.titleEvent}</h1>
                <p className="text-[#A6A6A6] text-xs">{dataEvent.shortDesc}</p>
              </div>
              <h1 className="price font-normal self-start text-[0.65rem] Mobile-L:text-xs">
                <span className="text-primary font-bold text-xs Mobile-L:text-sm">
                  {dataEvent.ticketPrice}
                </span>
                / 1 Person
              </h1>
              <div className="btn-card flex justify-center items-center py-2 px-3 w-full bg-[#EAF2E2] text-[#0B640D] rounded-[12px] cursor-pointer text-sm">
                Tersedia
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
