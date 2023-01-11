<template>
  <section>FILTER</section>
  <button @click="confirmInput">Confirm</button>
  <ul>
    <movie-item v-for="m in movies" :key="m.id" :movie-name="m.movieName" :location="m.location"></movie-item>
  </ul>
</template>

<script>
import MovieItem from "./MovieItem.vue";

export default {
  components: {
    MovieItem,
  },
  inject: ['movies'],
  methods: {
    confirmInput() {
      // do something
      this.$router.push('/movies');
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>