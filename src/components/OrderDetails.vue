<template>
    <div id = "orderDets">
        <h1>Your Past Orders</h1>
        <ul id = "orderList">
            <li v-for = "order in allOrders" :key = "order.id" id = "indiOrder">
                Order #: {{order.id}}  <ul id = "itemList">
                    <li v-for = "item in order.items" :key = "item.id" id = "indiItem">
                        Item: {{item.name}} | Price: ${{item.price}} | Quantity: {{item.qty}}
                    </li>
                </ul>
            </li>
        </ul>

    </div>
</template>

<script>
import { getUserOrders } from '../database/queries'
export default {
    data() {
        return {
            allOrders: []
        }
    },
    props: {
        userId: String,
        userType: String
    },
    created: function() {

        // query database to get orders
        getUserOrders(this.userType, this.userId).then();
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