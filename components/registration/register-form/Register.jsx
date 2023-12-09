"use client";

import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import FileUpload from "../FileUpload";

const Register = () => {
  const [chosenFileKtp, setChosenFileKtp] = React.useState("No File Chosen");
  const [chosenFileKK, setChosenFileKK] = React.useState("No File Chosen");

  return (
    <>
      <div className="head-all-event pt-28 pb-10 w-full h-fit flex justify-center items-center flex-col gap-5 Mobile-M:gap-6 Mobile-L:gap-8 px-5 Mobile-M:px-6 bg-[#F5F0F6]">
        <div className="breadcumbs flex justify-center items-center gap-3 self-start">
          <Link
            href="/"
            className="text-sm cursor-pointer font-medium text-[#A6A6A6]"
          >
            Home
          </Link>
          <IoIosArrowForward className="text-[#A6A6A6]" />
          <Link
            href="/registration"
            className="text-sm cursor-pointer font-medium text-[#A6A6A6]"
          >
            Registration
          </Link>
          <IoIosArrowForward className="text-[#A6A6A6]" />
          <Link
            href="#"
            className="text-sm cursor-pointer font-medium text-primary"
          >
            Register Form
          </Link>
        </div>
        <h1 className="self-start z-10 font-semibold text-xl Mobile-M:text-2xl leading-[3rem]">
          Pengajuan Visa Haji & <br /> Umrah.
        </h1>
      </div>
      <div className="head-all-event py-10 w-full h-fit flex justify-center items-start flex-col px-5 Mobile-M:px-6">
        <h1 className="font-semibold text-[0.8rem] Mobile-M:text-[1rem] Mobile-L:text-base mb-3">
          Pengajuan Visa Haji dan Umrah.
        </h1>
        <p className="text-[0.65rem] Mobile-M:text-xs text-[#4D4D4D] mb-5">
          Pengajuan Visa Haji dan Umrah dilakukan melalui laman pendaftaran
          account anda terlebih dahulu di website depublic dengan mengakses
          halaman sign-in atau sign-out untuk mendaftarkan account.
        </p>
        <h1 className="font-semibold text-[0.8rem] Mobile-M:text-[1rem] Mobile-L:text-base mb-3">
          Format your data.
        </h1>
        <div className="field-data-input flex flex-col gap-2 Mobile-M:gap-3 w-full mt-2">
          <p className="text-[0.65rem] Mobile-M:text-xs text-primary font-medium">
            Full Name
          </p>
          <input
            type="text"
            name="fn"
            id="fn"
            placeholder="Karel Trisnanto Utomo"
            className="bg-[#F5F0F6] outline-none border-none rounded-[8px] px-2 py-3 text-xs Mobile-M:text-sm w-full placeholder:text-xs Mobile-M:placeholder:text-sm text-[#4D4D4D] placeholder:text-[#4D4D4D]"
          />
        </div>
        <div className="field-data-input flex flex-col gap-2 Mobile-M:gap-3 w-full mt-5">
          <p className="text-[0.65rem] Mobile-M:text-xs text-primary font-medium">
            Date of Birth
          </p>
          <div className="relative w-full h-fit">
            <input
              type="text"
              name="birthday"
              id="birthday"
              placeholder="Type here"
              className="bg-[#F5F0F6] outline-none border-none rounded-[8px] px-2 pl-9 py-3 text-xs Mobile-M:text-sm w-full placeholder:text-xs Mobile-M:placeholder:text-sm text-[#4D4D4D] placeholder:text-[#4D4D4D]"
            />
            <CiCalendarDate className="text-primary text-lg absolute left-2 top-[0.8rem]" />
          </div>
        </div>
        <div className="field-data-input flex flex-col gap-2 Mobile-M:gap-3 w-full mt-5">
          <p className="text-[0.65rem] Mobile-M:text-xs text-primary font-medium translate-y-1">
            Complete Address
          </p>
          <p className="text-[0.6rem] Mobile-M:text-[0.7rem]">
            Address According to your KTP/KK
          </p>
          <input
            type="text"
            name="addr"
            id="addr"
            placeholder="Type here"
            className="bg-[#F5F0F6] outline-none border-none rounded-[8px] px-2 py-3 text-xs Mobile-M:text-sm w-full placeholder:text-xs Mobile-M:placeholder:text-sm"
          />
        </div>
        <div className="field-data-input flex flex-col gap-2 Mobile-M:gap-3 w-full mt-5">
          <p className="text-[0.65rem] Mobile-M:text-xs text-primary font-medium">
            KTP Number
          </p>
          <input
            type="text"
            name="ktp"
            id="ktp"
            placeholder="Type here"
            className="bg-[#F5F0F6] outline-none border-none rounded-[8px] px-2 py-3 text-xs Mobile-M:text-sm w-full placeholder:text-xs Mobile-M:placeholder:text-sm"
          />
        </div>
        <div className="field-data-input flex flex-col gap-2 Mobile-M:gap-3 w-full mt-5">
          <p className="text-[0.65rem] Mobile-M:text-xs text-primary font-medium">
            KK Number
          </p>
          <input
            type="text"
            name="kk"
            id="kk"
            placeholder="Type here"
            className="bg-[#F5F0F6] outline-none border-none rounded-[8px] px-2 py-3 text-xs Mobile-M:text-sm w-full placeholder:text-xs Mobile-M:placeholder:text-sm"
          />
        </div>
        <FileUpload
          textName="Upload KTP"
          typeFile="ktp"
          chosenFile={chosenFileKtp}
          setChosenFile={setChosenFileKtp}
        />
        <FileUpload
          textName="Upload KK"
          typeFile="kk"
          chosenFile={chosenFileKK}
          setChosenFile={setChosenFileKK}
        />
        <div className="text-sm Mobile-M:text-base text-white bg-primary rounded-[12px] text-center px-3 py-3 w-full mt-5 font-bold cursor-pointer">
          Submit
        </div>
      </div>
    </>
  );
};

export default Register;
