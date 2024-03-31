import { NavLink } from "react-router-dom";
import { BgComponent } from "./BgComponent";
import { SignInForm } from "./SignInForm";

export const SignIn = () => {
  return (
    <BgComponent background="bg-slate-300 dark:bg-slate-900">
      <>
        <div className="text-center mb-4">
          <span className="text-xl color-text">Sign In</span>
        </div>
        <SignInForm />
        <span className="color-text block text-center my-4">
          Don't have an account?{" "}
          <NavLink to="/register" className="font-medium">
            Signup now
          </NavLink>
        </span>
      </>
    </BgComponent>
  );
};
