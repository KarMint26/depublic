import NavigationBar from "@/components/custom/NavigationBar";
import FormCustom from "../custom/FormCustom";

const dataForm = {
  titleForm: "Sign Up",
  taglineForm: "Register for the better experience",
  whatForm: "SignUp",
  textBtn: "Create Account",
  botText: "Have an Account?",
  linkPage: "Login",
  path: "/sign-in",
};

const SignUpForm = () => {
  return (
    <>
      <div className="homepage-container relative">
        <NavigationBar whatPage="signUp" />
        <FormCustom dataForm={dataForm} />
      </div>
    </>
  );
};

export default SignUpForm;
