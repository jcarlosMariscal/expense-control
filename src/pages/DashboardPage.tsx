import { CardSimpleIcon } from "../components/Cards/CardSimpleIcon";
import { CardImageGradient } from "../components/Cards/CardImageGradient";
import { BarChartComponent } from "../components/Charts/BarChartComponent";
import { dataChart1, dataChart2 } from "../components/data/chartsData";
import { cardsDashboard, cardsSup } from "../components/data/cardsData";
import { TChartData } from "../types/chartTypes";

const chart1 = dataChart1;
const chart2 = dataChart2;
const chart1Data: TChartData = {
  labels: chart1.map((item) => item.label),
  datasets: [
    {
      label: "Income",
      data: chart1.map((item) => item.data?.income || 0),
      backgroundColor: "rgb(21 128 61)",
      borderColor: "rgb(20 83 45)",
      borderWidth: 1,
    },
    {
      label: "Expense",
      data: chart1.map((item) => item.data?.expense || 0),
      backgroundColor: "rgb(180 83 9)",
      borderColor: "rgb(120 53 15)",
      borderWidth: 1,
    },
  ],
};

const chart2Data: TChartData = {
  labels: chart2.map((item) => item.label),
  datasets: [
    {
      label: "",
      data: chart2.map((item) => item.data?.value || 0),
      borderColor: "",
      borderWidth: 2,
      backgroundColor: chart2.map((item) => item.background || ""),
    },
  ],
};
export const DashboardPage = () => {
  return (
    <>
      <div className="mb-4">
        <h2 className="text-2xl">
          <span className="opacity-50">Welcome,</span>{" "}
          <span className="font-bold">Carlos RM</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
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
      <div className="grid grid-cols-12 gap-4 ">
        <div className="col-span-12 lg:col-span-6">
          {cardsDashboard.map((card, index) => (
            <CardImageGradient key={index} cardData={card} />
          ))}
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="h-[15rem] sm:h-[25rem] md:h-[17.5rem] xl:h-[20rem] 2xl:h-[25rem] flex-center p-1 xl:p-4 color-bg-thirty rounded-lg">
            <BarChartComponent
              data={chart1Data}
              title="Record of Expenses and Income"
            />
          </div>
          <div className="h-[15rem] sm:h-[25rem] md:h-[17.5rem] xl:h-[20rem] 2xl:h-[25rem] flex-center p-1 xl:p-4 mt-4 color-bg-thirty rounded-lg">
            <BarChartComponent
              data={chart2Data}
              title="Activities with more spending"
            />
          </div>
        </div>
      </div>
    </>
  );
};
