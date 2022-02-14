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
        display: true,
      },
    },
  },
};

const labels = ["LATE", "ABSENT", "UNDER TIME", "OVER TIME"];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      backgroundColor: [
        "rgba(0, 54, 84, 1)",
        "rgba(1, 109, 168, 1)",
        "rgba(2, 163, 252, 1)",
        "rgba(86, 194, 253, 1)",
      ],
      borderColor: "hsl(252, 82.9%, 67.8%)",
      data: [90, 80, 100, 88],
    },
  ],
};

const Adminchart = () => {
  return (
    <div className="pt-6 pb-2">
      <div className="text-black text-sm mb-3">
        Attendance Overview For This Month
      </div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default Adminchart;
