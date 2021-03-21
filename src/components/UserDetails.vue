<template>
    <div id = "userDet">
        <h1>Your User Details</h1>
        <div v-if = "!isEdit">
            <p>Name: <span>{{this.userDetails.name}}</span></p>
            <p>Email: <span>{{this.userDetails.email}}</span></p>
            <p>Username: <span>{{this.userDetails.username}}</span></p>
            <p>Points: <span>{{this.userDetails.points}}</span></p>
            <p>Location: <span>{{this.userDetails.location}}</span></p>
        </div>
        <button type = "button">Change Details</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isEdit: false
        }
    },
    props: {
        userDetails: {}
    },
    methods: {

    }
    
}
</script>

<style scoped>
    #userDet {
        border: green solid 2px;
        text-align: left;
    }
    p {
        font-weight: bold;
    }

    span {
        font-weight: normal;
    }

</style>