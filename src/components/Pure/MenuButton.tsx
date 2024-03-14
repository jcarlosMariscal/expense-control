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
      className="btn-hamburguer btn-anim-opacity"
      onClick={handleClick}
    >
      {active ? <BiX size="30" /> : <BiMenu size="30" />}
    </Button>
  );
};
