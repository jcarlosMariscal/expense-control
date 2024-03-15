import { Button } from "flowbite-react";
import { BiMenu, BiX } from "react-icons/bi";
type TMenuButton = {
  handleClick: () => void;
  active?: boolean;
};
export const MenuButton = ({ handleClick, active = false }: TMenuButton) => {
  return (
    <Button
      size="xs"
      color="blue"
      className="btn-hamburguer size-10 mr-3 p-0"
      onClick={handleClick}
      pill
    >
      {active ? <BiX size="30" /> : <BiMenu size="30" />}
    </Button>
  );
};
