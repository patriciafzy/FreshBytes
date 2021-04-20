<template>
  <div>
    <customer-dashboard-component v-if="isCustomer" />
    <business-dashboard-component v-else />
  </div>
</template>

<script>
import CustomerDashboardComponent from "@/components/dashboard/CustomerDashboardComponent";
import BusinessDashboardComponent from "@/components/dashboard/BusinessDashboardComponent";
import { mapGetters } from "vuex";

export default {
  components: {
    CustomerDashboardComponent,
    BusinessDashboardComponent,
  },
  computed: {
    ...mapGetters(["isCustomer"]),
  },
};
</script>

<style></style>
