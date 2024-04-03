import { NavLink } from "react-router-dom";
import { SignUpForm } from "./SignUpForm";

export const SignUp = () => {
  return (
    <div className={`auth-container bg-green-400 dark:bg-green-900`}>
      <div className="text-center mb-4">
        <span className="text-xl color-text">Sign Up</span>
      </div>
      <SignUpForm />
      <span className="color-text block text-center my-4">
        Already have an account?{" "}
        <NavLink to="/auth/login" className="font-medium">
          Login now
        </NavLink>
      </span>
    </div>
  );
};
