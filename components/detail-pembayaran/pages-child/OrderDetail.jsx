"use client"

import React from "react";
import { TicketData } from "@/context/TicketContext";
import BreadCumbs from "@/components/custom/BreadCumbs";

const OrderDetail = () => {
  const { activeLinkId } = TicketData();

  return (
    <div className="wrapper w-full h-fit">
      <div className="head-all-event pt-28 pb-10 w-full h-fit flex justify-center items-center flex-col gap-5 Mobile-M:gap-6 Mobile-L:gap-8 px-2 Mobile-M:px-4 Mobile-L:px-6">
        <BreadCumbs idPembayaran={activeLinkId} whatLink="complete" />
      </div>
    </div>
  );
};

export default OrderDetail;
