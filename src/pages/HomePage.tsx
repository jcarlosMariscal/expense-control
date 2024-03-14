import { useState } from "react";
import { SidebarComponent } from "../components/SidebarComponent";
import { Button } from "flowbite-react";
import { BiMenu } from "react-icons/bi";

export const HomePage = () => {
  const [smallSidebar, setSmallSidebar] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);
  const changeSidebar = () => setSmallSidebar(!smallSidebar);
  const toggleMenu = () => setMenuMobile(!menuMobile);
  return (
    <>
      <div className="flex">
        <div
          className={`hidden md:block ${
            smallSidebar ? "w-80 md:w-[4.5rem]" : "w-80"
          } transition-all delay-150`}
        >
          <SidebarComponent
            handleClick={changeSidebar}
            smallSidebar={smallSidebar}
            closeMenu={toggleMenu}
          />
        </div>
        <div className="w-full h-screen bg-slate-100 dark:bg-slate-900 z-10">
          <Button
            size="xs"
            className="btn-hamburguer btn-anim-opacity"
            onClick={toggleMenu}
          >
            <BiMenu size="30" />
          </Button>
        </div>
      </div>
      <div
        className={`block md:hidden w-full ssm:w-60 absolute top-0 z-20 ${
          menuMobile ? "translate-x-[0]" : "translate-x-[-110%]"
        } transition-transform`}
      >
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
