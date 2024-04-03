import { NavLink, useNavigate } from "react-router-dom";
// import { BgComponent } from "./BgComponent";
import { SignInForm } from "./SignInForm";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

export const SignIn = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user]);
  return (
    <div className={`auth-container bg-blue-400 dark:bg-blue-950`}>
      <div className="text-center mb-4">
        <span className="text-xl color-text">Sign In</span>
      </div>
      <SignInForm />
      <span className="color-text block text-center my-4">
        Don't have an account?{" "}
        <NavLink to="/auth/register" className="font-medium">
          Signup now
        </NavLink>
      </span>
    </div>
  );
};
