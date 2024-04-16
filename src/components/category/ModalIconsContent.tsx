import icons from "../../data/categoriesIcons";

type TModalColorsContent = {
  handleClick: (param: keyof typeof icons) => void;
};

export const ModalIconsContent = ({ handleClick }: TModalColorsContent) => {
  return (
    <div className="flex flex-wrap justify-around gap-[2px] h-auto lg:h-[12.5rem]">
      {Object.entries(icons).map(([iconName, iconComponent]) => (
        <div
          key={iconName}
          className="size-8 cursor-pointer"
          title={iconName}
          onClick={() => handleClick(iconName as keyof typeof icons)}
        >
          <span className="color-text">{iconComponent}</span>
        </div>
      ))}
    </div>
  );
};
