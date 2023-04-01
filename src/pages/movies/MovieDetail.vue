<template>
  <section>
    <base-card v-if="isLoaded">
      <h2>{{ movie.movieName }}</h2>
      <h3>{{ location }}</h3>
      <h4>{{ movie.description }}</h4>
    </base-card>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movie: {
        movieName:'',
        location:'',
        description:''
      },
      isLoaded: false,
    };
  },
 async mounted() {
      axios
      .get('http://localhost:8081/movies/'+this.$route.params.id)
      .then((response) => {
        this.movie.movieName = response.data.movieName;
        this.movie.location = response.data.location;
        this.movie.description = response.data.description;
        this.isLoaded = true;
      })
  },
  computed: {
    location() {
      return this.$store.getters['locations/location'](this.movie.locationId);
    },
  },
};
</script>