<template>
  <div class="dashboard">
    <h1 class="title is-3">Dashboard</h1>
    <div class="columns">
      <div class="column is-half">
        <bar-chart />
      </div>
      <div class="column is-one-quarter">
        <bar-chart />
      </div>
      <div class="column is-one-quarter">
        <bar-chart />
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "./charts/BarChart";

export default {
  components: {
    BarChart,
  },
};
</script>

<style>
.dashboard {
  padding: 0 5%;
}
.columns {
  padding: 10px;
}
</style>
