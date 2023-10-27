"use client";

import { TicketData } from "@/context/TicketContext";
import Image from "next/image";
import React, { useState } from "react";
import NavigationBar from "../custom/NavigationBar";
import { IoIosArrowForward } from "react-icons/io";
import { RiSendPlaneLine } from "react-icons/ri";
import Link from "next/link";
import Footer from "../custom/Footer";
import UpcomingEvent from "../custom/UpcomingEvent";
import HeadDetailEvent from "../custom/HeadDetailEvent";
import DateOfEvent from "../custom/DateOfEvent";
import CardPackageTicket from "../custom/CardPackageTicket";
import CardMoreInfo from "../custom/CardMoreInfo";
import { PiMapPin } from "react-icons/pi";
import ButtonDepublic from "../custom/ButtonDepublic";

export default function DetailTicket({ id }) {
  const { upcomingEventData, daysData, packageInfo, moreInfoPackage } =
    TicketData();
  const detailEventData = upcomingEventData[id - 1];
  const [seeMore, setSeeMore] = useState(false);
  const [isAuth, setIsAuth] = useState(true);

  return (
    <>
      <NavigationBar whatPage="detailEvents" />
      <div className="wrapper w-full h-fit">
        <div className="head-all-event pt-28 pb-6 w-full h-fit flex justify-center items-center flex-col gap-5 Mobile-M:gap-6 Mobile-L:gap-6 px-5 Mobile-M:px-6">
          <div className="breadcumbs flex justify-center items-center gap-3 self-start">
            <Link
              href="/"
              className="text-sm cursor-pointer font-medium text-[#A6A6A6]"
            >
              Home
            </Link>
            <IoIosArrowForward className="text-[#A6A6A6]" />
            <Link
              href="/all-event"
              className="text-sm cursor-pointer font-medium text-[#A6A6A6]"
            >
              Ticket
            </Link>
            <IoIosArrowForward className="text-[#A6A6A6]" />
            <Link
              href="#"
              className="text-sm cursor-pointer font-medium text-primary"
            >
              Detail Event
            </Link>
          </div>
        </div>

        <div className="w-full h-fit px-5 Mobile-M:px-6 flex justify-center items-center">
          <Image
            src={detailEventData.url}
            width={350}
            height={250}
            alt="image-hero"
            className="Mobile-L:w-full rounded-2xl"
          />
        </div>

        <div className="w-full h-fit pt-8 pb-4">
          <div className="btn-menu flex justify-center items-center gap-4 Mobile-M:gap-5 Mobile-L:gap-7 border-b border-[#A6A6A6] text-[#A6A6A6] text-[0.6rem] Mobile-M:text-[0.65rem] Mobile-L:text-xs">
            <div className="box-menu cursor-pointer pb-3 border-b border-primary text-primary font-bold">
              Summary
            </div>
            <div className="box-menu cursor-pointer pb-3 border-b">
              Highlighted
            </div>
            <div className="box-menu cursor-pointer pb-3 border-b">Package</div>
            <div className="box-menu cursor-pointer pb-3 border-b">
              Location
            </div>
            <div className="box-menu cursor-pointer pb-3 border-b">Order</div>
          </div>
        </div>

        {isAuth ? (
          <>
            <div className="content-detail-event px-5 Mobile-M:px-6">
              <HeadDetailEvent detailEventData={detailEventData} />
            </div>

            <div
              className="event-container"
              style={{ paddingBottom: "2rem", paddingTop: "1.5rem" }}
            >
              <DateOfEvent daysData={daysData} />
              <div className="container-package w-full mt-5 h-fit px-6 py-7 bg-[#ECCDF61A]/10">
                <div
                  className={`standing-package relative ${
                    !seeMore ? "h-[450px]" : "h-fit"
                  } overflow-hidden flex justify-start items-center flex-col gap-4 w-full transition-all duration-300 ease-in-out pb-14`}
                >
                  {packageInfo.map((info) => (
                    <>
                      <CardPackageTicket
                        detailEventData={detailEventData}
                        idEvent={id}
                        num={info.id}
                        packageInfo={info}
                        key={info.id}
                      />
                    </>
                  ))}
                  <div
                    className="btn-see-more"
                    style={{
                      boxShadow: `${
                        !seeMore
                          ? "0 -15px 8px rgba(255,255,255,0.6)"
                          : "0 -15px 8px rgba(255,255,255,0)"
                      }`,
                    }}
                    onClick={() => setSeeMore((prev) => !prev)}
                  >
                    See More
                    <IoIosArrowForward
                      className={`text-lg ${
                        !seeMore ? "rotate-90" : "rotate-[270deg]"
                      } text-[#4D4D4D] font-medium`}
                    />
                  </div>
                </div>
              </div>

              <div className="location-package w-full pt-6 Mobile-M:pt-8">
                <h1 className="text-sm Mobile-M:text-[0.9rem] Mobile-L:text-[1rem] px-5 Mobile-M:px-6 font-bold">
                  Location
                </h1>
                <Image
                  src="/assets/svg/Map.svg"
                  width={300}
                  height={250}
                  alt="location"
                  className="w-full rounded-2xl"
                />
                <div className="container-directions px-5 Mobile-M:px-6">
                  <div
                    className="directions w-full text-[#4D4D4D] flex justify-between items-center px-4 py-3 rounded-lg bg-bg-primary"
                    style={{ boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}
                  >
                    <div className="left-side flex justify-center items-center gap-3">
                      <RiSendPlaneLine className="text-lg" />
                      <p className="font-bold text-sm">Directions</p>
                    </div>
                    <div className="right-side">
                      <IoIosArrowForward className="text-lg" />
                    </div>
                  </div>
                </div>
                <div className="more-info mt-8 Mobile-M:mt-10 w-full flex justify-center items-start flex-col gap-5 px-5 Mobile-M:px-6">
                  <h1 className="text-sm Mobile-M:text-[0.9rem] Mobile-L:text-[1rem] font-bold">
                    More Info
                  </h1>
                  <div className="wrapper-info w-full flex flex-col justify-center items-center gap-3">
                    {moreInfoPackage.map((data) => (
                      <>
                        <CardMoreInfo moreInfo={data} key={data.id} />
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="tickets-entered">
              <h1 className="text-sm Mobile-M:text-[0.9rem] Mobile-L:text-[1rem] font-bold">
                Tickets Entered
              </h1>
              <div className="relative pl-5 text-[0.65rem] Mobile-M:text-xs pt-5">
                <p className="before:w-1 before:h-1 text-[#4D4D4D] before:left-2 before:rounded-full before:bg-[#4D4D4D] before:absolute before:top-[1.6rem]">
                  Tickets Not Entered
                </p>
              </div>
            </div>

            <div className="ticket-desc">
              <h1 className="text-sm Mobile-M:text-[0.9rem] Mobile-L:text-[1rem] font-bold">
                Description
              </h1>
              <div className="relative text-[0.65rem] Mobile-M:text-xs pt-5 leading-[1.2rem] text-justify">
                Diharapkan melalui website ticketing ini dapat membantu
                mengatasi masalah pengguna terkait pembelian ticket yang
                terkadang habis atau tidak kebagian. Melalui website ini
                pengguna dapat melakukan pengecekan apakah tiket untuk event
                atau konser sudah tersedia atau belum serta bisa membelinya
                secara online.
              </div>
            </div>

            <div className="upcoming-event-container">
              <UpcomingEvent upcomingEventData={upcomingEventData} />
            </div>
          </>
        ) : (
          <>
            <div className="not-auth-container w-full relative">
              <div className="px-5 Mobile-M:px-6 pb-5 relative">
                <div className="head-title flex justify-start items-center flex-col">
                  <div className="head-card flex justify-start items-center self-start text-xs">
                    <div className="country flex justify-center items-center gap-2 pr-3 border-r border-[#DADADA] text-[#4D4D4D]">
                      <PiMapPin className="text-lg" />
                      {detailEventData.city}
                    </div>
                    <div className="tgl text-primary pl-3">
                      {detailEventData.tgl}
                    </div>
                  </div>
                  <h1 className="text-lg Mobile-L:text-xl font-bold mt-4 self-start">
                    {detailEventData.titleEvent}
                  </h1>
                </div>
                <div className="short-desc-price flex justify-between items-center w-full my-4 pb-2 text-[#4D4D4D]">
                  <p className="text-[0.6rem] Mobile-M:text-[0.65rem] Mobile-L:text-xs w-[70%]">
                    Konser dan event yang ada merupakan yang terupdate dan anda
                    dapat membeli tiketnya melalui layanan kami.
                  </p>
                  <div className="prices flex flex-col justify-start items-end gap-1 -translate-y-[0.2rem]">
                    <p className="text-[0.65rem] Mobile-M:text-xs">
                      Starting From
                    </p>
                    <h3 className="font-bold text-[0.65rem] Mobile-M:text-sm text-primary">
                      {detailEventData.ticketPrice}
                    </h3>
                  </div>
                </div>
                <div className="highlight pb-4">
                  <h1 className="font-bold text-sm Mobile-L:text-lg mb-3">
                    Highlight
                  </h1>
                  <ul className="text-[#4D4D4D] text-[0.6rem] flex justify-center items-start gap-[0.15rem] flex-col">
                    <li className="list-item pl-4 relative">
                      <p className="before:w-1 before:h-1 before:left-0 before:rounded-full before:bg-[#4D4D4D] before:absolute before:top-[0.35rem]">
                        Saksikan langsung penampilan memukau dari Maher Zain
                        lewat tur perdana mereka, “2023 LE SSERAFIM TOUR 'FLAME
                        RISES' IN JAKARTA”
                      </p>
                    </li>
                    <li className="list-item pl-4 relative">
                      <p className="before:w-1 before:h-1 before:left-0 before:rounded-full before:bg-[#4D4D4D] before:absolute before:top-[0.35rem]">
                        Konser akan berlangsung pada tanggal 3 Oktober 2023 di
                        JIEXPO Hall B3, Jakarta
                      </p>
                    </li>
                    <li className="list-item pl-4 relative">
                      <p className="before:w-1 before:h-1 before:left-0 before:rounded-full before:bg-[#4D4D4D] before:absolute before:top-[0.35rem]">
                        Untuk cara penggunaan membership code saat periode
                        presale, harap kunjungi laman ini
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="not-auth flex justify-center items-center absolute bottom-0 bg-white/10 z-20 backdrop-blur-sm w-full h-[250px]">
                <div
                  className="auth-box flex justify-center items-center flex-col gap-5 w-[90%] py-5 bg-white"
                  style={{ boxShadow: "0 0 8px rgba(0,0,0,0.1)" }}
                >
                  <div className="head-box flex justify-center items-center gap-4">
                    <Image
                      src="/assets/svg/SearchIcon.svg"
                      width={60}
                      height={60}
                      alt="search-icon"
                    />
                    <div className="search-text flex justify-center items-start flex-col gap-1">
                      <h3 className="font-bold text-xs Mobile-M:text-sm">
                        Want to see more details?
                      </h3>
                      <p className="text-[#4D4D4D] text-[0.65rem] Mobile-M:text-xs">
                        Login first to enter this page!
                      </p>
                    </div>
                  </div>
                  <div className="auth-login flex justify-center items-center gap-3">
                    <ButtonDepublic
                      displayText="Sign In"
                      classBtn="btn-signin"
                      routerPath="/sign-in"
                    />
                    <ButtonDepublic
                      displayText="Sign Up"
                      classBtn="btn-signup"
                      routerPath="/sign-up"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {isAuth && (
        <>
          <Footer />
        </>
      )}
    </>
  );
}
