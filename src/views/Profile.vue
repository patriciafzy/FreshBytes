<template>
  <div>
    <h1>{{ userDetails.name }}'s Profile Page</h1>
    <sidebar v-on:change-profile="changeDetails"></sidebar>
    <div id="content">
      <user-dets
        v-bind:userDetails="userDetails"
        v-if="toShow.details"
      ></user-dets>
      <order-dets
        v-bind:allOrders="allOrders"
        v-if="toShow.orders"
      ></order-dets>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import OrderDetails from "../components/OrderDetails.vue";
import UserDetails from "../components/UserDetails.vue";
import {
  getUserDetails,
  getUserType,
  getUserOrdersWithListing,
} from "../database/queries.js";

export default {
  data() {
    return {
      userDetails: {},
      userType: "",
      allOrders: [],
      toShow: {
        details: true,
        orders: false,
        dashboard: false,
      },
      userId: String,
    };
  },
  methods: {
    /**
     * Changes the displayed element in the profile page based on a click on the sidebar
     */
    changeDetails: function (event) {
      for (const property in this.toShow) {
        this.toShow[property] = property == event ? true : false;
      }
    },
  },
  components: {
    sidebar: SideBar,
    "user-dets": UserDetails,
    "order-dets": OrderDetails,
  },
  created: function () {
    // Placeholder id
    getUserType("username").then((type) => {
      this.userType = type;
      if (type == "customer") {
        // Only query if user is a customer
        // Placeholder username
        getUserDetails("username", type).then((doc) => {
          this.userDetails = doc.data();
          this.userId = doc.id;

          getUserOrdersWithListing(type, doc.id).then((orders) => {
            this.allOrders = orders;
          });
        });
      }
    });
  },
};
</script>

<style scoped>
#content {
  margin-left: 200px;
  padding: 1px 16px;
}
</style>
