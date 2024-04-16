import { TChartData } from "../../interfaces/chartTypes";
import { BarChartComponent } from "../Charts/BarChartComponent";
import { dataChart1, dataChart2 } from "../../data/chartsData";

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

export const ChartsContent = () => {
  return (
    <>
      <div className="chart-size">
        <BarChartComponent
          data={chart1Data}
          title="Record of Expenses and Income"
        />
      </div>
      <div className="chart-size mt-4">
        <BarChartComponent
          data={chart2Data}
          title="Activities with more spending"
        />
      </div>
    </>
  );
};
