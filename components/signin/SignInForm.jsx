import NavigationBar from "@/components/custom/NavigationBar";
import FormCustom from "../custom/FormCustom";

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
  return (
    <>
      <div className="homepage-container relative">
        <NavigationBar whatPage="signIn" />
        <FormCustom dataForm={dataForm} />
      </div>
    </>
  );
};

export default SignInForm;
