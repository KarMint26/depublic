"use client"

import { TicketData } from "@/context/TicketContext";
import React from "react";
import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io";

export default function BreadCumbsTwo() {
  const { activeLinkId } = TicketData();

  return (
    <div className="breadcumbs flex justify-center items-center gap-3 self-start">
      <Link
        href={`/package/detail-pembayaran/${activeLinkId}/select-method/payment`}
        className="text-[0.6rem] Mobile-M:text-[0.65rem] Mobile-L:text-xs cursor-pointer font-medium text-[#A6A6A6]"
      >
        Complete Payment
      </Link>
      <IoIosArrowForward className="text-[#A6A6A6]" />
      <Link
        href={`/package/detail-pembayaran/${activeLinkId}/select-method/payment`}
        className="text-[0.6rem] Mobile-M:text-[0.65rem] Mobile-L:text-xs cursor-pointer font-medium text-[#A6A6A6]"
      >
        Pick an Action
      </Link>
      <IoIosArrowForward className="text-[#A6A6A6]" />
      <Link
        href="#"
        className="text-[0.6rem] Mobile-M:text-[0.65rem] Mobile-L:text-xs cursor-pointer font-medium text-primary"
      >
        See Detail
      </Link>
    </div>
  );
}
