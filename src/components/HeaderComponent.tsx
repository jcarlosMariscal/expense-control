import { Avatar, Button, Dropdown } from "flowbite-react";
import { BiChevronDown, BiPlus } from "react-icons/bi";
import { MenuButton } from "./Pure/MenuButton";

type THeaderComponent = {
  toggleMenu: () => void;
};

const image =
  "https://www.flowbite-react.com/images/people/profile-picture-5.jpg";
export const HeaderComponent = ({ toggleMenu }: THeaderComponent) => {
  return (
    <div className="header">
      <div className="flex items-center">
        <MenuButton handleClick={toggleMenu} />
        <div className="">
          <Button
            size="xs"
            className="size-10 ssm:size-auto !flex-center"
            // color="purple"
            gradientMonochrome="purple"
            pill
          >
            <BiPlus className="size-6" />
            <span className="hidden ssm:block ml-2 text-sm">New</span>
          </Button>
        </div>
      </div>
      <Dropdown
        label=""
        dismissOnClick={true}
        renderTrigger={() => (
          <div className="avatar-dropdown">
            <Avatar img={image} rounded className="img-avatar" size="sm" />
            <span className="hidden ssm:block ml-1">User</span>
            <span className="text-xl">
              <BiChevronDown />
            </span>
          </div>
        )}
      >
        <Dropdown.Item>Dashboard</Dropdown.Item>
      </Dropdown>
    </div>
  );
};
