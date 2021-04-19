import { HorizontalBar } from "vue-chartjs";
import randColor from "./colors";

const colors = randColor(3);

export default {
  extends: HorizontalBar,
  data: () => ({
    chartdata: {
      labels: ["Potato Farm", "7-11", "Fruity Bites"],
      datasets: [
        {
          label: "Stores",
          data: [84, 23, 10],
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
