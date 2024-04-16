import { colors } from "../../data/categoriesColor";

type TModalColorsContent = {
  handleClick: (param: keyof typeof colors) => void;
};
export const ModalColorsContent = ({ handleClick }: TModalColorsContent) => {
  return (
    <div className="flex flex-wrap gap-1">
      {Object.entries(colors).map(([colorName, { strong }]) => (
        <div
          key={colorName}
          className="size-10 rounded-full cursor-pointer"
          style={{ backgroundColor: strong }}
          onClick={() => handleClick(colorName as keyof typeof colors)}
        ></div>
      ))}
    </div>
  );
};
