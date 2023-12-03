import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCopy } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { BiInfoCircle } from "react-icons/bi";

export default function PaymentInstructions({ activeLinkId }) {
  return (
    <div
      className="rounded-[10px] w-full p-2 Mobile-M:p-3 py-3 Mobile-M:py-4 flex flex-col"
      style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.1)" }}
    >
      <div className="w-full flex justify-between items-center">
        <p className="font-bold text-[0.65rem] Mobile-M:text-xs">
          Payment Intructions
        </p>
        <div className="flex flex-col items-start justify-center">
          <p className="text-[#4D4D4D] text-[0.55rem] Mobile-M:text-[0.65rem]">
            Complete Before
          </p>
          <p className="font-medium text-[0.6rem] Mobile-M:text-[0.7rem]">
            Wed, 30 Aug 2023 11.15 GMT+9
          </p>
        </div>
      </div>
      <p className="font-bold text-[0.6rem] Mobile-M:text-[0.7rem] py-5">
        Transfer to
      </p>
      <div className="flex gap-3 p-2 text-[0.65rem] Mobile-M:text-xs">
        <Image
          src="/assets/svg/bca.svg"
          width={30}
          height={30}
          alt="bca-icon"
        />
        <p>Bank BCA</p>
      </div>
      <div className="w-full h-fit relative flex justify-center items-center pb-2 pt-4">
        <input
          type="number"
          name="bca-id"
          id="bca-id"
          className="border p-2 Mobile-M:p-3 text-[0.65rem] Mobile-M:text-xs placeholder:text-[0.65rem] Mobile-M:placeholder:text-xs border-[#DADADA] rounded-[10px] text-[#4D4D4D] placeholder:text-[#4D4D4D] w-full"
          placeholder="1 2003 0456 7089 9876"
        />
        <FaRegCopy className="text-sm text-primary absolute cursor-pointer right-4" />
      </div>
      <div className="total-payment flex flex-col gap-2 mb-4">
        <p className="font-bold text-[0.6rem] Mobile-M:text-[0.7rem] py-2">
          Total Payment
        </p>
        <div className="border p-2 Mobile-M:p-3 text-[0.65rem] Mobile-M:text-xs border-[#DADADA] rounded-[10px] text-[#4D4D4D] placeholder:text-[#4D4D4D] w-full">
          IDR 1.999.000
        </div>
      </div>
      <div className="more-info">
        <p className="font-bold text-[0.6rem] Mobile-M:text-[0.7rem] pb-1">
          More Info
        </p>
        <div className="w-full h-fit cursor-pointer relative flex justify-center items-center pb-2 pt-4">
          <div className="border p-2 Mobile-M:p-[0.7rem] text-[0.65rem] Mobile-M:text-xs border-[#DADADA] rounded-[8px] text-[#4D4D4D] placeholder:text-[#4D4D4D] w-full">
            Transfer via ATM
          </div>
          <IoIosArrowForward className="text-sm rotate-[90deg] text-[#6B028D] absolute cursor-pointer right-4" />
        </div>
        <div className="w-full h-fit cursor-pointer relative flex justify-center items-center pb-2 pt-2">
          <div className="border p-2 Mobile-M:p-[0.7rem] text-[0.65rem] Mobile-M:text-xs border-[#DADADA] rounded-[8px] text-[#4D4D4D] placeholder:text-[#4D4D4D] w-full">
            Transfer via Internet Banking
          </div>
          <IoIosArrowForward className="text-sm rotate-[90deg] text-[#6B028D] absolute cursor-pointer right-4" />
        </div>
        <div className="w-full h-fit cursor-pointer relative flex justify-center items-center pb-2 pt-2">
          <div className="border p-2 Mobile-M:p-[0.7rem] text-[0.65rem] Mobile-M:text-xs border-[#DADADA] rounded-[8px] text-[#4D4D4D] placeholder:text-[#4D4D4D] w-full">
            Transfer via Mobile Banking
          </div>
          <IoIosArrowForward className="text-sm rotate-[90deg] text-[#6B028D] absolute cursor-pointer right-4" />
        </div>
        <div className="bg-[#FCF6E8] px-2 py-1 text-[#D49600] w-fit rounded-xl text-[0.55rem] Mobile-M:text-[0.65rem] flex justify-center items-center gap-2 my-2 mb-5">
          <BiInfoCircle className="text-lg" />
          <p>
            Once our payment is verified, your e-ticket and receipt will be sent
            to the registered email address
          </p>
        </div>
        <div className="flex justify-between items-center gap-2">
          <Link
            className="text-[0.55rem] flex items-center justify-center transition duration-300 ease-in-out hover:text-white hover:bg-primary text-center Mobile-M:text-[0.65rem] Mobile-L:text-xs bg-white text-primary p-[0.6rem] px-3 w-full font-bold rounded-[12px] border border-primary"
            href={`/package/detail-pembayaran/${activeLinkId}/select-method`}
          >
            Change Payment Method
          </Link>
          <Link
            className="text-[0.55rem] flex items-center justify-center transition duration-300 ease-in-out hover:bg-primary/90 text-center Mobile-M:text-[0.65rem] Mobile-L:text-xs bg-primary text-white p-[0.6rem] px-3 w-[80%] font-bold rounded-[12px] border border-primary"
            href={`/package/detail-pembayaran/${activeLinkId}/select-method/payment/order-detail`}
          >
            See Order List
          </Link>
        </div>
      </div>
    </div>
  );
}
