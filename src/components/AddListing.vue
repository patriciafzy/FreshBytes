<template>
  <div>
    <h1 class="title is-3">Add a Listing</h1>
    <form>
      <label class="title is-6">What type of product do you wish to list?</label
      ><br />
      <input
        type="radio"
        id="uglyfood"
        value="Produce"
        v-model="item.category"
      />
      <label for="uglyfood">"Ugly" Food</label>
      <input
        type="radio"
        id="product"
        value="product"
        v-model="item.category"
      />
      <label for="product">Product</label>

      <br />
      <label class="title is-6" for="name">Name of Product</label><br />
      <textarea
        v-model.trim.lazy="item.name"
        row="10"
        cols="30"
        required
      ></textarea
      ><br />

      <label class="title is-6" for="description">Description</label><br />
      <textarea
        v-model.trim.lazy="item.description"
        placeholder="Enter a description about the product's condition."
        row="10"
        cols="30"
        required
      ></textarea
      ><br />

      <label class="title is-6" for="expiry">Best Before:</label><br />
      <input
        type="date"
        v-model="item.expiryDate"
        value="date"
        min="date"
        max="2024-12-31"
        required
      /><br />

      <label class="title is-6" for="originalPrice">Original Price:</label
      ><br />
      <textarea
        v-model.number="item.originalPrice"
        placeholder="SGD ($)"
        required
      ></textarea
      ><br />

      <label class="title is-6" for="price">New Price:</label><br />
      <textarea
        v-model.number="item.price"
        placeholder="SGD ($)"
        required
      ></textarea
      ><br />

      <label class="title is-6" for="quantity">Quantity Available:</label><br />
      <textarea v-model.number="item.quantity" required></textarea><br />

      <label class="title is-6" for="dietary">Dietary Restriction</label><br />
      <select v-model="item.dietary" multiple required>
        <option v-for="option in dietaryRestrictions" v-bind:key="option">
          {{ option }}
        </option>
      </select>
      <br />

      <label class="title is-6" for="deliverys">Delivery Option</label><br />
      <input
        type="checkbox"
        id="delivery"
        v-bind:value="true"
        v-model="item.delivery"
      />
      <label for="delivery"> Delivery</label><br />
      <input
        type="checkbox"
        id="pickup"
        v-bind:value="true"
        v-model="item.pickup"
      />
      <label for="pickup"> Pickup</label><br />

      <!-- Add image !-->
      <label class="title is-6" for="image-upload"
        >Upload a display image: </label
      ><br />
      <div class="image-upload">
        <image-uploader
          :preview="true"
          :className="['fileinput', { 'fileinput--loaded': hasImage }]"
          capture="environment"
          :debug="1"
          doNotResize="gif"
          :autoRotate="true"
          outputFormat="verbose"
          @input="setImage"
        >
          <label for="fileInput" slot="upload-label">
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  class="path1"
                  d="M9.5 19c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5zM30 8h-7c-0.5-2-1-4-3-4h-8c-2 0-2.5 2-3 4h-7c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM16 27.875c-4.902 0-8.875-3.973-8.875-8.875s3.973-8.875 8.875-8.875c4.902 0 8.875 3.973 8.875 8.875s-3.973 8.875-8.875 8.875zM30 14h-4v-2h4v2z"
                ></path>
              </svg>
            </figure>
            <span class="upload-caption">{{
              hasImage ? "Replace" : "Click to upload"
            }}</span>
          </label>
        </image-uploader>
      </div>

      <button type="button" v-on:click="reviewOrder()">Review Order</button
      ><br />

      <div v-show="validate === false">
        <h4>Please complete all fields before submitting!</h4>
      </div>
    </form>
  </div>
</template>

<script>
import ImageUploader from "vue-image-upload-resize";

export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      validate: null,
      hasImage: false,
      item: {
        category: null,
        name: "",
        description: "",
        expiryDate: null,
        originalPrice: null,
        price: null,
        picture: null,
        quantity: null,
        delivery: false,
        pickup: false,
        removed: false,
        dietary: [],
      },
      dietaryRestrictions: [
        "None",
        "Lactose Intolerance",
        "Vegetarian",
        "Peanut Allergies",
        "Halal",
      ],
    };
  },
  methods: {
    reviewOrder: function () {
      var status = true;
      this.errors = [];
      Object.keys(this.item).forEach((key) => {
        let property = this.item[key];
        if (property === "" || property === null) {
          if (status === true) {
            status = !status;
          }
        }
      });
      this.validate = status;
      if (this.validate === true) {
        this.$router.push({
          name: "reviewListing",
          params: { items: this.item },
        });
      }
    },

    setImage: function (output) {
      this.hasImage = true;
      this.item.picture = output.dataUrl;
    },
  },
  components: {
    ImageUploader,
  },
};
</script>

<style>
#fileInput {
  display: none;
}
</style>

<style scoped></style>
