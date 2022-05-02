import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart() {
  const [chart, setChart] = useState([]);

  const data = {
    labels: chart.map((el) => {

      let products = "";
      if (el.products[0].productId === 1) {
        products = "Fjallraven ";
      } else if (el.products[0].productId === 2) {
        products = "mens Casual";
      } else {
        products = "others";
      }
      return products;
    }),
    datasets: [
      {
        label: "# of Votes",
        data: chart.map((el) => el.products[0].quantity),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  useEffect(() => {
    fetch("https://fakestoreapi.com/carts?limit=5")
      .then((res) => res.json())
      .then((result) => {
        setChart(result)
      } );
  }, []);
  return <Doughnut data={data} />;
}
