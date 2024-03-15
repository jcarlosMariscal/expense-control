import { useState } from "react";
import { HeaderComponent } from "../components/HeaderComponent";
import { Outlet } from "react-router-dom";
import { SidebarComponent } from "../components/SidebarComponents/SidebarComponent";

export const HomePage = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  const toggleMenu = () => setMenuMobile(!menuMobile);
  return (
    <>
      <div className="flex font-inter">
        <SidebarComponent menuMobile={menuMobile} toggleMenu={toggleMenu} />
        <div className="content-main">
          <HeaderComponent toggleMenu={toggleMenu} />
          <div className="page-container color-text">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
