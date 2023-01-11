<template>
  <the-navigation></the-navigation>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  components: {
    TheNavigation
  },
  data() {
    return {
      movies: [
        {id: 't1', movieName: 'Spy', location: 'Budapest'},
        {id: 't2', movieName: 'MI Fantom Protocol', location: 'Budapest'},
        {id: 't3', movieName: 'Dune', location: 'Budapest'},
      ],
      locations: [
        {id: 'u1', locationName: 'Budapest', country: 'Hungary'},
        {id: 'u1', locationName: 'Wien', country: 'Austria'},
      ],
    };
  },
  provide() {
    return {
      movies: this.movies,
      locations: this.locations,
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>