import Image from "next/image";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="head-footer">
          <div className="footer-brand">
            <Image
              src="/assets/brand/footer-brand.png"
              alt="footer-brand"
              width={150}
              height={50}
              className="footer-image"
            />
            <p className="tagline-footer">{"Berikan Layanan Terbaik"}</p>
            <div className="social-media">
              <div className="social-media-box">
                <BsInstagram className="text-sm Mobile-M:text-base leading-[1.5rem] Mobile-M:leading-[2rem]" />
              </div>
              <div className="social-media-box">
                <BsFacebook className="text-sm Mobile-M:text-base leading-[1.5rem] Mobile-M:leading-[2rem]" />
              </div>
              <div className="social-media-box">
                <FaSquareXTwitter className="text-sm Mobile-M:text-base leading-[1.5rem Mobile-M:leading-[2rem]" />
              </div>
            </div>
          </div>
          <div className="footer-list-desc">
            <div className="box-desc flex flex-col justify-center items-center gap-3">
              <p className="title font-bold mb-1 text-[0.6rem] Mobile-M:text-xs self-start">
                Fitur Kami
              </p>
              <p className="self-start">Booking Tiket</p>
              <p className="self-start">Cari Event</p>
              <p className="self-start">Konten Blog</p>
              <p className="self-start">Pengajuan Visa</p>
            </div>
            <div className="box-desc flex flex-col justify-center items-center gap-3">
              <p className="title font-bold mb-1 text-[0.6rem] Mobile-M:text-xs self-start">
                Keunggulan
              </p>
              <p className="self-start">PWA Support</p>
              <p className="self-start">Modern UI</p>
              <p className="self-start">Responsive UI</p>
              <p className="self-start">Customer Service</p>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          copyright 2023 Depublic. All Rights Reserved
        </div>
      </div>
    </>
  );
}
