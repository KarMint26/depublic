import Image from "next/image";

export default function LoadingForm() {
  return (
    <>
      <div className="splash-screen bg-white/30 backdrop-blur-sm absolute top-0 w-full h-full z-[99] flex justify-center items-center">
        <div
          className="flex justify-center items-center flex-col bg-white w-[90%] rounded-2xl gap-5 p-5"
          style={{ boxShadow: "0 0 12px rgba(0,0,0,0.1)" }}
        >
          <Image
            src="/assets/decoration/spin.gif"
            alt="splash"
            width={100}
            height={100}
          />
          <div className="splash-desc text-sm flex justify-center items-center flex-col gap-1">
            <p className="font-bold">Being Processed</p>
            <p className="text-xs text-[#4D4D4D]">Wait a moment...</p>
          </div>
        </div>
      </div>
    </>
  );
}
