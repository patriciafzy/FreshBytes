<template>
    <div id = "orderDets">
        <h1>Your Past Orders</h1>
        <ul id = "orderList">
            <li v-for = "order in this.totalOrders" :key = "order.id" >
                Order Number: {{order.id}} | Item: {{order.listingID.name}} | Quantity: {{order.quantity}}
            </li>
        </ul>
    </div>
</template>

<script>
import { getUserOrdersWithListing } from '../database/queries';
export default {
    data() {
        return {
            totalOrders: []
        }
    },
    props: {
        userType: String,
        userId: String
    },
    methods: {

        

    },
    created: function() {
        getUserOrdersWithListing(this.userType, this.userId).then(allOrders => {
            this.totalOrders = allOrders;
            console.log(this.totalOrders);
        });
    }
}
</script>

<style scoped>
    #orderDets {
        text-align: left;
        border: blue solid 2px;
    }

    #indiOrder {
        display: flex;
        flex-direction: row;

        border: red solid 2px;
    }

    #indiItem {
        text-align: left;
    }
</style>