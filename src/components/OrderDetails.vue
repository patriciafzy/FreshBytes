<template>
    <div id = "orderDets">
        <h1>Your Past Orders</h1>
        <ul id = "orderList">
            <li v-for = "order in this.allOrders" :key = "order.id">
                Order Number: {{order.id}} Item: to add | Quantity: {{order.data().quantity}}
            </li>
        </ul>
        <p>{{}}</p>
    </div>
</template>

<script>
//import { getFromDocRef } from '../database/queries';
export default {
    data() {
        return {
        }
    },
    props: {
        allOrders: Array
    },
    methods: {

        

    },
    computed: {
        /*
        allListings: function() {
            let listings = {};

            this.allOrders.forEach(order => {

                let listingRef = order.data().listingID;

                getFromDocRef(listingRef).then(snapshot => {
                    listings[order.id] = snapshot.data();
                });

            });
            console.log(listings);
            return listings;
        }
        */
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