import React from "react";
import { BiInfoCircle } from "react-icons/bi";
import Image from "next/image";
import { PiMapPin } from "react-icons/pi";
import { IoTicketOutline } from "react-icons/io5";

export default function CardBodyPaymentDetail({ detailEvent }) {
  return (
    <div
      className="w-full px-[0.6rem] pb-2 Mobile-M:px-3 Mobile-M:pb-3 bg-white rounded-[10px] mt-7"
      style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.1)" }}
    >
      <div className="flex flex-col justify-center items-start">
        <p className="text-xs Mobile-M:text-sm font-bold pb-3 pt-5">Events</p>
        <div className="flex w-full justify-between items-center border border-[#DADADA] p-2 rounded-[10px]">
          <div className="flex flex-col gap-1 text-[0.65rem] Mobile-M:text-xs">
            <p>Booking code</p>
            <p className="flex gap-2">
              - <BiInfoCircle className="text-sm" />
            </p>
          </div>
          <div className="text-xs Mobile-M:text-sm bg-primary text-[#EEEEEE] rounded-[8px] p-2">
            Waiting for Payment
          </div>
        </div>
      </div>

      <div className="py-4 Mobile-M:py-5 w-full mb-4 Mobile-M:mb-5 flex justify-center items-center border-b border-[#DADADA]">
        <div className="w-[170px] h-full pr-3 border-r border-[#DADADA]">
          <Image
            src={detailEvent && detailEvent.url}
            width={100}
            height={100}
            alt={detailEvent && detailEvent.alt}
            className="w-full h-full"
          />
        </div>
        <div className="w-[60%] pl-3 flex flex-col gap-1 Mobile-L:gap-2 justify-center items-start">
          <h1 className="font-bold text-sm Mobile-M:text-base">
            {detailEvent && detailEvent?.titleEvent?.length > 16
              ? detailEvent.titleEvent.slice(0, 16) + "..."
              : detailEvent.titleEvent}
          </h1>
          <p className="text-[0.65rem] Mobile-M:text-xs flex gap-2">
            <PiMapPin />
            {detailEvent && detailEvent.city}
          </p>
          <p className="font-medium text-primary text-[0.65rem] Mobile-M:text-xs pt-2">
            See details
          </p>
        </div>
      </div>

      <div className="rounded-[20px] py-3 px-4 border mb-2 border-[#DADADA] flex flex-col gap-1 text-[#4D4D4D]">
        <div className="text-[0.65rem] font-[400] Mobile-M:text-[0.7rem]">
          Ticket Type
        </div>
        <div className="text-[0.7rem] font-medium Mobile-M:text-[0.8rem]">
          Pax (x1)
        </div>
      </div>

      <div className="rounded-[20px] py-3 px-4 border border-[#DADADA] flex flex-col gap-1 text-[#4D4D4D]">
        <div className="text-[0.65rem] font-[400] Mobile-M:text-[0.7rem]">
          Validity Date
        </div>
        <div className="text-[0.7rem] font-medium Mobile-M:text-[0.8rem]">
          Valid on 31 Aug 2023
        </div>
      </div>

      <div className="rounded-[10px] py-3 px-4 bg-[#F5F0F6] my-4 flex flex-col gap-1 text-[#4D4D4D]">
        <div className="text-[0.65rem] font-[400] Mobile-M:text-[0.7rem]">
          Karel Trisnanto Utomo
        </div>
        <div className="text-[0.7rem] font-medium Mobile-M:text-[0.8rem]">
          PAX
        </div>
      </div>
      <div className="pb-4 border-b border-[#DADADA]">
        <div className="info-penting flex justify-center items-center flex-col gap-3 Mobile-L:rounded-xl rounded-lg w-full h-fit pt-5 pb-4 px-3 bg-[#FBF6EC]">
          <div className="head-info flex justify-between w-full items-center">
            <h3 className="font-bold text-sm">Info Penting</h3>
            <h3 className="text-xs font-medium text-[#805A00] cursor-pointer">
              See more
            </h3>
          </div>
          <ul className="text-[#4D4D4D] text-[0.6rem] flex justify-center items-start gap-[0.15rem] flex-col">
            <li className="list-item pl-4 relative">
              <p className="before:w-1 before:h-1 before:left-0 before:rounded-full before:bg-[#4D4D4D] before:absolute before:top-[0.35rem]">
                FEARNOT MEMBERSHIP PRESALE dimulai pada hari Kamis, 3 Agustus
                2023 pukul 12.00 - 22.00 WIB.
              </p>
            </li>
            <li className="list-item pl-4 relative">
              <p className="before:w-1 before:h-1 before:left-0 before:rounded-full before:bg-[#4D4D4D] before:absolute before:top-[0.35rem]">
                General Sales dimulai pada hari Jumat, 4 Agustus 2023 pukul
                12.00 WIB.
              </p>
            </li>
            <li className="list-item pl-4 relative">
              <p className="before:w-1 before:h-1 before:left-0 before:rounded-full before:bg-[#4D4D4D] before:absolute before:top-[0.35rem]">
                Untuk Presale, 1 (satu) akun hanya dapat membeli maks. 4 (empat)
                tiket.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-2 py-4 Mobile-M:py-5">
        <h3 className="font-bold text-sm">What's Included</h3>
        <div className="flex items-center gap-2 text-[0.65rem] Mobile-M:text-xs text-[#4D4D4D]">
          <IoTicketOutline className="text-lg rotate-[225deg]" />
          Entrance Ticket
        </div>
      </div>
    </div>
  );
}
