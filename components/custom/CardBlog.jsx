"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

const CardWidth = ({ dataBlog }) => {
  const router = useRouter();

  return (
    <>
      <div
        key={dataBlog.id}
        className="card flex justify-center items-center flex-col gap-[1rem] bg-bg-primary p-3 rounded-[14px] Mobile-M:rounded-[16px] Mobile-L:rounded-[20px] w-[250px] h-fit cursor-pointer group" style={{ boxShadow: '0 0 12px rgba(0,0,0,0.1)' }}
        onClick={() => router.push(`/all-blogs/detail/${dataBlog.id}`)}
      >
        <div className="img-container rounded-[14px] Mobile-M:rounded-[16px] w-fit h-fit overflow-hidden">
          <Image
            src={dataBlog.imagePath}
            alt={dataBlog.alt}
            width={250}
            height={200}
            className="rounded-[14px] Mobile-M:rounded-[16px] group-hover:scale-125 transition duration-300"
            loading="eager"
          />
        </div>
        <div className="desc flex justify-start items-start flex-col gap-2">
          <p className="text-sm font-semibold text-primary">{dataBlog.tgl}</p>
          <h1 className="font-bold">{dataBlog.titleBlog}</h1>
          <div className="desc text-xs text-[#A6A6A6] -translate-y-1">{dataBlog.shortDesc}</div>
        </div>
      </div>
    </>
  );
};

export default CardWidth;
