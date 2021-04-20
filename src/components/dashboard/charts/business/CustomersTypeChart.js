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
          label: "New Customers",
          borderColor: colors[0],
          data: [29, 27, 5, 17, 10, 16, 25, 7, 18, 22, 19, 24],
          fill: true,
        },
        {
          label: "Recurring Customers",
          borderColor: colors[2],
          data: [72, 52, 57, 74, 65, 58, 76, 79, 63, 56, 50, 61],
          fill: true,
        },
        {
          label: "Total Customers",
          borderColor: colors[1],
          data: [101, 79, 62, 91, 75, 74, 101, 86, 81, 78, 69, 85],
          fill: true,
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
