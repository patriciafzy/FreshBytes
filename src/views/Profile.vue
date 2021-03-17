<template>
    <div>
        <h1>{{userDetails.name}}'s Profile Page</h1>
        <sidebar></sidebar>
        <div id = "content">
            <user-dets v-bind:userDetails="userDetails"></user-dets>
            <order-dets v-bind:userDetails="userDetails" v-if = "userDetails.type == 'customer'"></order-dets>
        </div>
    </div>
</template>

<script>
import SideBar from "../components/SideBar.vue"
import OrderDetails from "../components/OrderDetails.vue"
import UserDetails from "../components/UserDetails.vue"
export default {
    data() {
        return {
            userDetails: {
                name: "",
                email: "",
                phone: "",
                type: "",
                id: ""
            }
        }
    },
    components: {
        "sidebar": SideBar,
        "user-dets": UserDetails,
        "order-dets": OrderDetails

    },
    created: function() {
        // Insert database query here
        // Placeholder
        this.userDetails = {
            name: "BBLoh",
            email: "bbloh@googlepay.com",
            phone: "99999999",
            type: "customer",
            id: "asdu13489yy93"

        }
    }
}
</script>

<style scoped>
    #content {
        margin-left: 200px;
        padding: 1px 16px;
    }

</style>