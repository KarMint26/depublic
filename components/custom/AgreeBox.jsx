import Image from "next/image";

const AgreeBox = ({ btnPayNow, btnLater }) => {
  return (
    <div className="splash-screen bg-white/30 backdrop-blur-sm absolute top-0 w-full h-full z-[99] flex justify-center items-center">
      <div
        className="auth-box flex justify-center items-center flex-col gap-5 w-[90%] py-5 bg-white rounded-lg Mobile-M:rounded-xl -translate-y-[9rem]"
        style={{ boxShadow: "0 0 8px rgba(0,0,0,0.1)" }}
      >
        <div className="head-box flex justify-center items-center flex-col gap-4">
          <Image
            src="/assets/svg/Loading-book.svg"
            width={80}
            height={80}
            alt="search-icon"
          />
          <div className="search-text flex justify-center items-center flex-col gap-1">
            <h3 className="font-bold text-xs Mobile-M:text-sm">
              Ticket Booked Successful
            </h3>
            <p className="text-[#4D4D4D] text-[0.65rem] Mobile-M:text-xs">
              You have 30 Minutes to pay the ticket!
            </p>
          </div>
        </div>
        <div className="auth-login flex justify-center items-center gap-3">
          <div className={`btn btn-signin`} onClick={btnLater}>
            Later
          </div>
          <div className={`btn btn-signup`} onClick={btnPayNow}>
            Pay Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgreeBox;
