import { Doughnut } from "vue-chartjs";
import randColor from "../colors";

const colors = randColor(2);

export default {
  extends: Doughnut,
  data: () => ({
    chartdata: {
      labels: ["Waste", "Saved Waste"],
      datasets: [
        {
          data: [66, 34],
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
