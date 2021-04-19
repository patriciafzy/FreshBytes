<template>
  <div class="listings">
    <h1 class="title is-3">Your Listings</h1>
    <b-button type="is-primary" @click="addListingActive = true" class="button">
      Add New Listing
    </b-button>
    <b-button
      type="is-danger"
      v-if="hasSelected"
      @click="confirmDelete"
      class="button"
    >
      Delete Selected Listings
    </b-button>
    <b-modal v-model="addListingActive" scroll="keep">
      <add-listing-component
        @close="
          () => {
            addListingActive = false;
            resetItems();
          }
        "
      />
    </b-modal>
    <b-table
      :data="getItems"
      :columns="columns"
      checkable
      :checked-rows.sync="checkedRows"
      checkbox-position="right"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AddListingComponent from "@/components/listings/AddListingComponent";
import { deleteItem } from "@/firebase/database";

export default {
  components: {
    AddListingComponent,
  },
  data: function () {
    return {
      addListingActive: false,
      columns: [
        { field: "type", label: "Type" },
        { field: "name", label: "Name" },
        { field: "description", label: "Description" },
        { field: "bestBefore", label: "Best Before" },
        { field: "originalPrice", label: "Original Price" },
        { field: "price", label: "Price" },
        { field: "quantity", label: "Quantity" },
        { field: "dietary", label: "Dietary Restriction" },
        { field: "collection", label: "Collection Options" },
      ],
      checkedRows: [],
    };
  },
  computed: {
    ...mapGetters(["getUser"]),
    getItems: function () {
      return this.$store.getters.getItems
        .filter((x) => x.business === this.getUser.username)
        .map((x) => {
          return {
            ...x,
            id: x.id,
            bestBefore: new Date(x.bestBefore.toDate()).toDateString(),
          };
        });
    },
    hasSelected: function () {
      return this.checkedRows.length > 0;
    },
    selectedList: function () {
      return this.checkedRows.map((x) => x.name).reduce((a, b) => a + ", " + b);
    },
  },
  methods: {
    resetItems: function () {
      this.checkedRows = [];
    },
    confirmDelete: function () {
      this.$buefy.dialog.confirm({
        title: "Delete Selected",
        message:
          "You are about to delete " +
          this.selectedList +
          ".<br>This action is irreversible!",
        confirmText: "Delete",
        type: "is-danger",
        hasIcon: true,
        onConfirm: this.deleteSelected,
      });
    },
    deleteSelected: function () {
      this.checkedRows
        .map((x) => x.id)
        .forEach((x) =>
          deleteItem(x).then(() => {
            console.log("delete item " + x);
            this.resetItems();
          })
        );
    },
  },
};
</script>

<style scoped>
.listings {
  width: 80%;
  margin: auto;
}

.button {
  margin: 20px 5px;
}
</style>
