import { Sidebar } from "flowbite-react";
import {
  BiBarChartSquare,
  BiCategory,
  BiCog,
  BiCreditCardFront,
  BiLogOut,
  BiMoneyWithdraw,
} from "react-icons/bi";
import { LogoComponent } from "./LogoComponent";
import { SidebarButtons } from "./SidebarButtons";
import { MenuButton } from "../Pure/MenuButton";
import { NavLink } from "react-router-dom";
import { BackgroundGradient } from "../Pure/BackgroundGradient";

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
  const navigation = [
    { title: "Dashboard", to: "/", icon: BiBarChartSquare },
    { title: "Income", to: "/income", icon: BiMoneyWithdraw },
    { title: "Expenses", to: "/expenses", icon: BiCreditCardFront },
    { title: "Setting", to: "/setting", icon: BiCog },
    { title: "Categories", to: "/categories", icon: BiCategory },
    { title: "Log Out", to: "/log-out", icon: BiLogOut },
  ];
  return (
    <Sidebar aria-label="Expense Control Sidebar" className="sidebar h-screen">
      <div className="sidebar-container">
        <div className="lg:hidden flex justify-end mt-4">
          <MenuButton handleClick={toggleMenu} active={true} />
        </div>
        <BackgroundGradient
          position="top-[6rem] right-[-8rem]"
          size="w-[12rem] h-[18rem] hidden lg:block"
          bg="gradient-sidebar"
          blur="blur-3xl"
        />
        <LogoComponent />
        <Sidebar.Items className="sidebar-items">
          <Sidebar.ItemGroup>
            {navigation.map((nav, index) => (
              <NavLink key={index} to={nav.to}>
                <Sidebar.Item className="sidebar-item">
                  <div className="flex items-center">
                    <span className="sidebar-item-icon">{<nav.icon />}</span>
                    <span>{nav.title}</span>
                  </div>
                </Sidebar.Item>
              </NavLink>
            ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </div>
      <SidebarButtons handleClick={handleClick} smallSidebar={smallSidebar} />
    </Sidebar>
  );
};
