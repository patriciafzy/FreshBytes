<template>
  <div id="userDet">
    <h1>Your User Details</h1>
    <div v-if="!isEdit">
      <p>
        Name: <span>{{ this.userDetails.name }}</span>
      </p>
      <p>
        Email: <span>{{ this.userDetails.email }}</span>
      </p>
      <p>
        Username: <span>{{ this.userDetails.username }}</span>
      </p>
      <p>
        Points: <span>{{ this.userDetails.points }}</span>
      </p>
      <p>
        Location: <span>{{ this.userDetails.location }}</span>
      </p>
      <button type="button" v-on:click="toggleForm">Change Details</button>
    </div>
    <div v-if="isEdit">
      <form action="">
        <label for="name">Name: </label>
        <input type="text" name="name" v-bind:value="userDetails.name" />
        <br /><br />
        <label for="email">Email: </label>
        <input type="email" name="email" v-bind:value="userDetails.email" />
        <br /><br />
        <label for="username">Username: </label>
        <input
          type="text"
          name="username"
          v-bind:value="userDetails.username"
        />
        <br /><br />
        <label for="location">Location: </label>
        <select name="location" v-bind:value="userDetails.location">
          <option value="North">North</option>
          <option value="South">South</option>
          <option value="East">East</option>
          <option value="West">West</option>
        </select>
        <br /><br />
        <button type="button" v-on:click="toggleForm">Cancel Changes</button>
        <button type="submit">Submit Not Done D:</button>
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
}
p,
label {
  font-weight: bold;
}

span,
input,
select {
  font-weight: normal;
}
</style>
