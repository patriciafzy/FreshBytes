import { Bar } from "vue-chartjs";
import randColor from "../colors";

const colors = randColor(3);

export default {
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ["Yukon Gold Potatoes", "Potato Salad", "Potato Ice Cream"],
      datasets: [
        {
          axis: "y",
          label: "Products",
          data: [55, 24, 20, 19],
          backgroundColor: colors,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: "y",
    },
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
