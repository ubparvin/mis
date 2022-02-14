import { useState } from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      backgroundColor: "rgba(2, 133, 205, 1)",
      borderColor: "hsl(252, 82.9%, 67.8%)",
      data: [2, 20, 40, 23, 60, 54, 80, 45, 76, 23, 30, 100],
    },
  ],
};

const EmployeeBarchart = () => {
  return (
    <div className="pt-4">
      <div className="text-sky-600  mb-4">KPI Score For This Year</div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default EmployeeBarchart;
