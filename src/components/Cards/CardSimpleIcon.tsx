import { Card } from "flowbite-react";
import { TcardSimple } from "../../types/CardTypes";

export const CardSimpleIcon = ({
  className,
  title,
  color,
  icon,
}: TcardSimple) => {
  return (
    <Card
      className={`cursor-pointer color-text ${className}`}
      style={{ borderLeft: "5px solid" }}
    >
      <h5 className="text-sm tracking-tight mr-0 ssm:mr-6">{title}</h5>
      <span
        className={`hidden ssm:flex flex-center absolute top-5 right-1 w-10 h-10 ${color} rounded-full text-2xl`}
      >
        {icon}
      </span>
    </Card>
  );
};
