// import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { AnimatedContainer } from "../components/Pure/AnimatedContainer";

// type TAuthComponent = {
//   children: ReactElement;
//   background: string;
// };

export const AuthPage = () => {
  return (
    <div className="color-bg-primary w-full h-screen relative">
      <AnimatedContainer />
      <div className="absolute top-0 bottom-0 left-0 right-0 flex-center ">
        {/* <div
          className={`w-[30rem] h-[30rem] rounded-md !bg-opacity-85 p-10 bg-slate-300 dark:bg-slate-900`}
        > */}
        {/* {children} */}
        <Outlet></Outlet>
        {/* </div> */}
      </div>
    </div>
  );
};
