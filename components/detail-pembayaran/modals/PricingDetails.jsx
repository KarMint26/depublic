"use client";

import React from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function PricingDetails({ setHandler }) {
  const [detailEvent, setDetailEvent] = React.useState([]);
  const [packageById, setPackageById] = React.useState({});

  React.useEffect(() => {
    if (typeof Window !== "undefined") {
      setDetailEvent(JSON.parse(localStorage.getItem("eventId")));
      setPackageById(JSON.parse(localStorage.getItem("packageInfo")));
    }
  }, []);

  return (
    <div className="splash-screen bg-white/30 backdrop-blur-sm absolute top-0 w-full h-full z-[99] flex justify-center items-center">
      <div
        className="translate-y-12 Mobile-M:translate-y-[6rem] w-[90%] rounded-[10px] bg-white p-2 Mobile-M:p-3"
        style={{ boxShadow: "0 0 6px 0 rgba(0,0,0,0.1)" }}
      >
        <div className="w-full flex justify-between items-center mb-2 pb-3 border-b border-[#DADADA]">
          <h1 className="font-bold text-sm Mobile-M:text-lg">
            Pricing Details
          </h1>
          <IoCloseOutline
            className="text-2xl cursor-pointer text-[#B71926]"
            onClick={() => setHandler(false)}
          />
        </div>
        <div className="py-2 pt-4 Mobile-M:pt-4 flex flex-col gap-2 w-full">
          <h1 className="font-bold text-[0.8rem] Mobile-M:text-[0.9rem] mb-3">
            {detailEvent?.titleEvent?.toUpperCase()}
          </h1>
          <div className="flex justify-between w-full rounded-[20px] border border-[#DADADA] p-4">
            <div className="flex flex-col gap-3">
              <p className="text-[#4D4D4D] text-[0.6rem] Mobile-M:text-[0.7rem] font-[400]">
                Price
              </p>
              <h3 className="text-[0.65rem] Mobile-M:text-xs">
                {packageById?.namePackage} (x1)
              </h3>
            </div>
            <h1 className="text-primary font-bold text-xs Mobile-M:text-sm self-end">
              IDR 1.999.000
            </h1>
          </div>
          <div className="flex justify-between w-full rounded-[20px] border border-[#DADADA] p-4">
            <div className="flex flex-col gap-3 w-full">
              <p className="text-[#4D4D4D] text-[0.6rem] Mobile-M:text-[0.7rem] font-[400]">
                Other Fees
              </p>
              <div className="w-full flex justify-between font-medium mt-3">
                <h3 className="text-[0.6rem] Mobile-M:text-[0.7rem]">Tax</h3>
                <p className="text-[0.6rem] Mobile-M:text-[0.7rem]">Include</p>
              </div>
              <div className="w-full flex justify-between font-medium pb-3 Mobile-M:pb-4 mb-2 Mobile-M:mb-3 Mobile-L:mb-4 border-b border-[#DADADA]">
                <h3 className="text-[0.6rem] Mobile-M:text-[0.7rem]">
                  Transaction fee
                </h3>
                <p className="text-[0.6rem] Mobile-M:text-[0.7rem] font-bold">
                  IDR 1.999.000
                </p>
              </div>
              <div className="w-full flex justify-between pb-2">
                <h3 className="text-[0.6rem] Mobile-M:text-[0.7rem]">
                  Total Payment
                </h3>
                <h1 className="text-primary font-bold text-xs Mobile-M:text-sm self-end">
                  IDR 1.999.000
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
