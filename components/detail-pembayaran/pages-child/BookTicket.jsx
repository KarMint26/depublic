import React, { useState } from "react";
import { BiCoin, BiInfoCircle } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import ReactFlagsSelect from "react-flags-select";
import PurpleBtn from "@/components/custom/PurpleBtn";
import { useRouter } from "next/navigation";
import LoadingForm from "@/components/custom/LoadingForm";
import AgreeBox from "@/components/custom/AgreeBox";

const BookTicket = ({ handlePagePrev, idTicket }) => {
  const [selectedCountry, setSelectedCountry] = useState("ID");
  const [loading, setLoading] = useState(false);
  const [goNext, setGoNext] = useState(false);
  const router = useRouter();

  const handlePageNext = () => {
    setLoading(true);
    setTimeout(() => {
      setGoNext(true);
    }, 3000);
  };

  const btnPayNow = () => {
    router.push(`/package/detail-pembayaran/${idTicket}/select-method`);
  }

  const btnLater = () => {
    setLoading(false);
    setGoNext(false);
  }

  return (
    <React.Fragment>
      {loading &&
        (!goNext ? (
          <LoadingForm whatType="payment" />
        ) : (
          <AgreeBox btnLater={btnLater} btnPayNow={btnPayNow} />
        ))}
      <div
        onClick={handlePagePrev}
        className="head-page w-full bg-[#FEF6E5] px-6 py-5 text-[#1F1F1F] flex items-center justify-start gap-4 cursor-pointer"
      >
        <IoIosArrowForward className="rotate-[180deg] text-xl" />
        <p>Ticket Package</p>
      </div>
      <div className="body-book-ticket flex flex-col justify-center items-start gap-2 w-full px-5 py-6">
        <div className="title-contact space-y-2">
          <h1 className="text-sm Mobile-M:text-lg font-bold">Your Contact</h1>
          <p className="text-[0.65rem] Mobile-M:text-xs text-[#4D4D4D] w-[90%]">
            Fill in this form correctly. We{"'"}ll send the e-ticket to the
            email address as declared on this page.
          </p>
        </div>
        <div
          className="card-identity bg-white flex flex-col w-full rounded-[20px] p-4 py-5 my-4"
          style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.1)" }}
        >
          <div className="w-full h-fit flex justify-center items-stretch flex-col gap-3">
            <input
              type="text"
              name="full-name"
              id="full-name"
              className="input-style rounded-xl placeholder:text-[#DADADA] border-[#DADADA] p-2 placeholder:text-xs"
              placeholder="Full Name"
            />
            <div className="phone-number relative flex justify-center items-center w-full h-[55px] rounded-xl">
              <ReactFlagsSelect
                selected={selectedCountry}
                onSelect={(code) => setSelectedCountry(code)}
                countries={["US", "GB", "FR", "DE", "ID"]}
                fullWidth={false}
                selectedSize={24}
                showOptionLabel={false}
                showSelectedLabel={false}
                selectButtonClassName="flags-sl"
              />
              <input
                type="number"
                name="phone"
                id="phone"
                className="placeholder:text-[#A6A6A6] placeholder:text-xs text-[#000000] border-[#DADADA] w-full h-[55px] px-4 pt-5 pb-1 peer"
                style={{ borderRadius: "0 0.75rem 0.75rem 0" }}
              />
              <p className="text-sm text-[#A6A6A6] peer-focus:-translate-y-3 peer-focus:text-[0.65rem] transition duration-300 ease-in-out absolute left-[6rem]">
                Phone Number
              </p>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              className="input-style rounded-xl placeholder:text-[#DADADA] border-[#DADADA] p-2 placeholder:text-xs"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="space-y-2 pt-4">
          <h1 className="text-sm Mobile-M:text-lg font-bold">
            Visitor Details
          </h1>
          <p className="text-[0.65rem] Mobile-M:text-xs text-[#4D4D4D] w-[90%]">
            Make sure to fill in the visitor details correctly for a smooth
            experience.
          </p>
        </div>
        <div
          className="card-identity bg-white flex flex-col w-full rounded-[20px] p-4 py-5 my-4 mb-10"
          style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.1)" }}
        >
          <div className="w-full h-fit flex justify-center items-stretch flex-col gap-3">
            <div className="head-visitor w-full flex flex-col">
              <div className="w-full flex justify-between items-center">
                <h1 className="text-xs Mobile-M:text-sm font-bold">
                  Ticket 1 {"(Pax)"}
                </h1>
                <IoIosArrowForward className="rotate-[90deg]" />
              </div>
              <div className="radio-field py-2 pt-3 flex items-center w-full gap-2">
                <input
                  type="radio"
                  name="content"
                  id="content"
                  className="text-[#A6A6A6]"
                />
                <label
                  htmlFor="content"
                  className="text-[0.65rem] Mobile-M:text-xs text-[#A6A6A6]"
                >
                  Same as content details
                </label>
              </div>
              <div className="w-full border-t border-[#DADADA] py-2 mt-2 flex justify-start">
                <div className="bg-[#FCF6E8] px-2 py-1 text-[#D49600] w-fit rounded-xl text-[0.55rem] Mobile-M:text-[0.65rem] flex justify-center items-center gap-2">
                  <BiInfoCircle className="text-sm" />
                  <p>
                    You only need one visitor&apos;s info for all the tickets you
                    book.
                  </p>
                </div>
              </div>
            </div>
            <input
              type="text"
              name="Full-name"
              id="Full-name"
              className="input-style rounded-xl placeholder:text-[#DADADA] border-[#DADADA] p-2 placeholder:text-xs"
              placeholder="Full name"
            />
            <div className="phone-number relative flex justify-center items-center w-full h-[55px] rounded-xl">
              <ReactFlagsSelect
                selected={selectedCountry}
                onSelect={(code) => setSelectedCountry(code)}
                countries={["US", "GB", "FR", "DE", "ID"]}
                fullWidth={false}
                selectedSize={24}
                showOptionLabel={false}
                showSelectedLabel={false}
                selectButtonClassName="flags-sl"
              />
              <input
                type="number"
                name="Phone"
                id="Phone"
                className="placeholder:text-[#A6A6A6] placeholder:text-xs text-[#000000] border-[#DADADA] w-full h-[55px] px-4 pt-5 pb-1 peer"
                style={{ borderRadius: "0 0.75rem 0.75rem 0" }}
              />
              <p className="text-sm text-[#A6A6A6] peer-focus:-translate-y-3 peer-focus:text-[0.65rem] transition duration-300 ease-in-out absolute left-[6rem]">
                Phone Number
              </p>
            </div>
            <input
              type="email"
              name="Email"
              id="Email"
              className="input-style rounded-xl placeholder:text-[#DADADA] border-[#DADADA] p-2 placeholder:text-xs"
              placeholder="Email"
            />
            <input
              type="text"
              name="id-card"
              id="id-card"
              className="input-style rounded-xl placeholder:text-[#DADADA] border-[#DADADA] p-2 placeholder:text-xs"
              placeholder="Identity Card Number"
            />
          </div>
        </div>

        <div className="total-payment flex flex-col w-full pb-[4rem]">
          <div className="w-full flex justify-between items-center border-b border-[#DADADA] pb-3">
            <h1 className="text-xs Mobile-M:text-sm font-bold">
              Total Payment
            </h1>
            <div className="flex justify-center items-center gap-2">
              <p className="text-[#A103D3] font-bold text-xs Mobile-M:text-sm">
                IDR 1.999.000
              </p>
              <IoIosArrowForward className="rotate-[270deg] text-sm" />
            </div>
          </div>
          <div className="w-full flex items-center py-4 gap-2">
            <BiCoin className="text-lg text-[#D49600] rotate-[270deg]" />
            <p className="text-[0.65rem] text-[#4D4D4D] Mobile-M:text-[0.7rem]">
              You&apos;ll get 25,058 points
            </p>
          </div>
        </div>
      </div>
      <PurpleBtn textContent={"Book Ticket"} nextHandler={handlePageNext} />
    </React.Fragment>
  );
};

export default BookTicket;
