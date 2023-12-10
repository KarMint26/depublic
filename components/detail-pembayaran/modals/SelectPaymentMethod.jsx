import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import CardPayMethod from "../CardPayMethod";

export default function SelectPaymentMethod({ setHandler }) {
  return (
    <div className="splash-screen bg-white/30 backdrop-blur-sm absolute top-0 w-full h-full z-[99] flex justify-center items-center">
      <div
        className="-translate-y-[8.5rem] Mobile-M:-translate-y-[10rem] w-[90%] rounded-[10px] bg-white p-2 Mobile-M:p-3"
        style={{ boxShadow: "0 0 6px 0 rgba(0,0,0,0.1)" }}
      >
        <div className="w-full flex justify-between items-center mb-2 pb-3 border-b border-[#DADADA]">
          <h1 className="font-bold text-sm Mobile-M:text-lg">
            Select Payment Method
          </h1>
          <IoCloseOutline
            className="text-2xl cursor-pointer text-[#B71926]"
            onClick={() => setHandler(false)}
          />
        </div>
        <div className="flex flex-col pt-3 py-2 w-full gap-4 Mobile-M:gap-6">
          <CardPayMethod
            headingText="Virtual Account"
            text="You can pay by transferring via ATM, Internet Banking & Mobile Banking."
            isWarn={false}
          />
          <CardPayMethod
            headingText="E-Wallet"
            text="Pay instantly with a digital wallet on your smartphone, pay from anywhere is possible."
            isWarn={true}
          />
          <CardPayMethod
            headingText="Instant Payment"
            text="Pay instantly with a digital wallet on your smartphone, pay from anywhere is possible."
            isWarn={true}
          />
        </div>
      </div>
    </div>
  );
}
