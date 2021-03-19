<template>
    <div>
        <h1>{{userDetails.name}}'s Profile Page</h1>
        <sidebar></sidebar>
        <div id = "content">
            <user-dets v-bind:userDetails="userDetails"></user-dets>
            <order-dets v-bind:userDetails="userDetails" v-if = "userType == 'customer'"></order-dets>
        </div>
    </div>
</template>

<script>
import SideBar from "../components/SideBar.vue"
import OrderDetails from "../components/OrderDetails.vue"
import UserDetails from "../components/UserDetails.vue"
import { getCustomerDetails, getUserType } from '../database/queries.js'
export default {
    data() {
        return {
            userDetails: [],
            userType: Object
        }
    },
    components: {
        "sidebar": SideBar,
        "user-dets": UserDetails,
        "order-dets": OrderDetails

    },
    created: function() {

        // Placeholder username
        getCustomerDetails("username").then(docs => {
            let detailArray = docs.map(x => x.data());
            this.userDetails = detailArray[0];
        });

        getUserType("1").then(type => {
            this.userType = type;
        });




        
    }
}
</script>

<style scoped>
    #content {
        margin-left: 200px;
        padding: 1px 16px;
    }

</style>