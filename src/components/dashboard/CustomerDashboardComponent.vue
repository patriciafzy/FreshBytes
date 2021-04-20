<template>
  <div class="dashboard">
    <h1 class="title is-3">Dashboard</h1>
    <div class="tile is-ancestor is-vertical">
      <div class="tile is-parent">
        <div class="tile is-child box">
          <h1 class="title is-5">Orders:</h1>
          <h1 class="subtitle is-4">123</h1>
        </div>
        <div class="tile is-child box">
          <h1 class="title is-5">Savings:</h1>
          <h1 class="subtitle is-4">$1502</h1>
        </div>
        <div class="tile is-child box">
          <h1 class="title is-5">Environmental Impact:</h1>
          <h1 class="subtitle is-4">501kg</h1>
        </div>
        <div class="tile is-child box">
          <h1 class="title is-5">Businesses Supported:</h1>
          <h1 class="subtitle is-4">23</h1>
        </div>
        <div class="tile is-child box">
          <h1 class="title is-5">Points Earned:</h1>
          <h1 class="subtitle is-4">5127</h1>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child is-6 box">
          <h1 class="title is-5">Past 12 Months</h1>
          <trends-chart class="canvas" />
        </div>
        <div class="tile is-child is-3 box">
          <h1 class="title is-5">Product Type</h1>
          <product-type-chart class="canvas" />
        </div>
        <div class="tile is-child is-3 box">
          <h1 class="title is-5">Most Purchased Products</h1>
          <most-purchased-products-chart class="canvas" />
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child is-3 box">
          <h1 class="title is-5">Most Frequented Stores</h1>
          <most-frequented-stores-chart class="canvas" />
        </div>
        <div class="tile is-child is-6 box">
          <h1 class="title is-5">Orders</h1>
          <orders-table-component />
        </div>
        <div class="tile is-child is-3 box">
          <h1 class="title is-5">Global Saved Waste</h1>
          <global-saved-waste-chart class="canvas" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MostPurchasedProductsChart from "./charts/customers/MostPurchasedProductsChart";
import ProductTypeChart from "./charts/customers/ProductTypeChart";
import TrendsChart from "./charts/customers/TrendsChart";
import MostFrequentedStoresChart from "./charts/customers/MostFrequentedStoresChart";
import GlobalSavedWasteChart from "./charts/customers/GlobalSavedWasteChart";
import OrdersTableComponent from "@/components/utils/OrdersTableComponent";

export default {
  components: {
    MostPurchasedProductsChart,
    ProductTypeChart,
    TrendsChart,
    MostFrequentedStoresChart,
    GlobalSavedWasteChart,
    OrdersTableComponent,
  },
  data: function () {
    return {
      columns: [
        { field: "orderId", label: "Order ID" },
        { field: "productName", label: "Product" },
        { field: "originalPrice", label: "Original Price" },
        { field: "price", label: "Price" },
        { field: "quantity", label: "Quantity" },
      ],
    };
  },
  computed: {
    ...mapGetters(["getOrders"]),
  },
};
</script>

<style scoped>
.card {
  margin: 0 auto;
}

.canvas {
  width: 100% !important;
}
</style>
