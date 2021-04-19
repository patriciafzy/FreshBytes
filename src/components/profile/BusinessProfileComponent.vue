<template>
  <div>
    <div class="bg-light is-fullheight">
      <section class="hero is-primary profile-cover is-bold">
        <div class="hero-body">
          <div class="container"></div>
        </div>
      </section>
    </div>

    <section>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child">
            <figure class="image is-128x128 center">
              <img
                class="is-circular"
                src="@/assets/img/usericon.png"
                alt="Profile image"
              />
            </figure>
            <p class="title">{{ getUser.name }}</p>
            <p class="subtitle">@{{ getUser.username }}</p>
          </article>
        </div>
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child">
                <br />
                <p class="title is-4">About {{ getUser.name }}</p>
                <p>{{ getUser.description }}</p>
                <br />
                <b-button>Edit Description</b-button>
              </article>

              <article class="tile is-child">
                <b-navbar shadow="true" class="navbar-item">
                  <template #start>
                    <b-navbar-item href="#"> Edit Profile </b-navbar-item>
                    <b-navbar-item href="#"> Listings </b-navbar-item>
                    <b-navbar-item href="#"> Orders </b-navbar-item>
                    <b-navbar-item href="#"> Dashboard </b-navbar-item>
                  </template>
                </b-navbar>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="columns is-mobile">
        <div class="column is-three-fifths is-offset-one-fifth"></div>
      </div>
    </section>
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

.is-circular {
  border-radius: 50%;
}
.center {
  text-align: center;
  margin: 0 auto;
}
.navbar-item {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
</style>
