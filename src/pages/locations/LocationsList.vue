<template>
  <section>FILTER</section>
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

export default {
  components: {
    LocationItem,
  },
  computed: {
    filteredLocations() {
      return this.$store.getters['locations/locations'];
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