import { Sidebar } from "flowbite-react";
import {
  BiBarChartSquare,
  BiCategory,
  BiChevronLeft,
  BiCog,
  BiCreditCardFront,
  BiLogOut,
  BiMoneyWithdraw,
} from "react-icons/bi";
import { LogoComponent } from "./LogoComponent";
import { MenuButton } from "../Pure/MenuButton";
import { useNavigate } from "react-router-dom";

type TSidebarComponent = {
  handleClick: () => void;
  smallSidebar: boolean;
  mobile?: boolean;
  toggleMenu: () => void;
};
export const SidebarContent = ({
  handleClick,
  smallSidebar,
  toggleMenu,
}: TSidebarComponent) => {
  const navigate = useNavigate();
  const navigation = [
    { title: "Dashboard", to: "/dashboard", icon: BiBarChartSquare },
    { title: "Income", to: "/income", icon: BiMoneyWithdraw },
    { title: "Expenses", to: "/expenses", icon: BiCreditCardFront },
    { title: "Setting", to: "/setting", icon: BiCog },
    { title: "Categories", to: "/categories", icon: BiCategory },
    { title: "Log Out", to: "/log-out", icon: BiLogOut },
  ];
  const rotate = smallSidebar ? "rotate-180" : "";
  const redirectLink = (link: string) => {
    navigate(link);
  };
  return (
    <>
      <Sidebar
        aria-label="Expense Control Sidebar"
        className="sidebar h-screen"
      >
        <div className="sidebar-container">
          <div className="lg:hidden flex justify-end mt-4">
            <MenuButton handleClick={toggleMenu} active={true} />
          </div>
          <LogoComponent />
          <Sidebar.Items className="sidebar-items">
            <Sidebar.ItemGroup>
              {navigation.map((nav, index) => (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => redirectLink(nav.to)}
                >
                  <Sidebar.Item className="sidebar-item">
                    <div className="flex items-center">
                      <span className="sidebar-item-icon">{<nav.icon />}</span>
                      <span className="text-md 2xl:text-2xl">{nav.title}</span>
                    </div>
                  </Sidebar.Item>
                </div>
              ))}
              <div onClick={handleClick} className="cursor-pointer">
                <Sidebar.Item className="sidebar-item">
                  <div className="flex items-center">
                    <span className="sidebar-item-icon">
                      <BiChevronLeft className={`${rotate} transition-150`} />
                    </span>
                    <span className="text-md 2xl:text-2xl">
                      Expand/Contract
                    </span>
                  </div>
                </Sidebar.Item>
              </div>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </div>
      </Sidebar>
    </>
  );
};
