<template>
    <div>
        <h1>Add a Listing</h1>
        <form>
            <label>What type of product do you wish to list?</label><br>
            <input type="radio" id="uglyfood" value="Produce" v-model="item.category">
            <label for="uglyfood">"Ugly" Food</label>
            <input type="radio" id="product" value="product" v-model="item.category">
            <label for="product">Product</label>
            
            <br>
            <label for="name">Name of Product</label><br>
            <textarea v-model.trim.lazy="item.name" row=10 cols=30 required></textarea><br>

            <label for="description">Description</label><br>
            <textarea v-model.trim.lazy="item.description" placeholder="Enter a description about the product's condition." row=10 cols=30 required></textarea><br>

            <label for="expiry">Best Before:</label><br>
            <input type="date" v-model="item.expiryDate" value=date min=date max="2024-12-31" required><br>

            <label for="originalPrice">Original Price:</label><br>
            <textarea v-model.number="item.originalPrice" placeholder="SGD ($)" required></textarea><br>

            <label for="price">New Price:</label><br>
            <textarea v-model.number="item.price" placeholder="SGD ($)" required></textarea><br>

            <label for="picture">Image Link</label><br>
            <textarea v-model.trim.lazy="item.picture" row=10 cols=30 required></textarea><br>

            <label for="quantity">Quantity Available:</label><br>
            <textarea v-model.number="item.quantity" required></textarea><br>

            <label for="dietary">Dietary Restriction</label><br>
            <select v-model="item.dietary" multiple required>
                <option v-for="option in dietaryRestrictions" v-bind:key="option">
                    {{ option }}
                </option>
            </select>
            <br>

            <label for="delivery">Delivery Option</label><br>
            <select v-model="item.delivery" multiple required>
                <option>Self Pick-Up</option>
                <option>Delivery</option>
            </select>
            <br>

            <button type="button" v-on:click="reviewOrder()">Review Order</button><br>

            <div v-show="validate === false">
                <h4> Please complete all fields before submitting!</h4>
            </div>
            
        </form>

    </div>
</template>

<script>

    export default {
        data() {
            return {
                date: new Date().toISOString().substr(0,10),
                validate: null,
                item: {
                    category: null,
                    name: "",
                    description: "",
                    expiryDate: null,
                    originalPrice: null,
                    price: null,
                    picture: null,
                    quantity: null,
                    delivery: [],
                    removed: false,
                    dietary: [],
                },
                dietaryRestrictions: [
                    "None",
                    "Lactose Intolerance",
                    "Vegetarian",
                    "Peanut Allergies",
                    "Halal",
                ]
            }
        },
        methods: {
            reviewOrder: function() {
                var status = true
                this.errors = []
                Object.keys(this.item).forEach(key => {
                    let property = this.item[key]
                    if (property === "" || property === null || property.length === 0) {
                        if (status === true) {
                            status = !status
                        }
                    }
                })
                this.validate = status
                if (this.validate === true) {
                    this.$router.push({name:'Review Listing', params: {items: this.item}})
                }
            },
        },

    }
</script>

<style scoped>

</style>