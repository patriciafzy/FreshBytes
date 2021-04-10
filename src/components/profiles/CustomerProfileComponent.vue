<template>
  <div>
    This is a customer profile page that is tempoarily broken.... Error 404 that
    kind of stuff.
  </div>
  <!-- <section class="hero is-small">
      <div class="hero-body">
        <img :src="ProfilePic" />
        <p class="title">
          {{ userDetails.name }}
        </p>
      </div>
    </section>

    <div id="empty"></div>

    <div class="columns">
      <div class="column is-2">
        <side-bar v-on:change-profile="changeDetails"></side-bar>
      </div>
      <div class="column">
        <div id="content">
          <user-details
            v-bind:userDetails="userDetails"
            v-bind:isCustomer="isCustomer"
            v-bind:userId="userId"
            v-if="toShow.details"
          ></user-details>
          <order-details
            v-bind:allOrders="allOrders"
            v-if="toShow.orders"
          ></order-details>
        </div>
      </div>
    </div> -->
</template>

<script>
// import SideBar from "../components/SideBar.vue";
// import OrderDetails from "../components/OrderDetails.vue";
// import UserDetails from "../components/UserDetails.vue";
// import {
//   getUserDetails,
//   getUserOrdersWithListing,
// } from "../database/queries.js";
// import ProfilePic from "../assets/img/profile.png";

// export default {
//   data() {
//     return {
//       userDetails: {},
//       isCustomer: Boolean,
//       allOrders: [],
//       toShow: {
//         details: true,
//         orders: false,
//         dashboard: false,
//       },
//       userId: String,
//       ProfilePic: ProfilePic,
//     };
//   },
//   methods: {
//     /**
//      * Changes the displayed element in the profile page based on a click on the sidebar
//      */
//     changeDetails: function (event) {
//       for (const property in this.toShow) {
//         this.toShow[property] = property == event ? true : false;
//       }
//     },
//   },
//   components: {
//     BusinessProfileComponent,
//     CustomerProfileComponent,
//   },
//   computed: {
//     isCustomer: function () {
//       return this.$store.getters.isCustomer;
//     },
//   },
// };
</script>

<style scoped>
#content {
  margin-left: 200px;
  padding: 1px 16px;
}
</style>
