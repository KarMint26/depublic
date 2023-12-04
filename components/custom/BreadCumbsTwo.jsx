"use client"

import { TicketData } from "@/context/TicketContext";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function BreadCumbsTwo({ handlePrevPage }) {
  const { activeLinkId } = TicketData();
  const router = useRouter();

  return (
    <div className="breadcumbs flex justify-center items-center gap-3 self-start">
      <div
        onClick={() => router.push(`/package/detail-pembayaran/${activeLinkId}/select-method/payment`)}
        className="text-[0.6rem] Mobile-M:text-[0.65rem] Mobile-L:text-xs cursor-pointer font-medium text-[#A6A6A6]"
      >
        Complete Payment
      </div>
      <IoIosArrowForward className="text-[#A6A6A6]" />
      <div
        onClick={() => handlePrevPage()}
        className="text-[0.6rem] Mobile-M:text-[0.65rem] Mobile-L:text-xs cursor-pointer font-medium text-[#A6A6A6]"
      >
        Pick an Action
      </div>
      <IoIosArrowForward className="text-[#A6A6A6]" />
      <div
        className="text-[0.6rem] Mobile-M:text-[0.65rem] Mobile-L:text-xs cursor-pointer font-medium text-primary"
      >
        See Detail
      </div>
    </div>
  );
}
