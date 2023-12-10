"use client";

import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import { PiMapPin } from "react-icons/pi";

export default function OrderSummary({ setHandler }) {
  const [event, setEvent] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      setEvent(JSON.parse(localStorage.getItem("eventId")));
    }
  }, []);

  return (
    <div className="splash-screen bg-white/30 backdrop-blur-sm absolute top-0 w-full h-full z-[99] flex justify-center items-center">
      <div
        className="translate-y-12 Mobile-M:translate-y-[10rem] w-[90%] rounded-[10px] bg-white p-2 Mobile-M:p-3"
        style={{ boxShadow: "0 0 6px 0 rgba(0,0,0,0.1)" }}
      >
        <div className="w-full flex justify-between items-center mb-2 pb-3 border-b border-[#DADADA]">
          <h1 className="font-bold text-sm Mobile-M:text-lg">Order Summary</h1>
          <IoCloseOutline
            className="text-2xl cursor-pointer text-[#B71926]"
            onClick={() => setHandler(false)}
          />
        </div>
        <div className="py-2 pt-3 Mobile-M:pt-4 flex flex-col gap-2 w-full">
          <div className="w-full flex justify-center items-center">
            <div className="w-[170px] h-full pr-3 border-r border-[#DADADA]">
              <Image
                src={event && event.url}
                width={100}
                height={100}
                alt={event && event.alt}
                className="w-full h-full"
              />
            </div>
            <div className="w-[60%] pl-3 flex flex-col gap-1 Mobile-L:gap-2 justify-center items-start">
              <h1 className="font-bold text-[0.8rem] Mobile-M:text-base">
                {event && event?.titleEvent?.length > 16
                  ? event.titleEvent.slice(0, 16) + "..."
                  : event.titleEvent}
              </h1>
              <p className="text-[0.5rem] Mobile-M:text-[0.6rem] Mobile-L:text-[0.7rem] flex gap-1 font-medium">
                <PiMapPin />
                {event && event.city} |{" "}
                <span className="text-primary">{event && event.tgl}</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4 w-full rounded-[20px] border border-[#DADADA] p-4">
            <h3 className="text-[0.6rem] Mobile-M:text-[0.7rem] font-[400]">
              Ticket Type
            </h3>
            <p className="text-[0.6rem] Mobile-M:text-[0.7rem] font-medium">
              Pax (x1)
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-1 mb-3 Mobile-M:mb-4 w-full rounded-[20px] border border-[#DADADA] p-4">
            <h3 className="text-[0.6rem] Mobile-M:text-[0.7rem] font-[400]">
              Validity Date
            </h3>
            <p className="text-[0.6rem] Mobile-M:text-[0.7rem] font-medium">
              Valid on 31 Aug 2023
            </p>
          </div>
          <div className="rounded-[10px] px-2 pb-[0.85rem] pt-4 w-full flex flex-col border border-[#DADADA] my-2">
            <div className="text-xs Mobile-M:text-sm font-bold w-full pb-3 mb-3 border-b border-[#DADADA]">
              Contact Details
            </div>
            <p className="text-[0.6rem] Mobile-M:text-[0.7rem] mb-3">
              Call the contact below
            </p>
            <p className="text-[0.6rem] Mobile-M:text-[0.7rem] mb-1">
              Phone {""} : +628123456789
            </p>
            <p className="text-[0.6rem] Mobile-M:text-[0.7rem] mb-2">
              ID Card :
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
