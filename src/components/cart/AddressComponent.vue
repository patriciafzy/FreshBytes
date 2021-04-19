<template>
  <div class="card">
    <div class="card-content">
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

        <validation-provider
          rules="required|positive"
          v-slot="{ errors, valid }"
        >
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
            <b-input
              type="textarea"
              v-model="description"
              placeholder="Address"
            />
          </b-field>
        </validation-provider>

        <validation-provider
          rules="required|positive"
          v-slot="{ errors, valid }"
        >
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

        <b-button
          type="is-primary"
          rounded
          expanded
          class="button"
          @click="handleSubmit(submit)"
        >
          Submit Details
        </b-button>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { mapGetters } from "vuex";

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
  computed: {
    ...mapGetters(["getUser"]),
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
</style>
