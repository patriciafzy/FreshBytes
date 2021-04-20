import { Line } from "vue-chartjs";
import randColor from "../colors";

const colors = randColor(3);
console.log(colors);

export default {
  extends: Line,
  data: () => ({
    chartdata: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Revenue (Left)",
          borderColor: colors[0],
          yAxisID: "A",
          data: [
            8900,
            6081,
            9412,
            9630,
            8416,
            8942,
            6234,
            8824,
            7677,
            7337,
            9020,
            8038,
          ],
          fill: false,
        },
        {
          label: "Store Impressions (Left)",
          borderColor: colors[2],
          yAxisID: "A",
          data: [
            4428,
            4435,
            4257,
            3249,
            4269,
            3467,
            4221,
            3744,
            4558,
            4256,
            3185,
            4619,
          ],
          fill: false,
        },
        {
          label: "Items Sold (Right)",
          borderColor: colors[1],
          yAxisID: "B",
          data: [120, 107, 189, 155, 170, 188, 143, 131, 114, 109, 179, 156],
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            id: "A",
            type: "linear",
            position: "left",
          },
          {
            id: "B",
            type: "linear",
            position: "right",
          },
        ],
      },
    },
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
