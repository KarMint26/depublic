"use client";

import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

export default function BottomDetail({ namePackage }) {
  const [count, setCount] = React.useState(0);
  const [countPlus, setCountPlus] = React.useState(false);
  const [countMinus, setCountMinus] = React.useState(false);
  const [date, setDate] = React.useState("2023-30-08");

  return (
    <div className="bottom-detail px-6 flex justify-center items-center flex-col gap-3 Mobile-M:gap-4 pt-3 pb-5 Mobile-M:pt-4 Mobile-M:pb-6 w-full h-fit bg-[#FAFAFA]">
      <div
        className="date-picker p-3 Mobile-M:p-4 rounded-[12px] bg-white flex justify-center items-start flex-col w-full h-fit"
        style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.1)" }}
      >
        <h1 className="text-[0.65rem] Mobile-M:text-xs font-bold pb-3">Date</h1>
        <div
          id="datepicker"
          className="relative date-card h-fit flex justify-between w-full items-center gap-2"
        >
          <input
            type="date"
            name="datepicker"
            id="dateticket"
            className="absolute w-full h-full top-0 right-0 z-10 opacity-0"
            onChange={({ target }) => setDate(target.value)}
          />
          <div className="select-date rounded-[10px] border border-[#EEEEEE] bg-[#FAFAFA] w-[85%] p-2 h-fit">
            <p className="text-[0.65rem] Mobile-M:text-xs text-[#4D4D4D] font-normal">
              Select Date
            </p>
            <p
              id="text-date"
              className="text-xs Mobile-M:text-[0.85rem] font-bold text-primary"
            >
              {date}
            </p>
          </div>
          <label
            htmlFor="dateticket"
            className="select-cal rounded-[10px] bg-[#FAFAFA] h-[50px] cursor-pointer p-2 flex justify-center items-center gap-2 border border-[#EEEEEE]"
          >
            <Image
              src="/assets/svg/date.svg"
              alt="date"
              width={20}
              height={20}
            />
            <IoIosArrowForward className="text-lg rotate-[90deg]" />
          </label>
        </div>
      </div>

      <div
        className="date-picker p-3 Mobile-M:p-4 rounded-[12px] bg-white flex justify-center items-start flex-col w-full h-fit"
        style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.1)" }}
      >
        <h1 className="text-[0.65rem] Mobile-M:text-xs font-bold pb-3">
          Total
        </h1>
        <div className="date-card h-fit flex justify-between w-full items-center gap-2">
          <div className="select-date rounded-[10px] border border-[#EEEEEE] bg-[#FAFAFA] w-[80%] Mobile-M:w-[75%] p-3 h-fit">
            <div className="text-[0.5rem] Mobile-M:text-[0.65rem] flex justify-between items-center Mobile-L:text-xs text-[#4D4D4D] font-normal">
              {namePackage}
              <p className="font-bold text-primary">IDR 1.999.000</p>
            </div>
          </div>
          <div className="count-box px-2 border-l border-l-[#EEEEEE] flex justify-center items-center gap-2">
            <div
              className={`minus-box ${
                countPlus ? "text-[#4D4D4D]" : "text-[#EEEEEE]"
              } cursor-pointer text-sm Mobile-M:text-base p-1 Mobile-M:p-2 border border-[#EEEEEE] bg-[#FAFAFA] rounded-lg`}
              onClick={() => {
                setCount((count) => (count -= 1));
                setCountPlus(true);
                setCountMinus(false);
              }}
            >
              -
            </div>
            <div className="count-nums text-[0.8rem] Mobile-M:text-base">
              {count}
            </div>
            <div
              className={`plus-box ${
                countMinus ? "text-[#4D4D4D]" : "text-[#EEEEEE]"
              } cursor-pointer text-sm Mobile-M:text-base p-1 Mobile-M:p-2 border border-[#EEEEEE] bg-[#FAFAFA] rounded-lg`}
              onClick={() => {
                setCount((count) => (count += 1));
                setCountMinus(true);
                setCountPlus(false);
              }}
            >
              +
            </div>
          </div>
        </div>
      </div>

      <div className="summary-box flex flex-col items-start justify-center w-full h-fit mt-5 pb-10">
        <h1 className="font-bold mb-2">Summary</h1>
        <div
          className="date-box p-3 Mobile-M:p-4 rounded-[12px] bg-white flex justify-center items-start flex-col w-full h-fit"
          style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.1)" }}
        >
          <div className="flex justify-between items-center w-full pb-3 border-b border-[#DADADA]">
            <div className="text-[0.65rem] Mobile-M:text-xs text-[#4D4D4D]">
              Date
            </div>
            <div className="font-bold text-[0.65rem] Mobile-M:text-xs">
              30 Aug 2023
            </div>
          </div>

          <div className="w-full pt-3 text-[#4D4D4D]">
            <p className="text-[0.65rem] Mobile-M:text-xs">Total (1 Ticket)</p>
            <div className="flex items-center gap-2">
              <p className="text-primary font-bold text-xs Mobile-M:text-sm">
                IDR 1.999.000
              </p>
              <IoIosArrowForward className="text-lg rotate-[90deg]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
