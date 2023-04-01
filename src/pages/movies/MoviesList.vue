<template>
  <section>
    <movie-search @search-movie="returnMovie"></movie-search>
  </section>
  <base-card>
    <div class="controls">
      <base-button @click="getMovies" class="flat">Refresh list</base-button>
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
import axios from "axios";

export default {
  components: {
    MovieItem,
    MovieSearch,
  },
  data() {
    return {
      movies:[],
      searchInput: '',
    };
  },
  mounted() {
        axios
      .get('http://localhost:8081/movies')
      .then((response) => {
        this.movies = response.data;
      })
  },
  computed: {
    filteredMovies() {
      const movies = this.movies;
      const search = movies.filter((movie) => {
        let input =this.searchInput.trim();
        input = input.toLowerCase();
        if (movie.movieName.toLowerCase().includes(input)) return movie;
      });
      if (search) return search;
      else return movies;
    },
    hasMovies() {
      return this.movies.length > 0;
    },
  },
  methods: {
    confirmInput() {
      this.$router.push('/movies');
    },
    returnMovie(input) {
      this.searchInput = input;
    },
     getMovies(){
      axios
      .get('http://localhost:8081/movies')
      .then((response) => {
        this.movies = response.data;
      })
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