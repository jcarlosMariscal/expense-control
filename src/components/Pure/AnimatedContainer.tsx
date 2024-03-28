import { AnimatedCircles } from "./AnimatedCircles";
import { useTheme } from "../../hooks/useTheme";

export const AnimatedContainer = () => {
  const theme = useTheme();
  const classCircle = theme === "light" ? "bg-image" : "bg-image-dark";
  return (
    <div className={`container-animation ${classCircle}`} id="circles">
      <AnimatedCircles maxCircles={60} />
    </div>
  );
};
