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
      locations: [
        {id: 'u1', locationName: 'Budapest', country: 'Hungary'},
        {id: 'u1', locationName: 'Wien', country: 'Austria'},
      ],
    };
  },
  provide() {
    return {
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