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
import { MenuButton } from "./Pure/MenuButton";

type TSidebarComponent = {
  handleClick: () => void;
  smallSidebar: boolean;
  mobile?: boolean;
  closeMenu: () => void;
};
export const SidebarComponent = ({
  handleClick,
  smallSidebar,
  closeMenu,
}: TSidebarComponent) => {
  const navigation = [
    { title: "Dashboard", to: "/", icon: BiBarChartSquare },
    { title: "Income", to: "/", icon: BiMoneyWithdraw },
    { title: "Expenses", to: "/", icon: BiCreditCardFront },
    { title: "Setting", to: "/", icon: BiCog },
    { title: "Categories", to: "/", icon: BiCategory },
    { title: "Log Out", to: "/", icon: BiLogOut },
  ];
  return (
    <Sidebar aria-label="Expense Control Sidebar" className="sidebar">
      <div className="sidebar-container">
        <div className="md:hidden flex justify-end">
          <MenuButton handleClick={closeMenu} active={true} />
        </div>
        <div className="sidebar-gradient"></div>

        <LogoComponent />
        <Sidebar.Items className="sidebar-items">
          <Sidebar.ItemGroup>
            {navigation.map((nav, index) => (
              <Sidebar.Item key={index} href={nav.to} className="sidebar-item">
                <div className="flex items-center">
                  <span className="sidebar-item-icon">{<nav.icon />}</span>
                  <span className="font-thin">{nav.title}</span>
                </div>
              </Sidebar.Item>
            ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </div>
      <SidebarButtons handleClick={handleClick} smallSidebar={smallSidebar} />
    </Sidebar>
  );
};
