"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function CardMoreInfo({ moreInfo }) {
  const [seeMoreInfo, setSeeMoreInfo] = useState(false);

  return (
    <>
      <div
        className={`more-info-box transition-all duration-300 flex overflow-hidden justify-center items-start h-fit flex-col text-xs w-full cursor-pointer bg-bg-primary Mobile-M:text-sm p-2 Mobile-M:p-3`}
        style={{ boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}
        onClick={() => setSeeMoreInfo((prev) => !prev)}
      >
        <div className="head-info-box flex justify-between items-center w-full">
          {moreInfo.infoName}
          <IoIosArrowForward
            className={`transition-all duration-300 ${
              !seeMoreInfo ? "rotate-90" : "rotate-[270deg]"
            }`}
          />
        </div>
        {seeMoreInfo && (
          <>
            <p className="text-[0.65rem] mt-2 Mobile-M:text-xs text-slate-600">
              {moreInfo.shortDesc}
            </p>
          </>
        )}
      </div>
    </>
  );
}
