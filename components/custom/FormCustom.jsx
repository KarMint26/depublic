"use client";

import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsApple, BsFacebook } from "react-icons/bs";
import { PiEyeClosed, PiEye } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import CardProvider from "./CardProvider";
import Image from "next/image";
import LoadingForm from "./LoadingForm";
import { UserAuth } from "@/context/AuthContext";

export default function FormCustom({ dataForm, errorHandle }) {
  const router = useRouter();
  const { user, googleSignIn, signIn, signUp, error } = UserAuth();

  // state handle sign up page
  const [signUpForm, setSignUpForm] = useState({
    username: "",
    password: "",
    phoneNumber: "",
  });

  // state handle sign in page
  const [signInForm, setSignInForm] = useState({
    username: "",
    password: "",
  });

  // State handle hidden password
  const [eyeClosed, setEyeClosed] = useState(true);

  // State handle loading
  const [loading, setLoading] = useState(false);

  // function to handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (dataForm.whatForm === "SignIn") {
      try {
        await signIn(signInForm.username, signInForm.password);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      try {
        await signUp(signUpForm.username, signUpForm.password);
        setLoading(true);
        setTimeout(() => {
          router.push("/sign-in");
        }, 3000);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  // function to handle input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let username = "";
    if (name === "username") {
      username = value;
      username += "@gmail.com";
    }
    dataForm.whatForm === "SignUp"
      ? setSignUpForm((prevState) => ({
          ...prevState,
          [name]: name === "username" ? username : value,
        }))
      : setSignInForm((prevState) => ({
          ...prevState,
          [name]: name === "username" ? username : value,
        }));
  };

  // Handle Google Login Provider
  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if(error){
      errorHandle(error);
    } else if(error === null && user !== null) {
      errorHandle("Yay!, Login Berhasil")
    }
    if (user !== null) {
      setLoading(true)
      setTimeout(() => {
        router.push("/");
        setLoading(false);
      }, 3000);
    }
  }, [user, error]);

  return (
    <>
      <div className="signup h-[880px] bg-white w-full">
        {loading && <LoadingForm whatType="formAuth" />}
        <div className="top-block w-full h-[70px] Mobile-L:h-[80px]"></div>
        <Image
          src="/assets/decoration/Union.png"
          width={83}
          height={83}
          alt="decoration"
          className="yellow-union"
        />
        <div className="violet-union"></div>
        <div className="head-signup relative z-20">
          <h1 className="text-[#000000] text-base Mobile-M:text-lg font-bold">
            {dataForm.titleForm}
          </h1>
          <AiOutlineClose
            onClick={() => router.push("/")}
            className="text-xl Mobile-M:text-2xl text-[#4D4D4D] cursor-pointer"
          />
        </div>
        <div className="form-field">
          <form
            onSubmit={handleSubmit}
            className="w-full flex justify-center items-center flex-col gap-5"
          >
            <h1 className="text-[#000000] text-[0.8rem] Mobile-M:text-[0.9rem] Mobile-L:text-base font-medium mb-2 self-start">
              {dataForm.taglineForm}
            </h1>
            <div className="input-field w-full relative h-fit">
              <input
                placeholder="Username"
                className="input-component"
                type="text"
                name="username"
                id="username"
                onChange={handleInputChange}
                value={
                  dataForm.whatForm === "SignUp"
                    ? signUpForm.username.slice(
                        0,
                        signUpForm.username.length - 10
                      )
                    : signInForm.username.slice(
                        0,
                        signInForm.username.length - 10
                      )
                }
                autoComplete="off"
                required
              />
            </div>
            {dataForm.whatForm === "SignUp" && (
              <>
                <div className="input-field w-full relative h-fit">
                  <input
                    placeholder="Phone Number"
                    className="input-component"
                    type="number"
                    name="phoneNumber"
                    id="phone-number"
                    onChange={handleInputChange}
                    value={signUpForm.phoneNumber}
                    autoComplete="off"
                    required
                  />
                </div>
              </>
            )}
            <div className="input-field w-full relative h-fit">
              <input
                placeholder="Password"
                className="input-component"
                type={`${eyeClosed ? "password" : "text"}`}
                name="password"
                id="password"
                onChange={handleInputChange}
                value={
                  dataForm.whatForm === "SignUp"
                    ? signUpForm.password
                    : signInForm.password
                }
                autoComplete="off"
                required
              />
              {eyeClosed ? (
                <>
                  <PiEyeClosed
                    className="text-xl absolute right-4 cursor-pointer bottom-[1.5rem] text-[#A6A6A6]"
                    onClick={() => setEyeClosed((eye) => !eye)}
                  />
                </>
              ) : (
                <>
                  <PiEye
                    className="text-xl absolute right-4 cursor-pointer bottom-[1.5rem] text-[#A6A6A6]"
                    onClick={() => setEyeClosed((eye) => !eye)}
                  />
                </>
              )}
              <p
                className={`text-red-500 text-xs translate-y-2 ${
                  (signInForm.password.length <= 6 &&
                    signInForm.password.length != 0) ||
                  (signUpForm.password.length <= 6 &&
                    signUpForm.password.length != 0)
                    ? "visible"
                    : "invisible"
                }`}
              >
                Password must be more than 6 characters
              </p>
            </div>
            {(signInForm.password.length > 6 &&
              signInForm.username.length > 10) ||
            (signUpForm.password.length > 6 &&
              signUpForm.username.length > 10 &&
              signUpForm.phoneNumber > 10) ? (
              <>
                <button type="submit" className="submit-btn">
                  {dataForm.textBtn}
                </button>
              </>
            ) : (
              <>
                <button type="submit" className="submit-btn-disabled" disabled>
                  {dataForm.textBtn}
                </button>
              </>
            )}
            <p className="text-[#A6A6A6] text-xs">
              {dataForm.botText}{" "}
              <Link href={dataForm.path} className="font-bold text-primary">
                {dataForm.linkPage}
              </Link>
            </p>
          </form>
        </div>
        <div className="provider-login">
          <p className="text-[#4D4D4D] text-sm">atau daftar dengan</p>
          <div className="provider-list flex justify-center items-center gap-7">
            <CardProvider
              iconProvider={
                <BsApple className="text-[2rem] Mobile-M:text-[2.6rem] leading-[70px]" />
              }
            />
            <CardProvider
              iconProvider={
                <FcGoogle className="text-[2rem] Mobile-M:text-[2.6rem] leading-[70px]" />
              }
              handleClick={handleGoogleLogin}
            />
            <CardProvider
              iconProvider={
                <BsFacebook className="text-[2rem] Mobile-M:text-[2.6rem] leading-[70px] text-blue-600" />
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
