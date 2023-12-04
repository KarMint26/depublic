import React from "react";
import { GoQuestion } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

export default function PAC({ setPac, handlePage }) {
  return (
    <div className="splash-screen bg-white/30 backdrop-blur-sm absolute top-0 w-full h-full z-[99] flex justify-center items-center">
      <div
        className="-translate-y-[13rem] w-[90%] rounded-[10px] bg-white p-2 Mobile-M:p-3"
        style={{ boxShadow: "0 0 6px 0 rgba(0,0,0,0.1)" }}
      >
        <div className="w-full flex justify-between items-center mb-2">
          <h1 className="font-bold text-sm Mobile-M:text-lg">Pick an action</h1>
          <IoCloseOutline
            className="text-2xl cursor-pointer text-[#B71926]"
            onClick={() => setPac(false)}
          />
        </div>
        <div className="w-full flex justify-between items-center border-b pb-2 border-[#DADADA] cursor-pointer mt-4 mb-3" onClick={handlePage}>
          <p className="text-[0.65rem] Mobile-M:text-xs">See Details</p>
          <IoIosArrowForward className="text-lg text-[#DADADA]" />
        </div>
        <div className="flex items-center gap-2">
          <GoQuestion className="text-lg" />
          <p className="text-[0.65rem] Mobile-M:text-xs">Need Help?</p>
        </div>
      </div>
    </div>
  );
}
