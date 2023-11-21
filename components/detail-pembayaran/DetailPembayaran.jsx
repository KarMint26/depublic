"use client";

import { TicketData } from "@/context/TicketContext";
import Link from "next/link";
import React, { useState } from "react";
import BottomDetail from "./BottomDetail";
import BodyDetail from "./BodyDetail";
import BookTicket from "./pages-child/BookTicket";
import PaymentMethod from "./pages-child/PaymentMethod";

export default function DetailPembayaran({ id }) {
  const { packageInfo } = TicketData();
  const packageInfoById = packageInfo[id - 1];
  const [page, setPage] = useState(0);

  return (
    <>
      <div className="wrapper-detail-pembayaran w-full h-fit pt-24 Mobile-M:pt-28">
        {page < 1 ? (
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
            <div
              onClick={() => setPage((page) => page += 1)}
              className={`btn-view-package justify-center items-center text-[#EEEEEE] bg-primary Mobile-L:w-pwa w-full z-50 p-3 font-bold text-xs Mobile-M:text-sm fixed bottom-0 text-center`}
            >
              Next
            </div>
          </>
        ) : page === 2 ? (
          <BookTicket />
        ) : (
          <PaymentMethod />
        )}
      </div>
    </>
  );
}
