import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const RegistrationPage = () => {
  return (
    <div className="head-all-event pt-28 pb-10 w-full h-fit flex justify-center items-center flex-col gap-5 Mobile-M:gap-6 Mobile-L:gap-8 px-5 Mobile-M:px-6">
      <div className="breadcumbs flex justify-center items-center gap-3 self-start">
        <Link
          href="/"
          className="text-sm cursor-pointer font-medium text-[#A6A6A6]"
        >
          Home
        </Link>
        <IoIosArrowForward className="text-[#A6A6A6]" />
        <Link
          href="#"
          className="text-sm cursor-pointer font-medium text-primary"
        >
          Registration
        </Link>
      </div>
      Hello World
    </div>
  );
};

export default RegistrationPage;
