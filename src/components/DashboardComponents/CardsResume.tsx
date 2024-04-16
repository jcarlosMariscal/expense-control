import { cardsSup } from "../../data/cardsData";
import { CardSimpleIcon } from "../Cards/CardSimpleIcon";

export const CardsResume = () => {
  return (
    <div className="cards-resume-app">
      {cardsSup.map((card, index) => (
        <CardSimpleIcon
          key={index}
          className={`border-none color-bg-thirty relative ${card.className}`}
          title={card.title}
          color={card.color}
          icon={card.icon}
        />
      ))}
    </div>
  );
};
