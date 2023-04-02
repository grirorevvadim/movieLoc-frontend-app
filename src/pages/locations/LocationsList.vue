<template>
  <section>
    <location-search @search-location="returnLocation"> </location-search>
  </section>
  <base-card>
    <div class="controls">
      <base-button @click="getLocations" class="flat">Refresh list</base-button>
      <base-button link to="/locations/register">Add New Location</base-button>
    </div>
    <ul v-if="hasLocations">
      <location-item
        v-for="l in filteredLocations"
        :key="l.id"
        :id="l.id"
        :city="l.city"
        :country="l.country"
      ></location-item>
    </ul>
    <h3 v-else>No Locations Found</h3>
  </base-card>
</template>

<script>
import LocationItem from '../../components/locations/LocationItem.vue';
import LocationSearch from '../../components/locations/LocationSearch.vue';
import axios from "axios";

export default {
  components: {
    LocationItem,
    LocationSearch,
  },
  data() {
    return {
      locs:[],
      searchInput: '',
    };
  },
    mounted() {
        axios
      .get('http://localhost:8081/locations')
      .then((response) => {
        this.locs = response.data;
      })
  },
  computed: {
    filteredLocations() {
      const locs = this.locs;
      const search = locs.filter((loc) => {
                let input =this.searchInput.trim();
        input = input.toLowerCase();
        if (loc.city.toLowerCase().includes(input)) return loc;
      });
      if (search) return search;
      else return locs;
    },
    hasLocations() {
      return this.locs.length>0;
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
    getLocations(){
      axios
      .get('http://localhost:8081/locations')
      .then((response) => {
        this.locs = response.data
        // console.log(state.movies);
      })
    }
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