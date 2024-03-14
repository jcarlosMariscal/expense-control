import { useState } from "react";
import { SidebarComponent } from "../components/SidebarComponent";
import { HeaderComponent } from "../components/HeaderComponent";

export const HomePage = () => {
  const [smallSidebar, setSmallSidebar] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);
  const changeSidebar = () => setSmallSidebar(!smallSidebar);
  const toggleMenu = () => setMenuMobile(!menuMobile);
  const smallSidebarCSS = smallSidebar ? "w-80 md:w-[4.5rem]" : "w-80";
  const menuMobileCSS = menuMobile ? "translate-x-[0]" : "translate-x-[-110%]";
  return (
    <>
      <div className="flex">
        <div className={`hidden md:block ${smallSidebarCSS} transition-150`}>
          <SidebarComponent
            handleClick={changeSidebar}
            smallSidebar={smallSidebar}
            closeMenu={toggleMenu}
          />
        </div>
        <div className="content-main">
          <HeaderComponent toggleMenu={toggleMenu} />
        </div>
      </div>
      <div className={`menu-mobile ${menuMobileCSS} transition-150`}>
        <SidebarComponent
          handleClick={changeSidebar}
          smallSidebar={smallSidebar}
          mobile={true}
          closeMenu={toggleMenu}
        />
      </div>
    </>
  );
};
// 50
