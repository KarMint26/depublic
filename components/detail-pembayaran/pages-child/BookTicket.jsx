import React, { useState } from "react";
import { BiCoin, BiInfoCircle } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import ReactFlagsSelect from "react-flags-select";

const BookTicket = ({ handlePage }) => {
  const [selectedCountry, setSelectedCountry] = useState("ID");

  return (
    <React.Fragment>
      <div
        onClick={handlePage}
        className="head-page w-full bg-[#FEF6E5] px-6 py-5 text-[#1F1F1F] flex items-center justify-start gap-4 cursor-pointer"
      >
        <IoIosArrowForward className="rotate-[180deg] text-xl" />
        <p>Ticket Package</p>
      </div>
      <div className="body-book-ticket flex flex-col justify-center items-start gap-2 w-full px-5 py-6">
        <div className="title-contact space-y-2">
          <h1 className="text-sm Mobile-M:text-lg font-bold">Your Contact</h1>
          <p className="text-[0.65rem] Mobile-M:text-xs text-[#4D4D4D] w-[90%]">
            Fill in this form correctly. We{"'"}ll send the e-ticket to the
            email address as declared on this page.
          </p>
        </div>
        <div
          className="card-identity bg-white flex flex-col w-full rounded-[20px] p-4 py-5 my-4"
          style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.1)" }}
        >
          <div className="w-full h-fit flex justify-center items-stretch flex-col gap-3">
            <input
              type="text"
              name="full-name"
              id="full-name"
              className="input-style rounded-xl placeholder:text-[#DADADA] border-[#DADADA] p-2 placeholder:text-xs"
              placeholder="Full Name"
            />
            <div className="phone-number relative flex justify-center items-center w-full h-[55px] rounded-xl">
              <ReactFlagsSelect
                selected={selectedCountry}
                onSelect={(code) => setSelectedCountry(code)}
                countries={["US", "GB", "FR", "DE", "ID"]}
                fullWidth={false}
                selectedSize={24}
                showOptionLabel={false}
                showSelectedLabel={false}
                selectButtonClassName="flags-sl"
              />
              <input
                type="number"
                name="phone"
                id="phone"
                className="placeholder:text-[#A6A6A6] placeholder:text-xs text-[#000000] border-[#DADADA] w-full h-[55px] px-4 pt-5 pb-1 peer"
                style={{ borderRadius: '0 0.75rem 0.75rem 0' }}
              />
              <p className="text-sm text-[#A6A6A6] peer-focus:-translate-y-3 peer-focus:text-[0.65rem] transition duration-300 ease-in-out absolute left-[6rem]">Phone Number</p>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              className="input-style rounded-xl placeholder:text-[#DADADA] border-[#DADADA] p-2 placeholder:text-xs"
              placeholder="Email"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookTicket;
