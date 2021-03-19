<template>
    <div id = "userDet">
        <h1>Your User Details</h1>
        <p>Name: {{userDetails.name}}</p>

    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: {
        userDetails: Object
    }
    
}
</script>

<style scoped>
    #userDet {
        border: green solid 2px;
        text-align: left;
    }

</style>