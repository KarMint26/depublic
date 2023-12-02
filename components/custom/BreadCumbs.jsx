"use client";

import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function BreadCumbs({ idPembayaran, whatLink }) {
  return (
    <div className="breadcumbs flex justify-center items-center gap-2 Mobile-L:gap-3 self-start">
      <Link
        href={`/package/detail-pembayaran/${idPembayaran}`}
        className="text-[0.6rem] Mobile-L:text-[0.65rem] cursor-pointer font-medium text-[#A6A6A6]"
      >
        Profil
      </Link>
      <IoIosArrowForward className="text-[#A6A6A6]" />
      <Link
        href={`/package/detail-pembayaran/${idPembayaran}/select-method`}
        className={`text-[0.6rem] flex justify-center items-center Mobile-L:text-[0.65rem] cursor-pointer font-medium ${whatLink === "methodPay" ? 'text-primary' : 'text-[#A6A6A6]'} gap-2`}
      >
        <div className={`w-2 h-2 Mobile-M:w-3 Mobile-M:h-3 border ${whatLink === "methodPay" ? 'border-primary text-primary' : 'border-[#A6A6A6] text-[#A6A6A6]'} flex justify-center items-center p-2 rounded-full text-[0.65rem]`}>
          1
        </div>
        <p>Select Method</p>
      </Link>
      <IoIosArrowForward className="text-[#A6A6A6]" />
      <Link
        href={`/package/detail-pembayaran/${idPembayaran}/select-method/payment`}
        className={`text-[0.6rem] flex justify-center items-center Mobile-L:text-[0.65rem] cursor-pointer font-medium ${whatLink === "pay" ? 'text-primary' : 'text-[#A6A6A6]'} gap-2`}
      >
        <div className={`w-2 h-2 Mobile-M:w-3 Mobile-M:h-3 border ${whatLink === "pay" ? 'border-primary text-primary' : 'border-[#A6A6A6] text-[#A6A6A6]'} flex justify-center items-center p-2 rounded-full text-[0.65rem]`}>
          2
        </div>
        <p>Pay</p>
      </Link>
      <IoIosArrowForward className="text-[#A6A6A6]" />
      <Link
        href={`/package/detail-pembayaran/${idPembayaran}/select-method/payment/order-detail`}
        className={`text-[0.6rem] flex justify-center items-center Mobile-L:text-[0.65rem] cursor-pointer font-medium ${whatLink === "complete" ? 'text-primary' : 'text-[#A6A6A6]'} gap-2`}
      >
        <div className={`w-2 h-2 Mobile-M:w-3 Mobile-M:h-3 border ${whatLink === "complete" ? 'border-primary text-primary' : 'border-[#A6A6A6] text-[#A6A6A6]'} flex justify-center items-center p-2 rounded-full text-[0.65rem]`}>
          3
        </div>
        <p>Complete</p>
      </Link>
    </div>
  );
}
