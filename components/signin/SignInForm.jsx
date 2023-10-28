"use client"

import NavigationBar from "@/components/custom/NavigationBar";
import FormCustom from "../custom/FormCustom";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const dataForm = {
  titleForm: "Sign In",
  taglineForm: "Welcome back!",
  whatForm: "SignIn",
  textBtn: "Sign In",
  botText: "Don't have an Account?",
  linkPage: "Register",
  path: "/sign-up",
};

const SignInForm = () => {
  const notify = (msg) => {
    if(msg === "username atau password salah"){
      toast.error(msg, {
        position: toast.POSITION.TOP_RIGHT
      });
    } else {
      setTimeout(() => {
        toast.success(msg, {
          position: toast.POSITION.TOP_RIGHT
        });
      }, 2000)
    }
  };

  return (
    <>
      <div className="homepage-container relative">
        <NavigationBar whatPage="signIn" />
        <FormCustom dataForm={dataForm} errorHandle={notify} />
        <ToastContainer />
      </div>
    </>
  );
};

export default SignInForm;
