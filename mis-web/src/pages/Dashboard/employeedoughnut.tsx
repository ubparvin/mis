import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        boxWidth: 20,
        boxHeight: 20,
        borderWidth: 0,
        borderRadius: 10,
        padding: 30,
      },
    },
    title: {
      display: true,
      text: "Task Summary For This Month",
      positon: "top" as const,
      color: "rgba(20, 127, 186, 1)",
      size: 17,
      font: {
        size: 16,
        weight: "normal",
      },
    },
  },
};

// export const data = {
//   labels: ["Test", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

export const data = {
  labels: ["TODO", "IN PROGRESS", "DONE"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgba(0, 54, 84, 1)",
        "rgba(1, 109, 168, 1)",
        "rgba(2, 163, 252, 1)",
      ],
      hoverOffset: 4,
    },
  ],
};

const EmployeeDoughnutChart = () => {
  return (
    <div className="pt-2">
      <Doughnut options={options} data={data} />
    </div>
  );
};

export default EmployeeDoughnutChart;
