import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Footer from "../custom/Footer";
import CardRegistration from "./CardRegistration";

const RegistrationPage = () => {
  return (
    <>
      <div className="head-all-event relative pt-28 pb-[9rem] Mobile-L:pb-[10rem] w-full h-fit flex justify-center items-center flex-col gap-5 Mobile-M:gap-6 Mobile-L:gap-8 px-5 Mobile-M:px-6">
        <div
          className="head-all-event::before"
          style={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url(/assets/regis/registrationimg.jpg)",
            backgroundSize: "cover",
            zIndex: 1,
            filter: "brightness(70%)",
          }}
        ></div>
        <div className="breadcumbs z-10 flex justify-center items-center gap-3 self-start">
          <Link
            href="/"
            className="text-xs Mobile-M:text-sm cursor-pointer font-medium text-[#fff]"
          >
            Home
          </Link>
          <IoIosArrowForward className="text-[#fff]" />
          <Link
            href="#"
            className="text-xs Mobile-M:text-sm cursor-pointer font-bold text-[#db65ff]"
          >
            Registration
          </Link>
        </div>
        <h1 className="self-start z-10 font-semibold text-xl Mobile-M:text-2xl text-white">
          Pengajuan Visa Haji <br /> dan Umrah.
        </h1>
      </div>
      <div className="head-all-event py-10 w-full h-fit flex justify-center items-center flex-col gap-5 Mobile-M:gap-6 Mobile-L:gap-8 px-5 Mobile-M:px-6">
        {Array(3)
          .fill()
          .map((_, i) => (
            <CardRegistration key={i} imgNum={i+1} />
          ))}
      </div>
      <Footer />
    </>
  );
};

export default RegistrationPage;
