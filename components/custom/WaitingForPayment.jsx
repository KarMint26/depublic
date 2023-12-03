import React from "react";
import { IoIosArrowForward, IoIosSkipForward } from "react-icons/io";
import Image from "next/image";
import { getTimeLeft } from "@/context/TimeContext";

export default function WaitingForPayment({ handlePac }) {
  const { timeLeft } = getTimeLeft();
  const [minutes, setMinutes] = React.useState(Math.floor(timeLeft / 60));
  const [seconds, setSeconds] = React.useState(timeLeft % 60);

  React.useEffect(() => {
    setMinutes(Math.floor(timeLeft / 60));
    setSeconds(timeLeft % 60);
  }, [timeLeft]);

  return (
    <div className="w-full h-fit pb-5 border-b border-[#f1f1f1]">
      <div className="w-full relative rounded-[13px] Mobile-M:rounded-[16px] flex flex-col border border-[#DADADA] p-2">
        <div className="order-id flex justify-between items-center border-b-2 pb-2 mb-4 border-[#DADADA] cursor-pointer text-[#4D4D4D]" onClick={handlePac}>
          <p className="text-[0.65rem] text-center translate-y-2 Mobile-M:text-xs pb-3">
            Order ID: 1234776184
          </p>
          <IoIosArrowForward className="rotate-[90deg] text-lg" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-2 text-[0.65rem] Mobile-M:text-xs">
            <Image
              src="/assets/features/features-1.png"
              width={30}
              height={30}
              alt="icon-ticket"
            />
            <p>Ticket Event</p>
          </div>
          <h1 className="text-xs font-bold Mobile-M:text-sm text-[#4D4D4D] pb-2">
            IDR 1.999.000
          </h1>
          <div className="bg-[#F5F0F6] text-[#E0ABF0] text-center py-2 px-3 w-full text-xs Mobile-M:text-sm rounded-[12px]">
            Complete Payment in 00 : {minutes.toString().padStart(2, "0")} :{" "}
            {seconds.toString().padStart(2, "0")}
          </div>
        </div>
        <div className="p-2 rounded-full shadow-md absolute -right-4 top-[4rem] bg-white cursor-pointer">
          <IoIosArrowForward className="text-xl text-[#4D4D4D]" />
        </div>
      </div>
    </div>
  );
}
