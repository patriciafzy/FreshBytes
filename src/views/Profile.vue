<template>
    <div>
        <h1>{{userDetails.name}}'s Profile Page</h1>
        <sidebar></sidebar>
        <div id = "content">
            <user-dets v-bind:userDetails="userDetails"></user-dets>
            <order-dets v-bind:allOrders="allOrders" v-if = "userType == 'customer'"></order-dets>
        </div>
    </div>
</template>

<script>
import SideBar from "../components/SideBar.vue"
import OrderDetails from "../components/OrderDetails.vue"
import UserDetails from "../components/UserDetails.vue"
import { getCustomerDetails, getUserType, getUserOrders } from '../database/queries.js'
export default {
    data() {
        return {
            userDetails: Object,
            userType: String,
            allOrders: [],
            toShow: {
                userDet: true,
                orderDet: false,
                dashboard: false
            },
            userId: String
        }
    },
    components: {
        "sidebar": SideBar,
        "user-dets": UserDetails,
        "order-dets": OrderDetails

    },
    created: function() {

        // Placeholder id
        getUserType("username").then(type => {
            this.userType = type;
            if (type == "customer") {
                // Only query if user is a customer
                // Placeholder username
                getCustomerDetails("username", type).then(docs => {
                    this.userDetails = docs.data();

                    this.userId  = docs.id;

                            getUserOrders(this.userType, this.userId).then(doc => {
                                console.log(doc[0].data());
                                this.allOrders = doc;
                            });

                });

            }
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