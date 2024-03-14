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
  return (
    <div className="absolute right-[-.8rem] top-[7rem] lg:top-20 flex flex-col gap-2 z-50">
      <DarkThemeToggle className="btn-control-sidebar btn-anim-opacity p-[.1rem]" />
      <div className="hidden lg:block">
        <Button
          className="btn-control-sidebar btn-anim-opacity"
          onClick={handleClick}
        >
          <BiChevronLeft
            className={`size-6 ${
              smallSidebar ? "rotate-180" : ""
            } transition-transform delay-75`}
          />
        </Button>
      </div>
    </div>
  );
};
