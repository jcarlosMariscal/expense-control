import { Button, DarkThemeToggle } from "flowbite-react";
import { BiChevronLeft } from "react-icons/bi";

type TSidebarButtons = {
  handleClick: () => void;
  smallSidebar: boolean;
};

export const SidebarButtons = ({
  handleClick,
  smallSidebar,
}: TSidebarButtons) => {
  const rotate = smallSidebar ? "rotate-180" : "";
  return (
    <div className="sidebar-btns">
      <DarkThemeToggle className="btn-theme" />
      <div className="hidden lg:block">
        <Button
          className="btn-control-sidebar btn-anim-opacity"
          onClick={handleClick}
        >
          <BiChevronLeft className={`size-6 ${rotate} transition-150`} />
        </Button>
      </div>
    </div>
  );
};
