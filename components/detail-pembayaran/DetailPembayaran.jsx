"use client";

import { TicketData } from "@/context/TicketContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BottomDetail from "./BottomDetail";
import BodyDetail from "./BodyDetail";
import BookTicket from "./pages-child/BookTicket";
import PurpleBtn from "../custom/PurpleBtn";

export default function DetailPembayaran({ id }) {
  const { packageInfo } = TicketData();
  const packageInfoById = packageInfo[id - 1];
  const [page, setPage] = useState(1);

  const handlerNextPagination = () => {
    setPage((prev) => (prev += 1));
  };

  const handlerPrevPagination = () => {
    setPage((prev) => (prev -= 1));
  }

  useEffect(() => {
    if(typeof window !== 'undefined'){
      window.localStorage.setItem("packageInfo", JSON.stringify(packageInfoById))
    }
  },[])

  return (
    <>
      <div
        className={`wrapper-detail-pembayaran w-full h-fit ${
          page >= 2 ? "pt-[4.4rem] Mobile-M:pt-[4.5rem] Mobile-L:pt-[5rem]" : "pt-24 Mobile-M:pt-28"
        }`}
      >
        {page === 1 ? (
          <>
            <div className="head-detail flex justify-between items-center px-6 pb-4">
              <h1 className="font-semibold text-sm Mobile-M:text-lg">
                Book Ticket
              </h1>
              <Link
                href={`/all-event/detail/${id}`}
                className="text-[#B71926] text-[0.65rem] Mobile-M:text-xs"
              >
                Cancel Order
              </Link>
            </div>
            <BodyDetail packageInfoById={packageInfoById} />
            <BottomDetail namePackage={packageInfoById.namePackage} />
            <PurpleBtn textContent="Next" nextHandler={handlerNextPagination} />
          </>
        ) : (
          <BookTicket handlePagePrev={handlerPrevPagination} idTicket={id} />
        )}
      </div>
    </>
  );
}
