import React from "react";
import { Line } from "react-chartjs-2";
import styles from "./ANH.module.css";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, //x axis
  LinearScale, // y AXIS
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ANH = () => {
  const data = {
    labels: ["a", "b", "c", "d", "e", "f", "g"],
    datasets: [
      {
        laabels: "sales of the week",
        data: [1, 5, 3, 7, 4, 6, 1],
        backgroundColor: "blue",
        borderColor: "Deep sky blue",
        pointBorderColor: "blue",
        tension: 0.9,
      },
    ],
  };
  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: 1,
        max: 9,
      },
    },
  };
  return (
    <>
      <div className={`appointment ${styles.item_1} ${styles.anh}`}>
        <h3>APPOINTMENT</h3>
        <p>3973</p>
        <Line data={data} options={options}></Line>
      </div>

      <div className={`newpatient ${styles.item_2} ${styles.anh}`}>
        <h3>NEW PATIENT</h3>
        <p>593</p>
      </div>

      <div className={`hospitalearning ${styles.item_3} ${styles.anh}`}>
        <h3>HOSPITAL EARNING</h3>
        <p>3973</p>
      </div>
    </>
  );
};

export default ANH;