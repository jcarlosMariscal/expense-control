import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { TChartData } from "../../types/chartTypes";
import { useTheme } from "../../hooks/useTheme";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type TBarChartComponent = {
  data: TChartData;
  title: string;
};
export const BarChartComponent = ({ data, title }: TBarChartComponent) => {
  const theme = useTheme();
  const color = theme === "light" ? "rgb(226 232 240)" : "rgb(51 65 85)";
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: title,
      },
    },
    scales: {
      x: {
        grid: { color },
      },
      y: {
        grid: { color },
      },
    },
  };
  return <Bar options={options} data={data} />;
};
