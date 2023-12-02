import React from "react";
import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io";

const PaymentMethod = () => {
  return (
    <div className="wrapper w-full h-fit">
      <div className="head-all-event pt-28 pb-10 w-full h-fit flex justify-center items-center flex-col gap-5 Mobile-M:gap-6 Mobile-L:gap-8 px-3 Mobile-M:px-6">
        <div className="breadcumbs flex justify-center items-center gap-3 self-start">
          <Link
            href="/"
            className="text-[0.65rem] Mobile-L:text-sm cursor-pointer font-medium text-[#A6A6A6]"
          >
            Profil
          </Link>
          <IoIosArrowForward className="text-[#A6A6A6]" />
          <Link
            href="/all-event"
            className="text-[0.65rem] Mobile-L:text-sm cursor-pointer font-medium text-primary"
          >
            Select Method
          </Link>
          <IoIosArrowForward className="text-[#A6A6A6]" />
          <Link
            href="/all-event"
            className="text-[0.65rem] Mobile-L:text-sm cursor-pointer font-medium text-primary"
          >
            Pay
          </Link>
          <IoIosArrowForward className="text-[#A6A6A6]" />
          <Link
            href="/all-event"
            className="text-[0.65rem] Mobile-L:text-sm cursor-pointer font-medium text-primary"
          >
            Complete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
