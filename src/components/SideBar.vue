<template>
  <div class="sidebar">
    <a
      v-bind:class="{ active: isActive.details }"
      href="#details"
      v-on:click="swap"
      id="details"
      >Your Details</a
    >
    <a
      v-bind:class="{ active: isActive.orders }"
      href="#orders"
      v-on:click="swap"
      id="orders"
      >Orders</a
    >
    <a
      v-bind:class="{ active: isActive.dashboard }"
      href="#dashboard"
      id="dashboard"
      >Statistics</a
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: {
        details: true,
        orders: false,
        dashboard: false,
      },
    };
  },
  methods: {
    /**
     * Changes the styling of the sidebar to the correct active button
     * @param {String} activeId The id of the element that sent the click event
     */
    changeActiveButton: function (activeId) {
      for (const property in this.isActive) {
        this.isActive[property] = property == activeId ? true : false;
      }
    },

    /**
     * Emits a change-profile event to the Profile view parent component
     * @param {String} activeId the id of the element that sent the click event
     */
    emitChangeEvent: function (activeId) {
      this.$emit("change-profile", activeId);
    },

    /**
     * A wrapper function that handles everything once the sidebar is clicked
     * @param {Event} clickEvent A click event from the element.
     */
    swap: function (clickEvent) {
      // only trigger swap if clicked element is not already active
      if (clickEvent.target.className != "active") {
        this.changeActiveButton(clickEvent.target.id);
        this.emitChangeEvent(clickEvent.target.id);
      }
    },
  },
};
</script>

<style scoped>
/* From w3 Schools e.g. as placeholder */

/* The side navigation menu */
.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

/* Sidebar links */
.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}

/* Active/current link */
.sidebar a.active {
  background-color: #4caf50;
  color: white;
}

/* Links on mouse-over */
.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

/* On screens that are less than 700px wide, make the sidebar into a topbar */
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {
    float: left;
  }
  div.content {
    margin-left: 0;
  }
}

/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}
</style>
