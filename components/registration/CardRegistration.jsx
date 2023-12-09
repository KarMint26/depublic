import Link from "next/link"

export default function CardRegistration({ imgNum }) {
  return (
    <div
      className="relative card-regis flex flex-col gap-3 px-3 pb-4 pt-6 text-white w-full rounded-[20px] overflow-hidden"
      style={{ boxShadow: "0 0 12px 0 rgba(0,0,0,0.1)" }}
    >
      <div
        className="card-regis::before"
        style={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(/assets/regis/reg-${imgNum}.jpg)`,
          backgroundSize: "cover",
          zIndex: 1,
          filter: "brightness(70%)",
        }}
      ></div>
      <h1 className="z-10 text-base Mobile-M:text-lg Mobile-L:text-xl font-bold">
        Pengajuan Visa Haji & Umrah
      </h1>
      <p className="z-10 text-[0.65rem] Mobile-M:text-xs">
        Pengajuan visa haji dan umrah dilakukan <br /> pendaftaran dahulu.
      </p>
      <Link
        href="/registration/register-form"
        className="z-10 self-start bg-primary px-6 py-2 text-white text-xs Mobile-M:text-sm rounded-[12px] mt-4"
      >
        Register
      </Link>
    </div>
  );
}
