import React from "react";
import Image from "next/image";
import { BiInfoCircle } from "react-icons/bi";

export default function CardPayMethod({ headingText, text, isWarn }) {
  return (
    <div className="pay-method flex flex-col">
      <h3 className="font-bold text-xs Mobile-M:text-sm mb-2">{headingText}</h3>
      <p className="text-[0.65rem] Mobile-M:text-xs mb-3 font-[400] text-[#4D4D4D]">
        {text}
      </p>
      <div className="flex gap-[0.2rem] Mobile-M:gap-1 Mobile-L:gap-2">
        <div className="flex gap-1 Mobile-L:gap-2 p-2 text-[0.5rem] Mobile-M:text-[0.6rem] Mobile-L:text-[0.7rem]">
          <Image
            className="Mobile-M:scale-100 scale-75"
            src="/assets/svg/bca.svg"
            width={28}
            height={28}
            alt="bca-icon"
          />
          <p>Bank BCA</p>
        </div>
        <div className="flex gap-1 Mobile-L:gap-2 p-2 text-[0.5rem] Mobile-M:text-[0.6rem] Mobile-L:text-[0.7rem]">
          <Image
            className="Mobile-M:scale-100 scale-75"
            src="/assets/svg/bca.svg"
            width={28}
            height={28}
            alt="bca-icon"
          />
          <p>Bank BCA</p>
        </div>
        <div className="flex gap-1 Mobile-L:gap-2 p-2 text-[0.5rem] Mobile-M:text-[0.6rem] Mobile-L:text-[0.7rem]">
          <Image
            className="Mobile-M:scale-100 scale-75"
            src="/assets/svg/bca.svg"
            width={28}
            height={28}
            alt="bca-icon"
          />
          <p>Bank BCA</p>
        </div>
      </div>
      {isWarn && (
        <div className="bg-[#FCF6E8] px-2 py-1 text-[#D49600] w-fit rounded-xl text-[0.5rem] Mobile-M:text-[0.55rem] Mobile-L:text-[0.65rem] flex justify-center items-center gap-2 mt-2 Mobile-M:mt-3">
          <BiInfoCircle className="text-sm" />
          <p>There are payment methods that are currently unavailable</p>
        </div>
      )}
    </div>
  );
}
