import { CardInfo } from "../components/Cards/CardInfo";
import { cardsDashboard } from "../data/cardsData";
import { ChartsContent } from "../components/DashboardComponents/ChartsContent";
import { CardsResume } from "../components/DashboardComponents/CardsResume";
import { SectionTitle } from "../components/Pure/SectionTitle";

export const DashboardPage = () => {
  return (
    <>
      <SectionTitle className="mb-4 text-2xl">
        <span className="opacity-50">Welcome, </span>
        <span className="font-bold">Carlos RM</span>
      </SectionTitle>
      <CardsResume />
      <div className="content-dashboard ">
        <div className="cards-info">
          {cardsDashboard.map((card, index) => (
            <CardInfo key={index} cardData={card} />
          ))}
        </div>
        <div className="charts-content">
          <ChartsContent />
        </div>
      </div>
    </>
  );
};
