<template>
  <div>
    <customer-profile-component v-if="isCustomer" />
    <business-profile-component v-else />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BusinessProfileComponent from "@/components/profile/BusinessProfileComponent";
import CustomerProfileComponent from "@/components/profile/CustomerProfileComponent";

export default {
  components: {
    BusinessProfileComponent,
    CustomerProfileComponent,
  },
  computed: {
    ...mapGetters(["isCustomer"]),
  },
};
</script>

<style></style>
