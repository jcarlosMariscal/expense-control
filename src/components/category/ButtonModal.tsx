import { Button } from "flowbite-react";
import { ReactNode } from "react";

type TButtonModal = {
  color: {
    strong: string;
    light: string;
  };
  handleClick: () => void;
  text: string;
  children: ReactNode;
};

export const ButtonModal = ({
  color,
  handleClick,
  text,
  children,
}: TButtonModal) => {
  return (
    <>
      <Button
        pill
        className={`size-10 p-0`}
        style={{
          background: color.strong,
          color: color.light,
        }}
        onClick={handleClick}
      >
        {children}
      </Button>
      <span className="color-text cursor-pointer" onClick={handleClick}>
        {text}
      </span>
    </>
  );
};
