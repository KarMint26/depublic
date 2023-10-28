import { PiMapPin } from "react-icons/pi";

export default function HeadDetailEvent({ detailEventData }) {
  return (
    <>
      <div className="head-title flex justify-start items-center flex-col">
        <div className="head-card flex justify-start items-center self-start text-xs">
          <div className="country flex justify-center items-center gap-2 pr-3 border-r border-[#DADADA] text-[#4D4D4D]">
            <PiMapPin className="text-lg" />
            {detailEventData.city}
          </div>
          <div className="tgl text-primary pl-3">{detailEventData.tgl}</div>
        </div>
        <h1 className="text-lg Mobile-L:text-xl font-bold mt-4 self-start">
          {detailEventData.titleEvent}
        </h1>
      </div>
      <div className="short-desc-price flex justify-between items-center w-full my-4 pb-2 text-[#4D4D4D]">
        <p className="text-[0.6rem] Mobile-M:text-[0.65rem] Mobile-L:text-xs w-[70%]">
          Konser dan event yang ada merupakan yang terupdate dan anda dapat
          membeli tiketnya melalui layanan kami.
        </p>
        <div className="prices flex flex-col justify-start items-end gap-1 -translate-y-[0.2rem]">
          <p className="text-[0.65rem] Mobile-M:text-xs">Starting From</p>
          <h3 className="font-bold text-[0.65rem] Mobile-M:text-sm text-primary">
            {detailEventData.ticketPrice}
          </h3>
        </div>
      </div>
      <div className="highlight pb-4">
        <h1 className="font-bold text-sm Mobile-L:text-lg mb-3">Highlight</h1>
        <ul className="text-[#4D4D4D] text-[0.6rem] flex justify-center items-start gap-[0.15rem] flex-col">
          <li className="list-item pl-4 relative">
            <p className="before:w-1 before:h-1 before:left-0 before:rounded-full before:bg-[#4D4D4D] before:absolute before:top-[0.35rem]">
              {`Saksikan langsung penampilan memukau dari Maher Zain lewat tur
              perdana mereka, “2023 LE SSERAFIM TOUR 'FLAME RISES' IN JAKARTA”`}
            </p>
          </li>
          <li className="list-item pl-4 relative">
            <p className="before:w-1 before:h-1 before:left-0 before:rounded-full before:bg-[#4D4D4D] before:absolute before:top-[0.35rem]">
              Konser akan berlangsung pada tanggal 3 Oktober 2023 di JIEXPO Hall
              B3, Jakarta
            </p>
          </li>
          <li className="list-item pl-4 relative">
            <p className="before:w-1 before:h-1 before:left-0 before:rounded-full before:bg-[#4D4D4D] before:absolute before:top-[0.35rem]">
              Untuk cara penggunaan membership code saat periode presale, harap
              kunjungi laman ini
            </p>
          </li>
        </ul>
      </div>
      <div className="info-penting flex justify-center items-center flex-col gap-3 Mobile-L:rounded-xl rounded-lg w-full h-fit pt-5 pb-4 px-3 bg-[#FBF6EC] mb-7">
        <div className="head-info flex justify-between w-full items-center">
          <h3 className="font-bold text-sm">Info Penting</h3>
          <h3 className="text-xs font-medium text-[#805A00] cursor-pointer">
            See more
          </h3>
        </div>
        <ul className="text-[#4D4D4D] text-[0.6rem] flex justify-center items-start gap-[0.15rem] flex-col">
          <li className="list-item pl-4 relative">
            <p className="before:w-1 before:h-1 before:left-0 before:rounded-full before:bg-[#4D4D4D] before:absolute before:top-[0.35rem]">
              FEARNOT MEMBERSHIP PRESALE dimulai pada hari Kamis, 3 Agustus 2023
              pukul 12.00 - 22.00 WIB.
            </p>
          </li>
          <li className="list-item pl-4 relative">
            <p className="before:w-1 before:h-1 before:left-0 before:rounded-full before:bg-[#4D4D4D] before:absolute before:top-[0.35rem]">
              General Sales dimulai pada hari Jumat, 4 Agustus 2023 pukul 12.00
              WIB.
            </p>
          </li>
          <li className="list-item pl-4 relative">
            <p className="before:w-1 before:h-1 before:left-0 before:rounded-full before:bg-[#4D4D4D] before:absolute before:top-[0.35rem]">
              Untuk Presale, 1 (satu) akun hanya dapat membeli maks. 4 (empat)
              tiket.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
