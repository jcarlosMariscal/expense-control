import { Button, Sidebar } from "flowbite-react";
import {
  BiBarChartSquare,
  BiCategory,
  BiCog,
  BiCreditCardFront,
  BiLogOut,
  BiMenu,
  BiMoneyWithdraw,
} from "react-icons/bi";
import { LogoComponent } from "./LogoComponent";
import { SidebarButtons } from "./SidebarButtons";

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
    <Sidebar
      aria-label="Default sidebar example"
      className="relative h-screen w-full"
    >
      <div className="absolute-full color-bg w-full">
        <div className="md:hidden flex justify-end">
          <Button
            size="xs"
            className="btn-hamburguer btn-anim-opacity"
            onClick={closeMenu}
          >
            <BiMenu size="30" />
          </Button>
        </div>
        <LogoComponent />
        <Sidebar.Items className="fixed top-[9rem] w-full">
          <Sidebar.ItemGroup>
            {navigation.map((nav, index) => (
              <Sidebar.Item
                key={index}
                href={nav.to}
                className="py-4 rounded-none"
              >
                <div className="flex items-center w-full">
                  <span className="text-2xl font-thin mr-6">
                    {<nav.icon />}
                  </span>
                  <span>{nav.title}</span>
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
