<template>
  <div>
    <h1 class="title">{{ userData.name }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    userData: function () {
      return this.$store.getters.getUserData;
    },
  },
};
</script>

<style></style>
