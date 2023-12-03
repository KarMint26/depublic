import { getTimeLeft } from "@/context/TimeContext";
import React from "react";

export default function TimeLeft() {
  const { timeLeft } = getTimeLeft();
  const [minutes, setMinutes] = React.useState(Math.floor(timeLeft / 60));
  const [seconds, setSeconds] = React.useState(timeLeft % 60);

  React.useEffect(() => {
    setMinutes(Math.floor(timeLeft / 60));
    setSeconds(timeLeft % 60);
  }, [timeLeft]);

  return (
    <div
      className="complete-payment rounded-[10px] w-full p-2 Mobile-M:p-3 flex justify-between items-center"
      style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.1)" }}
    >
      <h1 className="text-xs Mobile-M:text-sm font-bold">
        Complete payment in
      </h1>
      <div className="px-4 py-2 Mobile-M:text-base text-xs text-[#4D4D4D] font-medium bg-[#FBF6EC] rounded-[7px]">
        00 : {minutes.toString().padStart(2, "0")} :{" "}
        {seconds.toString().padStart(2, "0")}
      </div>
    </div>
  );
}
