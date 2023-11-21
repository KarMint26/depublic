"use client"

import { IoIosArrowForward } from "react-icons/io";

export default function BodyDetail({ packageInfoById }) {
  return (
    <div className="body-wrapper w-full flex flex-col justify-center items-center gap-4 px-6 bg-[#F5F0F6] pt-6 pb-5 Mobile-M:pt-8 Mobile-M:pb-6">
      <div className="head-nav w-full flex justify-between items-center">
        <h1 className="font-bold text-[0.85rem] Mobile-M:text-[1rem]">
          Detail Package{" "}
          <span className="text-[#D49600] font-normal ml-1">
            {"(1/"}
            <span className="text-[#A6A6A6]">{"8)"}</span>
          </span>
        </h1>
        <div className="button-nav flex justify-center items-center gap-3">
          <div className="box cursor-pointer w-[1.8rem] h-[1.8rem] text-lg text-center flex justify-center items-center rounded-full bg-white">
            <IoIosArrowForward className="text-slate-400 rotate-[180deg]" />
          </div>
          <div className="box cursor-pointer w-[1.8rem] h-[1.8rem] text-lg text-center flex justify-center items-center rounded-full bg-white">
            <IoIosArrowForward />
          </div>
        </div>
      </div>
      <div className="card-standing w-full rounded-[20px] bg-white shadow h-fit p-5 flex justify-center items-start flex-col">
        <h1 className="font-bold text-[0.85rem] Mobile-M:text-[0.9rem]">
          {packageInfoById.namePackage}
        </h1>
        <h3 className="text-primary text-[0.8rem] Mobile-M:text-[0.85rem] pt-3 font-bold pb-3 w-full border-b broder-[#DADADA]">
          IDR 1.999.000
        </h3>
        <div className="rad-field text-[0.65rem] Mobile-M:text-xs flex justify-start items-center gap-3 my-2 mt-3">
          <input
            type="radio"
            name="radioButton1"
            id="rdbutton-1"
            className="text-[#4D4D4D]"
          />
          <label htmlFor="rdbutton-1">{packageInfoById.packagePlus[0]}</label>
        </div>
        <div className="rad-field text-[0.65rem] Mobile-M:text-xs flex justify-start items-center gap-3 my-2">
          <input
            type="radio"
            name="radioButton1"
            id="rdbutton-2"
            className="text-[#4D4D4D]"
          />
          <label htmlFor="rdbutton-2">{packageInfoById.packagePlus[1]}</label>
        </div>
        <div className="rad-field text-[0.65rem] Mobile-M:text-xs flex justify-start items-center gap-3 my-2 mb-3">
          <input
            type="radio"
            name="radioButton1"
            id="rdbutton-3"
            className="text-[#4D4D4D]"
          />
          <label htmlFor="rdbutton-3">{packageInfoById.packagePlus[2]}</label>
        </div>
        <p className="text-[0.65rem] w-full pt-4 border-t border-[#DADADA] Mobile-M:text-xs">
          {packageInfoById.descPackage}.{" "}
          <span
            onClick={() =>
              scrollTo({
                top: 100,
                behavior: "smooth",
              })
            }
            className="font-bold cursor-pointer"
          >
            Lanjut
          </span>
        </p>
      </div>
    </div>
  );
}
