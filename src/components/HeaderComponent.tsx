import { Avatar, Button, Dropdown } from "flowbite-react";
import { BiChevronDown, BiMenu } from "react-icons/bi";

type THeaderComponent = {
  toggleMenu: () => void;
};

export const HeaderComponent = ({ toggleMenu }: THeaderComponent) => {
  return (
    <div className="color-bg p-3 flex justify-between">
      <Button
        size="xs"
        className="btn-hamburguer btn-anim-opacity"
        onClick={toggleMenu}
      >
        <BiMenu size="30" />
      </Button>
      <div className="flex justify-end h-full w-full first:!bg-green-500">
        <Dropdown
          label=""
          dismissOnClick={true}
          renderTrigger={() => (
            <div className="flex color-text items-center gap-1 cursor-pointer">
              <span>
                <Avatar
                  img="https://www.flowbite-react.com/images/people/profile-picture-5.jpg"
                  rounded
                  className="border-2 p-[.2rem] border-violet-400 rounded-full"
                  size="sm"
                />
              </span>
              <span className="ml-1">User</span>
              <span className="text-xl">
                <BiChevronDown />
              </span>
            </div>
          )}
        >
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
};
