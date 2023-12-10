import React from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function PromoVoucher({ setHandler }) {
  return (
    <div className="splash-screen bg-white/30 backdrop-blur-sm absolute top-0 w-full h-full z-[99] flex justify-center items-center">
      <div
        className="translate-y-9 Mobile-M:translate-y-4 w-[90%] rounded-[10px] bg-white p-2 Mobile-M:p-3"
        style={{ boxShadow: "0 0 6px 0 rgba(0,0,0,0.1)" }}
      >
        <div className="w-full flex justify-between items-center mb-2 pb-3 border-b border-[#DADADA]">
          <h1 className="font-bold text-sm Mobile-M:text-lg">
            Promo & Voucher Code
          </h1>
          <IoCloseOutline
            className="text-2xl cursor-pointer text-[#B71926]"
            onClick={() => setHandler(false)}
          />
        </div>
        <div className="py-2 pt-3 Mobile-M:pt-4 flex justify-between w-full">
          <input
            type="text"
            name="voucher"
            id="voucher"
            className="rounded-[8px] border border-[#DADADA] text-[#a7a7a7] placeholder:text-[#DADADA] py-2 px-3 Mobile-M:px-4 text-xs Mobile-M:text-sm placeholder:text-xs Mobile-M:placeholder:text-sm w-[70%]"
            placeholder="Enter Your Code"
          />
          <div className="font-medium text-xs flex justify-center items-center rounded-[8px] text-white Mobile-M:text-sm bg-primary py-2 px-3 w-[27%] cursor-pointer">
            Apply
          </div>
        </div>
      </div>
    </div>
  );
}
