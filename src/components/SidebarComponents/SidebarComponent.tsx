import { useState } from "react";
import { SidebarContent } from "./SidebarContent";
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
  const smallSidebarCSS = smallSidebar ? "w-80 md:w-[4.5rem]" : "w-80";
  const menuMobileCSS = menuMobile ? "translate-x-[0]" : "translate-x-[-110%]";
  return (
    <>
      <div className={`hidden lg:block ${smallSidebarCSS} transition-150`}>
        <SidebarContent
          handleClick={changeSidebar}
          smallSidebar={smallSidebar}
          toggleMenu={toggleMenu}
        />
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
