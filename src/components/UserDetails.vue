<template>
  <div id="userDet">
    <h1>Your User Details</h1>
    <div v-if="!isEdit">
      <p>Name: {{ this.userDetails.name }}</p>
      <p>Email: {{ this.userDetails.email }}</p>
      <p>Username: {{ this.userDetails.username }}</p>
      <p>Points: {{ this.userDetails.points }}</p>
      <p>Location: {{ this.userDetails.location }}</p>
      <button type="button" v-on:click="toggleForm">Change Details</button>
    </div>
    <div v-if="isEdit">
      <form action="">
        <label for="name">Name: </label>
        <input type="text" name="name" v-bind:value="userDetails.name" />
        <label for="email">Email: </label>
        <input type="email" name="email" v-bind:value="userDetails.email" />
        <label for="username">Username: </label>
        <input
          type="text"
          name="username"
          v-bind:value="userDetails.username"
        />
        <label for="location">Location: </label>
        <select name="location" v-bind:value="userDetails.location">
          <option value="North">North</option>
          <option value="South">South</option>
          <option value="East">East</option>
          <option value="West">West</option>
        </select>
        <div class="buttons">
          <button type="button" v-on:click="toggleForm">Cancel Changes</button>
          <button type="submit">Submit Not Done D:</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEdit: false,
    };
  },
  props: {
    userDetails: Object,
  },
  methods: {
    toggleForm: function () {
      this.isEdit = !this.isEdit;
    },
  },
};
</script>

<style scoped>
#userDet {
  border: green solid 2px;
  text-align: left;
  padding: 10px;
}

p,
label {
  font-weight: bold;
  margin-left: 20px;
}

label {
  display: block;
  margin-bottom: 10px;
}

.buttons {
  margin: 20px;
  display: block;
}

span,
input,
select {
  font-weight: normal;
  margin-left: 20px;
}
</style>
