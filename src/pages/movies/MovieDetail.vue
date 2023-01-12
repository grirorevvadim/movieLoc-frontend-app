<template>
  <section>
    <base-card>
      <h2>{{ movie.movieName }}</h2>
      <h3>{{ location }}</h3>
      <h4>{{ movie.description }}</h4>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      movie: null,
    };
  },
  created() {
    this.movie = this.$store.getters['movies/movies'].find(
      (m) => m.id === this.$route.params.id
    );
  },
  computed: {
    location() {
      return this.$store.getters['locations/location'](this.movie.locationId);
    },
  },
};
</script>