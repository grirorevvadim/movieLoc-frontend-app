<template>
  <section>FILTER</section>
  <div class="controls">
    <button>Refresh list</button>
    <router-link to="/movies/register">Add New Movie</router-link>
  </div>
  <ul v-if="hasMovies">
    <movie-item
      v-for="m in filteredMovies"
      :key="m.id"
      :movie-name="m.movieName"
      :location="m.location"
    ></movie-item>
  </ul>
  <h3 v-else> No Movies Found</h3>
</template>

<script>
import MovieItem from './MovieItem.vue';

export default {
  components: {
    MovieItem,
  },
  computed: {
    filteredMovies() {
      return this.$store.getters['movies/movies'];
    },
    hasMovies(){
      return this.$store.getters['movies/hasMovies'];
    }
  },
  methods: {
    confirmInput() {
      // do something
      this.$router.push('/movies');
    },
  },
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