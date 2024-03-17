import { TBarChart } from "../../types/chartTypes";

export const dataChart1: TBarChart[] = [
  { label: "January", data: { income: 500, expense: 300 } },
  { label: "February", data: { income: 500, expense: 100 } },
  { label: "March", data: { income: 550, expense: 500 } },
  { label: "April", data: { income: 800, expense: 400 } },
  { label: "May", data: { income: 300, expense: 350 } },
  { label: "June", data: { income: 500, expense: 800 } },
  { label: "July", data: { income: 600, expense: 160 } },
];
export const dataChart2: TBarChart[] = [
  { label: "Transportation", data: { value: 300 }, background: "red" },
  { label: "Housing", data: { value: 100 }, background: "blue" },
  { label: "Travel", data: { value: 500 }, background: "orange" },
  { label: "Food", data: { value: 400 }, background: "purple" },
  { label: "Health", data: { value: 350 }, background: "pink" },
  { label: "Entertainment", data: { value: 800 }, background: "yellow" },
];
