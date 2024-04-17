import { Avatar, Button, DarkThemeToggle, Dropdown } from "flowbite-react";
import { BiChevronDown, BiPlus } from "react-icons/bi";
import { MenuButton } from "./Pure/MenuButton";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

type THeaderComponent = {
  toggleMenu: () => void;
};

export const HeaderComponent = ({ toggleMenu }: THeaderComponent) => {
  const navigate = useNavigate();
  const { SignOut, userProfile } = useContext(AuthContext);
  const { modalAdd } = useContext(AppContext)
  const {toggleModalAdd, changeTitleModalAdd} = modalAdd

  const out = async () => {
    const { success } = await SignOut();
    if (success) navigate("/auth/login");
  };
  const addNewIncome = () => {
    toggleModalAdd(true);
    changeTitleModalAdd("Add new income")
  };
  return (
    <div className="header">
      <div className="flex items-center">
        <MenuButton handleClick={toggleMenu} />
        <Dropdown label="" dismissOnClick={false} renderTrigger={
          () => <Button size="xs" className="size-10 ssm:size-auto !flex-center" color="teal" pill>
            <span className="hidden ssm:block mr-2 text-sm">New</span>
            <BiPlus className="size-5" />
          </Button>} >
        <Dropdown.Item onClick={addNewIncome}>Income</Dropdown.Item>
        <Dropdown.Item>Expense</Dropdown.Item>
        <Dropdown.Item>Income Category</Dropdown.Item>
        <Dropdown.Item>Expense Category</Dropdown.Item>
      </Dropdown>
      </div>
      <div className="flex gap-2 items-center">
        <DarkThemeToggle className="btn-theme" />
        <Dropdown
          label=""
          dismissOnClick={true}
          renderTrigger={() => (
            <div className="avatar-dropdown">
              <Avatar
                img={userProfile?.picture}
                rounded
                className="img-avatar"
                size="sm"
              />
              <span className="hidden ssm:block ml-1">
                {userProfile?.name} {userProfile?.last_name}
              </span>
              <span className="text-xl">
                <BiChevronDown />
              </span>
            </div>
          )}
        >
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>
            <span onClick={out}>Log out</span>
          </Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
};
