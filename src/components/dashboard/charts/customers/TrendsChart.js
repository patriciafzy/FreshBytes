import { Line } from "vue-chartjs";
import randColor from "../colors";

const colors = randColor(3);

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
          label: "Savings",
          borderColor: colors[0],
          data: [113, 89, 93, 152, 162, 94, 188, 130, 65, 169, 43, 192],
          fill: false,
        },
        {
          label: "Items Purchased",
          borderColor: colors[1],
          data: [16, 9, 22, 17, 15, 13, 30, 21, 23, 20, 7, 24],
          fill: false,
        },
        {
          label: "Environmental Impact",
          borderColor: colors[2],
          data: [113, 21, 60, 83, 191, 20, 69, 76, 53, 102, 110, 58],
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
