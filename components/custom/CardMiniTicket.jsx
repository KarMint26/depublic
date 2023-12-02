import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

export default function CardMiniTicket() {
  return (
    <div className="flex w-full justify-between items-center cursor-pointer">
      <div className="flex justify-center items-center gap-2">
        <div className="bg-[#FBF6EC] rounded-full p-2">
          <Image src="/assets/features/features-1.png" width={30} height={30} />
        </div>
        <div className="flex flex-col">
          <h1 className="text-[0.65rem] Mobile-M:text-[0.75rem] font-semibold">
            Ticket Event
          </h1>
          <p className="text-[0.5rem] Mobile-M:text-[0.6rem]">
            Wed, 30 Aug 2023
          </p>
        </div>
      </div>
      <IoIosArrowForward className="rotate-[90deg] text-[#4D4D4D]" />
    </div>
  );
}
