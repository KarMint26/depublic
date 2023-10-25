"use client"

import { createContext, useContext } from "react";

const TicketContext = createContext();

const upcomingEventData = [
  {
    id: 1,
    titleEvent: "Konser Maher Zain",
    shortDesc: "Konser Silahturahmi oleh Maher Zain",
    url: "/assets/events/ticket-images.png",
    alt: "upcoming-event",
    city: "BANDUNG",
    tgl: "Sabtu, Juni 22",
    ticketPrice: "IDR 1.299.999",
  },
  {
    id: 2,
    titleEvent: "Festival Musik 2023",
    shortDesc: "Festival Musik oleh Band Ternama",
    url: "/assets/events/ticket-images-2.png",
    alt: "upcoming-event-2",
    city: "SEMARANG",
    tgl: "Rabu, April 2",
    ticketPrice: "IDR 1.099.999",
  },
  {
    id: 3,
    titleEvent: "Charity Concert",
    shortDesc: "Konser untuk berbagi kebahagiaan",
    url: "/assets/events/ticket-images-3.png",
    alt: "upcoming-event-3",
    city: "MANADO",
    tgl: "Minggu, Juli 31",
    ticketPrice: "IDR 800.000",
  },
  {
    id: 4,
    titleEvent: "Arrowai Music",
    shortDesc: "Konser Musik dari Arrowai Industri",
    url: "/assets/events/ticket-images-4.png",
    alt: "upcoming-event-4",
    city: "JAKARTA",
    tgl: "Rabu, Maret 18",
    ticketPrice: "IDR 2.499.999",
  },
];

export const TicketContextProvider = ({ children }) => {
  return (
    <TicketContext.Provider value={{ upcomingEventData }}>
      {children}
    </TicketContext.Provider>
  );
};

export const TicketData = () => {
  return useContext(TicketContext);
};
