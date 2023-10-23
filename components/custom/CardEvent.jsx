import { PiMapPin } from "react-icons/pi";
import Image from "next/image";

const CardEvent = ({ dataEvent }) => {
  return (
    <>
      <div
        key={dataEvent.id}
        className="card flex justify-center items-center flex-col gap-[1rem] bg-bg-primary shadow-card-shadow p-3 rounded-[14px] Mobile-M:rounded-[16px] Mobile-L:rounded-[20px] w-[250px] h-fit cursor-pointer group"
      >
        <div className="img-container rounded-[14px] Mobile-M:rounded-[16px] w-fit h-fit overflow-hidden">
          <Image
            src={dataEvent.imagePath}
            alt={dataEvent.alt}
            width={250}
            height={200}
            className="rounded-[14px] Mobile-M:rounded-[16px] group-hover:scale-125 transition duration-300"
            loading="eager"
          />
        </div>
        <div className="desc flex justify-start items-start flex-col gap-2">
          <div className="head-card flex justify-start items-center text-xs">
            <div className="country flex justify-center items-center gap-2 pr-3 border-r border-[#DADADA] text-[#4D4D4D]">
              <PiMapPin className="text-lg" />
              {dataEvent.city}
            </div>
            <div className="tgl text-primary pl-3 text-[0.7rem]">
              {dataEvent.tgl}
            </div>
          </div>
          <h1 className="font-bold text-lg">{dataEvent.titleEvent}</h1>
          <p className="text-[#A6A6A6] text-xs">{dataEvent.shortDesc}</p>
        </div>
        <h1 className="price font-normal self-start text-sm">
          <span className="text-primary font-bold text-lg">
            {dataEvent.ticketPrice}
          </span>
          / 1 Person
        </h1>
        <div className="btn-card flex justify-center items-center py-2 px-3 w-full bg-[#EAF2E2] text-[#0B640D] rounded-[12px] cursor-pointer text-sm">
          Tersedia
        </div>
      </div>
    </>
  );
};

export default CardEvent;
