"use client"

import { TicketData } from "@/context/TicketContext";
import SliderEvent from "../custom/SliderEvent";
import UpcomingEvent from "../custom/UpcomingEvent";

export default function EventTicket() {
  const { upcomingEventData } = TicketData();

  return (
    <>
      <div className="event-container">
        <SliderEvent carouselImage={upcomingEventData} />
        <UpcomingEvent upcomingEventData={upcomingEventData} />
      </div>
    </>
  );
}
