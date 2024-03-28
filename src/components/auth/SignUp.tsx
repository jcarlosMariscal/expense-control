import { NavLink } from "react-router-dom";
import { BgComponent } from "./BgComponent";
import { SignUpForm } from "./SignUpForm";

export const SignUp = () => {
  return (
    <BgComponent background="bg-slate-300 dark:bg-slate-900">
      <>
        <div className="text-center mb-4">
          <span className="text-xl color-text">Sign Up</span>
        </div>
        <SignUpForm />
        <span className="color-text block text-center my-4">
          Already have an account?{" "}
          <NavLink to="/login" className="font-medium">
            Login now
          </NavLink>
        </span>
      </>
    </BgComponent>
  );
};
