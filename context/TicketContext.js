"use client";

import { createContext, useContext, useEffect, useState } from "react";

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

const daysData = [
  {
    id: 1,
    dayName: "Sun",
    date: "30 Aug",
  },
  {
    id: 2,
    dayName: "Mon",
    date: "31 Aug",
  },
  {
    id: 3,
    dayName: "Tue",
    date: "1 Sep",
  },
  {
    id: 4,
    dayName: "Wed",
    date: "2 Sep",
  },
  {
    id: 5,
    dayName: "Thu",
    date: "3 Sep",
  },
  {
    id: 6,
    dayName: "Fri",
    date: "4 Sep",
  },
  {
    id: 7,
    dayName: "Sat",
    date: "5 Sep",
  },
];

const packageInfo = [
  {
    id: 1,
    namePackage: "CAT 2A (STANDING)",
    descPackage:
      "Tempat duduk anda di baris nomer 2 dari pusat konser, selamat menonton",
    packagePlus: ["Free Cupcake", "Free Snack", "Mineral Water"],
  },
  {
    id: 2,
    namePackage: "CAT 3B (STANDING)",
    descPackage:
      "Tempat duduk anda di baris nomer 3 dari Kanan pusat konser, selamat menonton",
    packagePlus: ["Free Boba Milk", "Free Bread", "Mineral Water"],
  },
  {
    id: 3,
    namePackage: "VVIP (STANDING)",
    descPackage:
      "Tempat duduk anda di baris paling depan dari pusat konser, selamat menonton",
    packagePlus: ["Golden Cake", "Free Snack", "Mineral Water"],
  },
  {
    id: 4,
    namePackage: "CAT 4A (STANDING)",
    descPackage:
      "Tempat duduk anda di baris nomer 4 dari pusat konser, selamat menonton",
    packagePlus: ["Free Ice Tea", "Free Snack", "Mineral Water"],
  },
];

const moreInfoPackage = [
  {
    id: 1,
    infoName: "Ticket Exchange",
    shortDesc:
      "Penukaran tiket dilakukan sebagai pelayanan yang baik bagi pengguna agar merasa tidak menyesal setelah membeli.",
  },
  {
    id: 2,
    infoName: "Terms & conditions",
    shortDesc:
      "Syarat dan ketentuan berlaku saat pengguna melakukan pembelian tiket event dan harus mematuhi peraturan.",
  },
  {
    id: 3,
    infoName: "Additional information",
    shortDesc:
      "Pembelian tiket event ini diharapkan pengguna dapat merasa terbantu dan efisien dalam pembelian tiket.",
  },
];

export const TicketContextProvider = ({ children }) => {
  const [activeLinkId, setActiveLinkId] = useState(0);

  const handleChangeActiveLink = (n) => {
    setActiveLinkId(n);
    window.localStorage.setItem("idPayment", n)
  };

  useEffect(() => {
    setActiveLinkId(window.localStorage.getItem("idPayment"))
  },[handleChangeActiveLink])

  return (
    <TicketContext.Provider
      value={{
        upcomingEventData,
        daysData,
        packageInfo,
        moreInfoPackage,
        activeLinkId,
        handleChangeActiveLink,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export const TicketData = () => {
  return useContext(TicketContext);
};
