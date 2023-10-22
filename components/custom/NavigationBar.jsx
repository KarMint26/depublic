"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import ButtonDepublic from "./ButtonDepublic";

export default function NavigationBar() {
  const router = useRouter();

  return (
    <div className="navbar">
      <div className="pwa-component">
        <Image
          src="/assets/brand/depublic.png"
          width={60}
          height={60}
          alt="depublic icon"
          className="cursor-pointer Mobile-L:w-auto w-[50px]"
          onClick={() => router.push("/")}
        />
        <div className="right-side flex justify-center items-center gap-2">
          <ButtonDepublic displayText="Sign In" classBtn="btn-signin" routerPath="/sign-in" />
          <ButtonDepublic displayText="Sign Up" classBtn="btn-signup" routerPath="/sign-up" />
        </div>
      </div>
    </div>
  );
}
