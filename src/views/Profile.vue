<template>
  <div>
    <customer-profile-component v-if="isCustomer"></customer-profile-component>
    <business-profile-component v-else></business-profile-component>
  </div>
</template>

<script>
import BusinessProfileComponent from "../components/profiles/BusinessProfileComponent.vue";
import CustomerProfileComponent from "../components/profiles/CustomerProfileComponent.vue";

export default {
  components: {
    BusinessProfileComponent,
    CustomerProfileComponent,
  },
};
</script>

<style></style>
