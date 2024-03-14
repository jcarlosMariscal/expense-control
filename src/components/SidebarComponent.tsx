import { Button, DarkThemeToggle, Sidebar } from "flowbite-react";
import {
  BiBarChartSquare,
  BiCategory,
  BiChevronLeft,
  BiCog,
  BiCreditCardFront,
  BiLogOut,
  BiMoneyWithdraw,
} from "react-icons/bi";

export const SidebarComponent = () => {
  return (
    <Sidebar aria-label="Default sidebar example" className="relative h-screen">
      <div className="absolute-full color-bg">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={BiBarChartSquare}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiMoneyWithdraw}>
              Income
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiCreditCardFront} label="3">
              Expenses
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiCog}>
              Setting
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiCategory}>
              Categories
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiLogOut}>
              Log Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
        <div className="absolute right-[-1rem] top-10 flex flex-col gap-1">
          <DarkThemeToggle className="btn-control-sidebar btn-anim-opacity p-1" />
          <Button className="btn-control-sidebar btn-anim-opacity">
            <BiChevronLeft className="size-7" />
          </Button>
        </div>
      </div>
    </Sidebar>
  );
};
