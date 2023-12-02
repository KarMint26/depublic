"use client";

import React from "react";
import { TicketData } from "@/context/TicketContext";
import BreadCumbs from "@/components/custom/BreadCumbs";

const PaymentMethod = () => {
  const { activeLinkId } = TicketData();

  return (
    <div className="wrapper w-full h-fit">
      <div className="head-all-event pt-28 pb-10 w-full h-fit flex justify-center items-center flex-col gap-5 Mobile-M:gap-6 Mobile-L:gap-8 px-2 Mobile-M:px-4 Mobile-L:px-6">
        <BreadCumbs idPembayaran={activeLinkId} whatLink="methodPay" />
        <div
          className="complete-payment w-full px-2 py-3 flex justify-between items-center"
          style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.1)" }}
        >
          <h1 className="text-sm Mobile-M:text-lg font-bold">
            Complete payment in
          </h1>
          <div className="px-4 py-2">00</div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
