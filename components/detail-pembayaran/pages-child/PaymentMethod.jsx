"use client";

import React, { useState } from "react";
import { TicketData } from "@/context/TicketContext";
import BreadCumbs from "@/components/custom/BreadCumbs";
import TimeLeft from "@/components/custom/TimeLeft";
import { IoIosArrowForward } from "react-icons/io";
import { IoPricetagOutline } from "react-icons/io5";
import { BiCoin } from "react-icons/bi";
import PurpleBtn from "@/components/custom/PurpleBtn";
import { useRouter } from "next/navigation";
import CardMiniTicket from "@/components/custom/CardMiniTicket";
import PromoVoucher from "../modals/PromoVoucher";
import PricingDetails from "../modals/PricingDetails";
import OrderSummary from "../modals/OrderSummary";

const PaymentMethod = () => {
  const { activeLinkId } = TicketData();
  const router = useRouter();
  const [selPayMethod, setSelPayMenthod] = useState(false);
  const [orderSummary, setOrderSummary] = useState(false);
  const [promo, setPromo] = useState(false);
  const [pricingDetails, setPricingDetails] = useState(false);

  return (
    <div className="wrapper w-full h-fit relative">
      <div className="head-all-event pt-28 pb-10 w-full h-fit flex justify-center items-center flex-col gap-5 Mobile-M:gap-6 Mobile-L:gap-8 px-2 Mobile-M:px-4 Mobile-L:px-6">
        {promo && <PromoVoucher setHandler={setPromo} />}
        {pricingDetails && <PricingDetails setHandler={setPricingDetails} />}
        {orderSummary && <OrderSummary setHandler={setOrderSummary} />}
        <BreadCumbs idPembayaran={activeLinkId} whatLink="methodPay" />
        <TimeLeft />
        <div
          className="rounded-[10px] w-full p-2 Mobile-M:p-3 py-3 Mobile-M:py-4 flex flex-col"
          style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.1)" }}
        >
          <h1 className="text-sm Mobile-M:text-lg font-bold border-b border-[#DADADA] mb-6 pb-2 Mobile-M:pb-3 Mobile-M:mb-7">
            Payment Method
          </h1>
          <div className="flex justify-between w-full cursor-pointer mb-5 Mobile-M:mb-6">
            <p className="text-[#360146] font-semibold text-[0.65rem] Mobile-M:text-xs">
              Select Payment Method
            </p>
            <IoIosArrowForward className="text-[#4D4D4D]" />
          </div>
          <div className="bg-[#EAF2E2] w-fit p-2 px-3 text-[#0B640D] rounded-full text-[0.6rem] Mobile-M:text-[0.7rem] font-semibold">
            Recommended
          </div>
          <div className="space-y-3 Mobile-M:space-y-4 my-2 Mobile-M:my-3 text-[0.65rem] mt-4 Mobile-M:mt-5 Mobile-M:text-xs">
            <div className="radio-field flex items-center gap-3 font-semibold">
              <input
                type="radio"
                name="Mandiri"
                id="Mandiri"
                className="w-3 h-3"
              />
              <label htmlFor="Mandiri">Mandiri</label>
            </div>
            <div className="radio-field flex items-center gap-3 font-semibold">
              <input type="radio" name="BCA" id="BCA" className="w-3 h-3" />
              <label htmlFor="BCA">BCA</label>
            </div>
            <div className="radio-field flex items-center gap-3 font-semibold">
              <input type="radio" name="QRIS" id="QRIS" className="w-3 h-3" />
              <label htmlFor="QRIS">QRIS</label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#EEEEEE] h-3 Mobile-M:h-4"></div>
      <div className="w-full h-fit flex justify-center items-start flex-col py-6 Mobile-M:py-7 gap-3 Mobile-M:gap-4 px-2 Mobile-M:px-4 Mobile-L:px-6">
        <h1 className="text-sm Mobile-M:text-lg font-bold">Your Ticket</h1>
        <div
          className="rounded-[10px] w-full p-2 Mobile-M:p-3 py-3 Mobile-M:py-4 flex flex-col mb-14"
          style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.1)" }}
        >
          <div className="order-id bg-[#FBF6EC] text-[0.65rem] Mobile-M:text-xs text-[#D49600] rounded-full w-full text-center py-2 mb-5 Mobile-M:mb-6">
            Order ID: 1243776184
          </div>
          <CardMiniTicket setHandler={setOrderSummary} />
          <div className="mb-5 Mobile-M:mb-6 flex flex-col gap-3 py-3 border-b border-dashed border-[#DADADA] w-full text-[#A6A6A6]">
            <div
              className="rounded-lg p-2 flex justify-between items-center cursor-pointer border border-[#DADADA]"
              onClick={() => setPromo(true)}
            >
              <label
                htmlFor="promo"
                className="flex items-center gap-3 text-[0.65rem] Mobile-M:text-xs"
              >
                <IoPricetagOutline className="text-base rotate-[270deg]" />
                <p>See promos/vouchers</p>
              </label>
              <input
                type="radio"
                name="promo"
                id="promo"
                className="w-3 h-3 border-[#A6A6A6]"
              />
            </div>
            <div className="rounded-lg p-2 flex justify-between items-center cursor-pointer border border-[#DADADA]" onClick={() => setPricingDetails(true)}>
              <label
                htmlFor="promo"
                className="flex items-center gap-3 text-[0.65rem] Mobile-M:text-xs"
              >
                <BiCoin className="text-base rotate-[270deg]" />
                <p>Use 0 points</p>
              </label>
              <input
                type="radio"
                name="promo"
                id="promo"
                className="w-3 h-3 border-[#A6A6A6]"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-3">
            <div className="flex justify-between">
              <h1 className="text-xs Mobile-M:text-sm font-bold">
                Total Payment
              </h1>
              <div className="flex gap-2 items-center">
                <h1 className="text-sm Mobile-M:text-base font-bold text-primary">
                  IDR 1.999.000
                </h1>
                <IoIosArrowForward className="rotate-[270deg]" />
              </div>
            </div>
            <p className="text-[0.5rem] Mobile-M:text-[0.6rem] text-[#4D4D4D]">
              dengan melanjutkan proses pembayaran, kamu menyetujui{" "}
              <span className="text-primary">Syarat & Ketentuan</span> dan{" "}
              <span className="text-primary">Kebijakan Privasi</span>{" "}
              depublic.com
            </p>
          </div>
        </div>
      </div>
      <PurpleBtn
        textContent="Continue Payment"
        nextHandler={() =>
          router.push(
            `/package/detail-pembayaran/${activeLinkId}/select-method/payment`
          )
        }
      />
    </div>
  );
};

export default PaymentMethod;
