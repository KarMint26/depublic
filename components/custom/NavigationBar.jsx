"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ButtonDepublic from "./ButtonDepublic";
import { TfiEmail } from "react-icons/tfi";
import { LuUserCircle2, LuLogOut } from "react-icons/lu";
import { UserAuth } from "@/context/AuthContext";

export default function NavigationBar({ whatPage }) {
  const router = useRouter();
  const { user, logOut } = UserAuth();
  const [modal, setModal] = useState(false);

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="navbar">
      {whatPage === "signIn" || whatPage === "signUp" ? (
        <>
          <div className="w-pwa px-4 Mobile-L:px-6 flex justify-start items-center">
            <Image
              src="/assets/brand/depublic.png"
              width={60}
              height={60}
              alt="depublic icon"
              className="cursor-pointer Mobile-L:w-auto w-[50px]"
              onClick={() => router.push("/")}
              priority
            />
          </div>
        </>
      ) : (
        <>
          {!user || user === null || user === "" ? (
            <>
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
                  <ButtonDepublic
                    displayText="Sign In"
                    classBtn="btn-signin"
                    routerPath="/sign-in"
                  />
                  <ButtonDepublic
                    displayText="Sign Up"
                    classBtn="btn-signup"
                    routerPath="/sign-up"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="pwa-component relative">
                <Image
                  src="/assets/brand/depublic.png"
                  width={60}
                  height={60}
                  alt="depublic icon"
                  className="cursor-pointer Mobile-L:w-auto w-[50px]"
                  onClick={() => router.push("/")}
                />
                <div className="right-side flex justify-center items-center gap-2">
                  <div className="box-user bg-primary text-white cursor-pointer rounded-full w-[40px] Mobile-M:w-[45px] h-[40px] Mobile-M:h-[45px] flex justify-center items-center text-center p-2">
                    <TfiEmail className="Mobile-M:text-xl text-lg" />
                  </div>
                  <div
                    className="box-user bg-primary text-white cursor-pointer rounded-full w-[40px] Mobile-M:w-[45px] h-[40px] Mobile-M:h-[45px] flex justify-center items-center text-center p-2"
                    onClick={() => setModal((modal) => !modal)}
                  >
                    <LuUserCircle2 className="Mobile-M:text-xl text-lg" />
                  </div>
                </div>
                {modal && (
                  <>
                    <div className="modal-box w-[150px] h-fit p-3 rounded-xl absolute right-5 top-[5rem] Mobile-M:top-[5.5rem] Mobile-L:top-[6rem] bg-primary text-white z-20">
                      <h3 className="font-bold">
                        Welcome,{" "}
                        {user !== null
                          ? user.displayName !== null
                            ? user.displayName
                            : user.email.slice(0, user.email.length - 10)
                          : "User"}
                      </h3>
                      <p className="text-[0.9rem] border-b border-white/80 py-1 pb-2">
                        Have fun explore!
                      </p>
                      <div
                        className="btn-logout flex px-2 cursor-pointer font-semibold justify-start items-center gap-3 py-2"
                        onClick={() => handleSignOut()}
                      >
                        <LuLogOut className="text-lg" />
                        <p className="text-sm">Log Out</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
