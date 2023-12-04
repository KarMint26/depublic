import React, { useState } from "react";
import Image from "next/image";
import { RiSendPlaneLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import CardMoreInfo from "./CardMoreInfo";
import { PiChatsCircle } from "react-icons/pi";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { SlEarphones } from "react-icons/sl";

const moreInfoPackage = [
  {
    id: 1,
    infoName: "Terms & conditions",
    shortDesc:
      "Syarat dan ketentuan berlaku saat pengguna melakukan pembelian tiket event dan harus mematuhi peraturan.",
  },
  {
    id: 2,
    infoName: "Ticket Description",
    shortDesc:
      "Pembelian tiket event ini diharapkan pengguna dapat merasa terbantu dan efisien dalam pembelian tiket.",
  },
];

export default function FootOrderDetail() {
  const [seeMoreInfo, setSeeMoreInfo] = useState(true);
  const [seeMoreHelp, setSeeMoreHelp] = useState(true);

  return (
    <div className="w-full mt-1">
      <div className="location-package w-full pt-6 Mobile-M:pt-8">
        <h1 className="text-sm Mobile-M:text-[0.9rem] Mobile-L:text-[1rem] font-bold">
          Location
        </h1>
        <div className="w-full py-3 pb-1 Mobile-M:pb-2 Mobile-M:py-4">
          <Image
            src="/assets/svg/Map.svg"
            width={300}
            height={250}
            alt="location"
            className="w-full scale-110 rounded-2xl"
            priority
          />
        </div>
        <div className="container-directions">
          <div
            className="directions w-full text-[#4D4D4D] flex justify-between items-center px-4 py-3 rounded-[12px] bg-bg-primary border border-[#DADADA]"
            style={{ boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}
          >
            <div className="left-side flex justify-center items-center gap-3">
              <RiSendPlaneLine className="text-lg" />
              <p className="font-bold text-sm">Directions</p>
            </div>
            <div className="right-side">
              <IoIosArrowForward className="text-lg" />
            </div>
          </div>
        </div>
        <div className="more-info mt-8 Mobile-M:mt-10 mb-6 Mobile-M:mb-8 w-full flex justify-center items-start flex-col gap-2 Mobile-M:gap-3">
          {moreInfoPackage.map((info) => (
            <CardMoreInfo key={info.id} moreInfo={info} type="orderDetail" />
          ))}
          <div
            className={`more-info-box transition-all duration-300 flex overflow-hidden justify-center items-start h-fit flex-col text-xs w-full cursor-pointer bg-bg-primary Mobile-M:text-sm p-2 Mobile-M:p-3 border border-[#DADADA] rounded-[8px]`}
            style={{ boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}
            onClick={() => setSeeMoreInfo((prev) => !prev)}
          >
            <div className="head-info-box flex justify-between items-center w-full">
              Ticket Description
              <IoIosArrowForward
                className={`transition-all duration-300 ${
                  !seeMoreInfo ? "rotate-0" : "rotate-[90deg]"
                }`}
              />
            </div>
            {seeMoreInfo && (
              <>
                <p className="text-[0.65rem] mt-2 Mobile-M:text-xs text-primary">
                  Karel Trisnanto Utomo
                </p>
                <div className="w-full border mt-3 Mobile-M:mt-4 border-primary text-primary bg-white cursor-pointer py-2 px-3 flex justify-center items-center text-xs Mobile-M:text-sm font-bold rounded-[10px] my-2 transition duration-300 ease-in-out hover:text-white hover:bg-primary">
                  CONTINUE PAYMENT
                </div>
              </>
            )}
          </div>
        </div>

        <div
          className="w-full px-[0.6rem] pb-2 Mobile-M:px-3 Mobile-M:pb-3 bg-white rounded-[10px] cursor-pointer mt-7"
          onClick={() => setSeeMoreHelp((prev) => !prev)}
          style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.1)" }}
        >
          <div className="w-full flex justify-between items-center py-3 pb-1 Mobile-M:pb-2 Mobile-M:py-4">
            <div className="flex items-center gap-3">
              <PiChatsCircle className="text-lg" />
              <div className="font-bold text-sm">Need Help?</div>
            </div>
            <IoIosArrowForward
              className={`text-xl transition duration-300 ${
                seeMoreHelp ? "rotate-[270deg]" : "rotate-[90deg]"
              }`}
            />
          </div>
          {seeMoreHelp && (
            <div className="flex flex-col justify-center items-center w-full gap-3 py-2">
              <div className="w-full rounded-[10px] border border-[#DADADA] flex items-center gap-2 Mobile-M:gap-3 p-3">
                <RxQuestionMarkCircled className="text-2xl" />
                <div className="flex flex-col justify-center items-start text-[#4D4D4D]">
                  <p className="text-[0.7rem] Mobile-M:text-[0.8rem] font-medium">
                    Contact Customer Care
                  </p>
                  <p className="text-[0.6rem] Mobile-M:text-[0.7rem] font-[400]">
                    Our Customer Care are ready for you 24/7
                  </p>
                </div>
              </div>
              <div className="w-full rounded-[10px] border border-[#DADADA] flex items-center gap-2 Mobile-M:gap-3 p-3">
                <SlEarphones className="text-2xl" />
                <div className="flex flex-col justify-center items-start text-[#4D4D4D]">
                  <p className="text-[0.7rem] Mobile-M:text-[0.8rem] font-medium">
                    Help Center
                  </p>
                  <p className="text-[0.6rem] Mobile-M:text-[0.7rem] font-[400]">
                    Find the answer to your problems at your fingertips
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
