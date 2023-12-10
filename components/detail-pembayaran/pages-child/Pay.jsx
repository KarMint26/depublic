"use client";

import React, { useState } from "react";
import { TicketData } from "@/context/TicketContext";
import BreadCumbs from "@/components/custom/BreadCumbs";
import TimeLeft from "@/components/custom/TimeLeft";
import PaymentInstructions from "@/components/custom/PaymentInstructions";
import CardMiniOrder from "@/components/custom/CardMiniOrder";
import OrderSummary from "../modals/OrderSummary";

const Pay = () => {
  const { activeLinkId } = TicketData();
  const [orderSum, setOrderSum] = useState(false);

  return (
    <div className="wrapper w-full h-fit relative">
      <div className="head-all-event pt-28 pb-14 w-full h-fit flex justify-center items-center flex-col gap-5 Mobile-M:gap-6 Mobile-L:gap-8 px-2 Mobile-M:px-4 Mobile-L:px-6">
        {orderSum && <OrderSummary setHandler={setOrderSum} />}
        <BreadCumbs idPembayaran={activeLinkId} whatLink="pay" />
        <TimeLeft />
        <PaymentInstructions activeLinkId={activeLinkId} />
        <CardMiniOrder setHandler={setOrderSum} />
      </div>
    </div>
  );
};

export default Pay;
