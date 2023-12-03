import React from "react";
import CardMiniTicket from "./CardMiniTicket";
import { IoIosArrowForward } from "react-icons/io";

export default function CardMiniOrder() {
  return (
    <div
      className="rounded-[10px] w-full p-2 Mobile-M:p-3 py-3 Mobile-M:py-4 flex flex-col"
      style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.1)" }}
    >
      <p className="text-[0.65rem] text-xs text-[#4D4D4D] pb-3">
        Order ID: 1234776184
      </p>
      <CardMiniTicket />
      <div className="w-full flex justify-between items-center border-t border-dashed border-[#DADADA] pt-3 mt-3">
        <h1 className="text-xs Mobile-M:text-sm font-bold">Total Payment</h1>
        <div className="flex justify-center items-center gap-2">
          <p className="text-[#A103D3] font-bold text-xs Mobile-M:text-sm">
            IDR 1.999.000
          </p>
          <IoIosArrowForward className="rotate-[90deg] text-sm" />
        </div>
      </div>
    </div>
  );
}
