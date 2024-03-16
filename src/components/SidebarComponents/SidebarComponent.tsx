import { useState } from "react";
import { SidebarContent } from "./SidebarContent";
// import { SidebarButtons } from "./SidebarButtons";
type TSidebarComponent = {
  menuMobile: boolean;
  toggleMenu: () => void;
};
export const SidebarComponent = ({
  toggleMenu,
  menuMobile,
}: TSidebarComponent) => {
  const [smallSidebar, setSmallSidebar] = useState(false);
  const changeSidebar = () => setSmallSidebar(!smallSidebar);
  const smallSidebarCSS = smallSidebar
    ? "w-80 md:w-[4.5rem] 2xl:w-[7rem]"
    : "w-80 2xl:w-[30rem]";
  const menuMobileCSS = menuMobile ? "translate-x-[0]" : "translate-x-[-110%]";
  return (
    <>
      <div
        className={`hidden lg:block ${smallSidebarCSS} transition-150 !bg-yellow-400`}
      >
        <SidebarContent
          handleClick={changeSidebar}
          smallSidebar={smallSidebar}
          toggleMenu={toggleMenu}
        />
        {/* <SidebarButtons
          handleClick={changeSidebar}
          smallSidebar={smallSidebar}
        /> */}
      </div>
      <div className={`menu-mobile ${menuMobileCSS} transition-150`}>
        <SidebarContent
          handleClick={changeSidebar}
          smallSidebar={smallSidebar}
          mobile={true}
          toggleMenu={toggleMenu}
        />
      </div>
    </>
  );
};
