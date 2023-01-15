<template>
  <section>
    <base-card>
      <h2>Add New Movie</h2>
      <movie-form @save-data="saveData"></movie-form>
    </base-card>
  </section>
</template>

<script>
import MovieForm from './../../components/movies/MovieForm.vue';
export default {
  components: { MovieForm },
  methods: {
    saveData(data) {
      this.$store.dispatch('movies/addMovie', data);
      this.$router.replace('/movies');
    },
  },
};
</script>