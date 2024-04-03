import { useContext, useEffect, useState } from "react";
import { HeaderComponent } from "../components/HeaderComponent";
import { Outlet, useNavigate } from "react-router-dom";
import { SidebarComponent } from "../components/SidebarComponents/SidebarComponent";
import { AuthContext } from "../context/AuthContext";
// import { Spinner } from "flowbite-react";

export const HomePage = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  const toggleMenu = () => setMenuMobile(!menuMobile);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log(user);

    if (!user) navigate("/auth/login");
  }, []);
  return (
    <>
      {user ? (
        <div className="flex">
          <SidebarComponent menuMobile={menuMobile} toggleMenu={toggleMenu} />
          <div className="content-main" id="contentMain">
            <HeaderComponent toggleMenu={toggleMenu} />
            <div className="page-container color-text">
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <div className="color-bg-primary h-screen flex-center"></div>
      )}
    </>
  );
};
