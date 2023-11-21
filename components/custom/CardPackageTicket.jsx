import Link from "next/link";

export default function CardPackageTicket({ detailEventData, num, packageInfo }) {
  return (
    <>
      <div
        className="box-package p-3 flex justify-center items-center flex-col w-full gap-2 rounded-lg bg-white"
        style={{ boxShadow: "0 0 8px rgba(0,0,0,0.1)" }}
      >
        <div className="head-package w-full flex justify-between items-center text-[0.65rem] Mobile-M:text-xs">
          <p className="font-bold">{packageInfo.namePackage}</p>
          <p className="font-bold">Detail</p>
        </div>
        <p className="w-full pb-2 border-b border-[#A6A6A6] text-[0.65rem] Mobile-M:text-xs text-[#4D4D4D]">
          {packageInfo.descPackage}
        </p>
        <div className="price-package flex justify-between items-center w-full">
          <h3 className="text-xs Mobile-M:text-sm font-bold text-primary">
            {detailEventData.ticketPrice}
          </h3>
          <Link
            href={`/package/detail-pembayaran/${num}`}
            className="btn-package flex justify-center items-center p-2 text-[0.65rem] Mobile-M:text-xs rounded-md cursor-pointer bg-primary text-[#EEEEEE]"
          >
            Select Package
          </Link>
        </div>
      </div>
    </>
  );
}
