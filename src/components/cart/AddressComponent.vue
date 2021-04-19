<template>
  <div>
    <h1 class="title is-3">Shipping Information</h1>
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <validation-provider rules="required|max:40" v-slot="{ errors, valid }">
        <b-field
          :message="errors"
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
        >
          <b-input v-model="firstName" placeholder="First Name" />
        </b-field>
      </validation-provider>
      <validation-provider rules="required|max:40" v-slot="{ errors, valid }">
        <b-field
          :message="errors"
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
        >
          <b-input v-model="lastName" placeholder="Last Name" />
        </b-field>
      </validation-provider>
      <validation-provider rules="required|max:40" v-slot="{ errors, valid }">
        <b-field
          :message="errors"
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
        >
          <b-input v-model="email" placeholder="Email Address" />
        </b-field>
      </validation-provider>

      <validation-provider rules="required|positive" v-slot="{ errors, valid }">
        <b-field
          :message="errors"
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
        >
          <b-input
            type="number"
            v-model="phoneNumber"
            placeholder="Telephone Number"
          />
        </b-field>
      </validation-provider>

      <validation-provider rules="required" v-slot="{ errors, valid }">
        <b-field
          :message="errors"
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
        >
          <b-input type="textarea" v-model="address" placeholder="Address" />
        </b-field>
      </validation-provider>

      <validation-provider rules="required|positive" v-slot="{ errors, valid }">
        <b-field
          :message="errors"
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
        >
          <b-input
            type="number"
            v-model="postalCode"
            placeholder="Postal Code (Sxxxxxx)"
          />
        </b-field>
      </validation-provider>

      <validation-provider rules="required|max:40" v-slot="{ errors, valid }">
        <b-field
          :message="errors"
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
        >
          <b-input v-model="country" placeholder="Country" />
        </b-field>
      </validation-provider>

      <div class="buttons">
        <b-button type="is-info" @click="$emit('previous')">Back</b-button>
        <b-button
          type="is-primary"
          class="button"
          @click="handleSubmit(submit)"
        >
          Submit
        </b-button>
      </div>
    </validation-observer>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data: function () {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      postalCode: "",
      country: "",
    };
  },
  methods: {
    submit: function () {
      this.$emit("next");
    },
  },
};
</script>

<style scoped>
.card {
  margin: auto;
}

.label {
  text-align: left;
}

.buttons {
  margin-top: 10px;
  justify-content: space-between;
}
</style>
