<template>
  <section>
    <base-card>
      <h2>{{ movieName }}</h2>
      <h3>{{ location }}</h3>
      <h4>Description</h4>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      movieLocation: null,
    };
  },
  created(){
    // this.movieLocation = this.$store.getters['locations/locations'].find(loc => loc.id)
  }
};
</script>