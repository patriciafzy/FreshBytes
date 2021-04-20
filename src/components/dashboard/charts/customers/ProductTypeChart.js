import { Doughnut } from "vue-chartjs";
import randColor from "../colors";

const colors = randColor(2);

export default {
  extends: Doughnut,
  data: () => ({
    chartdata: {
      labels: ["Ugly Food", "Product"],
      datasets: [
        {
          data: [72, 28],
          backgroundColor: colors,
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
