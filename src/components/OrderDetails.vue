<template>
    <div id = "orderDets">
        <h2>Your Past Orders</h2>
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
export default {
    data() {
        return {
            allOrders: []
        }
    },
    props: {
        userDetails: Object
    },
    created: function() {

        // query database to get orders
        // this.allOrders = getOrders(this.userDetails.id);
        // placeholder
        this.allOrders = [
            {
                id: "74198",
                items: [
                    {
                        id: "jj88",
                        name: "50% off Loh Hei",
                        qty: "10",
                        price: "2"
                    },
                    {
                        id: "sd44",
                        name: "30% off Sushi",
                        qty: "2",
                        price: "1"
                    }
                ]
            }
        ]
    }
}
</script>

<style scoped>
    #orderDets {
        width: 700px;
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