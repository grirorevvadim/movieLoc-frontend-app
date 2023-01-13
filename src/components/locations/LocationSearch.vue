<template>
  <base-card>
    <h2>Search Location</h2>
    <span class="search">
      <input
        type="text"
        name="search"
        id="location-search"
        v-model="searchCriteria"
      />
      <base-button @click="search">Search</base-button>
    </span>
  </base-card>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';
export default {
  components: { BaseButton },
  emits:['search-location'],
  data() {
    return {
      searchCriteria: '',
    };
  },
  methods:{
    search(){
        this.$emit('search-location',this.searchCriteria);
    }
  }
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.search {
  margin-right: 1rem;
}

.search input {
  vertical-align: middle;
  width: 70%;
  height:1cm;
  font-size: 1.5rem;
}
</style>