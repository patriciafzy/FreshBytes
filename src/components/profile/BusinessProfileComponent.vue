<template>
  <div>
    <h1 class="title is-3">Profile</h1>
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ getUser.name }}</p>
            <p class="subtitle is-6">{{ getUser.username }}</p>
          </div>
        </div>
        <div class="content">
          <p>{{ getUser.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getUser"]),
  },
};
</script>

<style scoped>
.card {
  width: 400px;
  margin: auto;
}
</style>
