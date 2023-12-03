"use client";

import React from "react";
import { MdHistory } from "react-icons/md";
import WaitingForPayment from "@/components/custom/WaitingForPayment";
import Image from "next/image";
import UpcomingEvent from "@/components/custom/UpcomingEvent";
import { TicketData } from "@/context/TicketContext";
import PAC from "@/components/custom/PAC";
import DetailsTicketOrder from "./DetailsTicketOrder";

const OrderDetail = () => {
  const [page, setPage] = React.useState(2);
  const [detailEvent, setDetailEvent] = React.useState([]);
  const [pac, setPac] = React.useState(false);
  const { upcomingEventData } = TicketData();

  React.useEffect(() => {
    if (typeof Window !== "undefined") {
      setDetailEvent(JSON.parse(localStorage.getItem("eventId")));
    }
  }, []);

  const handlePac = () => {
    setPac(true);
  };

  const handleNextPage = () => {
    setPage((page) => (page += 1));
  };

  return (
    <div className="wrapper w-full h-fit relative">
      <div className="head-all-event pt-28 pb-10 w-full h-fit flex justify-center items-center flex-col gap-3 Mobile-M:gap-4 px-2 Mobile-M:px-4 Mobile-L:px-6">
        {page < 2 ? (
          <>
            {pac && <PAC setPac={setPac} handlePage={handleNextPage} />}
            <div className="w-full flex justify-between items-center p-2 rounded-[10px] shadow">
              <p className="font-bold text-xs Mobile-M:text-sm">Your Orders</p>
              <div className="flex justify-center items-center gap-2 text-primary text-[0.65rem] Mobile-M:text-xs font-medium">
                <MdHistory className="text-lg" />
                Order History
              </div>
            </div>
            <div className="font-bold text-[0.6rem] Mobile-M:text-[0.7rem] flex justify-between w-full mt-3 Mobile-M:mt-4 px-2">
              <p>Waiting for Payment</p>
              <p>See all</p>
            </div>
            <WaitingForPayment handlePac={handlePac} />
            <div className="flex flex-col self-start gap-2 w-full">
              <h1 className="font-bold text-sm Mobile-M:text-lg mb-1">
                {detailEvent && detailEvent.titleEvent}
              </h1>
              <Image
                src={detailEvent && detailEvent.url}
                sizes="100vw"
                width={200}
                height={100}
                alt="event-image"
                className="w-full rounded-[20px]"
              />
            </div>
            <div className="bg-bg-primary h-fit w-full py-2 pb-3">
              <UpcomingEvent upcomingEventData={upcomingEventData} />
            </div>
          </>
        ) : (
          <DetailsTicketOrder />
        )}
      </div>
    </div>
  );
};

export default OrderDetail;
