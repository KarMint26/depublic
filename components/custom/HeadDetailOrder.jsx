import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function HeadDetailOrder({ detailEvent }) {
  return (
    <div
      className="w-full px-[0.6rem] pb-2 Mobile-M:px-3 Mobile-M:pb-3 bg-white rounded-[10px] mt-7"
      style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.1)" }}
    >
      <div className="w-full flex justify-between border-b mb-3 border-[#DADADA]">
        <h1 className="text-sm Mobile-M:text-lg font-bold w-full p-0 flex items-center">
          {detailEvent && detailEvent?.titleEvent?.length > 16
            ? detailEvent.titleEvent.slice(0, 16) + "..."
            : detailEvent.titleEvent}
        </h1>
        <div className="order-id bg-[#FBF6EC] self-center text-[0.65rem] Mobile-M:text-xs text-[#D49600] rounded-full w-[80%] text-center py-2 Mobile-M:mb-6 translate-y-[.7rem]">
          Order ID: 1243776184
        </div>
      </div>
      <div className="w-full flex justify-between items-center py-3">
        <h1 className="text-xs Mobile-M:text-sm font-bold">Total Payment</h1>
        <div className="flex justify-center items-center gap-2">
          <p className="text-[#A103D3] font-bold text-xs Mobile-M:text-sm">
            IDR 1.999.000
          </p>
          <IoIosArrowForward className="rotate-[90deg] text-sm" />
        </div>
      </div>
      <div className="w-full border border-primary text-primary bg-white cursor-pointer py-2 px-3 flex justify-center items-center text-xs Mobile-M:text-sm font-bold rounded-[10px] my-2 transition duration-300 ease-in-out hover:text-white hover:bg-primary">
        CONTINUE PAYMENT
      </div>
    </div>
  );
}
