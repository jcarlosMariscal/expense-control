type TBackgroundGradient = {
  position?: string;
  size: string;
  bg: string;
  blur: string;
};
export const BackgroundGradient = ({
  position,
  size,
  bg,
  blur,
}: TBackgroundGradient) => {
  return (
    <div className={`sidebar-gradient ${position} ${size} ${bg} ${blur}`}></div>
  );
};
