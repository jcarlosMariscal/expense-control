import { useEffect } from "react";
// import { useTheme } from "../../hooks/useTheme";
type TAnimatedCircles = {
  maxCircles: number;
};
const d = document;
export const AnimatedCircles = ({ maxCircles }: TAnimatedCircles) => {
  const randomBetween = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    for (let i = 0; i < maxCircles; i++) createAnimation();
  }, []);

  const createAnimation = () => {
    const startVw = randomBetween(1, 100);
    const startVh = randomBetween(100, 200);
    const endVw = randomBetween(1, 100);
    const endVh = randomBetween(-200, -100);
    const duration = randomBetween(20000, 40000);
    const delay = randomBetween(0, 20000);
    const delay2 = randomBetween(0, 20000);
    const size = randomBetween(1, 12);

    const divCircles: HTMLElement | null = d.getElementById("circles");

    const circleContainer = d.createElement("div");
    circleContainer.classList.add("circle-container");
    circleContainer.style.width = `${size}px`;
    circleContainer.style.height = `${size}px`;
    circleContainer.animate(
      [
        { transform: `translate3d(${startVw}vw, ${startVh}vh, 0)` },
        { transform: `translate3d(${endVw}vw, ${endVh}vh, 0)` },
      ],
      { duration, delay, iterations: Infinity }
    );

    const circle = d.createElement("div");
    circle.classList.add("circle");
    circle.style.animationDelay = `${delay2}ms`;
    circleContainer.appendChild(circle);
    if (divCircles !== null) divCircles.appendChild(circleContainer);
  };
  return null;
};
