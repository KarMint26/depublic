import BoxFeatures from "@/components/custom/BoxFeatures";
import ButtonDepublic from "@/components/custom/ButtonDepublic";
import Image from "next/image";
import { LuSearch } from "react-icons/lu";

export default function Hero() {
  return (
    <>
      <div className="hero relative">
        <Image
          className="absolute top-[3.5rem] Mobile-L:top-[5rem] scale-[0.85] Mobile-L:scale-100 -right-[1.3rem] Mobile-L:-right-[0.5rem]"
          src="/assets/decoration/union-yellow.png"
          alt="union-1"
          width={230}
          height={230}
        />
        <Image
          className="absolute top-[14.4rem] Mobile-L:top-[16.8rem] -right-[1rem]"
          src="/assets/decoration/union-violet.png"
          alt="union-2"
          width={130}
          height={130}
        />
        <div className="top-hero flex justify-start flex-col bg-landing-top w-full h-[425px] Mobile-L:w-pwa Mobile-L:h-[463px] pt-[6rem] Mobile-L:pt-[7rem] px-6">
          <div className="search-bar w-full text-[#A6A6A6] flex relative">
            <LuSearch className="absolute text-2xl top-[0.7rem] left-[1rem] z-10" />
            <input
              type="text"
              name="search field"
              className="border px-14 w-full h-[46px] bg-white/30 backdrop-blur-lg border-[#DADADA] rounded-[12px] text-black"
              placeholder="Search Activities"
            />
          </div>
          <div className="tagline my-10 flex justify-center items-start flex-col gap-5 relative z-10">
            <h1 className="text-xl Mobile-L:text-2xl font-semibold w-[240px] Mobile-L:w-[290px]">
              Solusi Terbaik Layanan Jual Beli Tiket Event dan Konser
            </h1>
            <ButtonDepublic
              displayText="Download Aplikasi"
              classBtn="btn-signup"
              routerPath="/"
            />
          </div>
        </div>
        <div className="bot-hero w-full h-[80px]"></div>
        <BoxFeatures />
      </div>
    </>
  );
}
