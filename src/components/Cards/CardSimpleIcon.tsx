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
      <h5 className="card-title">{title}</h5>
      <span className={`card-icon ${color}`}>{icon}</span>
    </Card>
  );
};
