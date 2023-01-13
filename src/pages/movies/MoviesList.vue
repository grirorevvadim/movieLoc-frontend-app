<template>
  <section>
    <movie-search @search-movie="returnMovie"></movie-search>
  </section>
  <base-card>
    <div class="controls">
      <base-button class="flat">Refresh list</base-button>
      <base-button link to="/movies/register">Add New Movie</base-button>
    </div>
    <ul v-if="hasMovies">
      <movie-item
        v-for="m in filteredMovies"
        :key="m.id"
        :id="m.id"
        :movie-name="m.movieName"
        :location="m.location"
      ></movie-item>
    </ul>
    <h3 v-else>No Movies Found</h3>
  </base-card>
</template>

<script>
import MovieItem from '../../components/movies/MovieItem.vue';
import MovieSearch from '../../components/movies/MovieSearch.vue';

export default {
  components: {
    MovieItem,
    MovieSearch,
  },
  data() {
    return {
      searchInput: '',
    };
  },
  computed: {
    filteredMovies() {
      const movies = this.$store.getters['movies/movies'];
      const search = movies.filter((movie) => {
        if (movie.movieName.includes(this.searchInput)) return movie;
      });
      if (search) return search;
      else return movies;
    },
    hasMovies() {
      return this.$store.getters['movies/hasMovies'];
    },
  },
  methods: {
    confirmInput() {
      // do something
      this.$router.push('/movies');
    },
    returnMovie(input) {
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