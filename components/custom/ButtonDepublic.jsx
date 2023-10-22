"use client"

import { useRouter } from "next/navigation";

export default function ButtonDepublic({ displayText, classBtn, routerPath }) {
  const router = useRouter();

  const handleButtonClick = () => {
    if (displayText == "Download Aplikasi") {
      console.log("install")
    } else {
      router.push(routerPath);
    }
  };

  return (
    <>
      <div className={`btn ${classBtn}`} onClick={handleButtonClick}>
        {displayText}
      </div>
    </>
  );
}
