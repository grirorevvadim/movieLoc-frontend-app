<template>
  <section>
    <location-search @search-location="returnLocation"> </location-search>
  </section>
  <base-card>
    <div class="controls">
      <base-button class="flat">Refresh list</base-button>
      <base-button link to="/locations/register">Add New Location</base-button>
    </div>
    <ul v-if="hasLocations">
      <location-item
        v-for="l in filteredLocations"
        :key="l.id"
        :id="l.id"
        :location-name="l.locationName"
      ></location-item>
    </ul>
    <h3 v-else>No Locations Found</h3>
  </base-card>
</template>

<script>
import LocationItem from '../../components/locations/LocationItem.vue';
import LocationSearch from '../../components/locations/LocationSearch.vue';

export default {
  components: {
    LocationItem,
    LocationSearch,
  },
  data() {
    return {
      searchInput: '',
    };
  },
  computed: {
    filteredLocations() {
      const locs = this.$store.getters['locations/locations'];
      const search = locs.filter((loc) => {
        if (loc.locationName.includes(this.searchInput)) return loc;
      });
      if (search) return search;
      else return locs;
    },
    hasLocations() {
      return this.$store.getters['locations/hasLocations'];
    },
  },
  methods: {
    confirmInput() {
      // do something
      this.$router.push('/locations');
    },
    returnLocation(input) {
      this.searchInput = input;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}

li {
  border-radius: 20px;
}
</style>