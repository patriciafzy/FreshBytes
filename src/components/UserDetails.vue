<template>
    <div id = "userDet">
        <h1>Your User Details</h1>
        <p>Name: <span>{{this.userDetails.name}}</span></p>
        <p>Email: <span>{{this.userDetails.email}}</span></p>
        <p>Username: <span>{{this.userDetails.username}}</span></p>
        <p>Points: <span>{{this.userDetails.points}}</span></p>
        <p>Location: <span>{{this.userDetails.location}}</span></p>
        {{typeof(this.userDetails)}}
    </div>
</template>

<script>
export default {
    data() {
        return {
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