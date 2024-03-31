type TData = {
  income?: number;
  expense?: number;
  value?: number;
};
export type TDatasets = {
  label: string;
  data: number[];
  borderColor: string;
  borderWidth: number;
  backgroundColor: string | string[];
};
export type TChartData = {
  labels: string[];
  datasets: TDatasets[];
};
export type TBarChart = {
  label: string;
  data?: TData;
  background?: string;
};
