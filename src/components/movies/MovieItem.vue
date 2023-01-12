<template>
  <li>
    <h3>{{ movieName }}</h3>
    <h4>Location is: {{ location }}</h4>
    <div class="location">{{ location }}</div>
    <div class="actions">
      <base-button class="outline" link :to="movieDetailsLink"
        >Details</base-button
      >
      <base-button link to="/connect">Connect to location</base-button>
    </div>
  </li>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';
export default {
  components: { BaseButton },
  props: ['id', 'movieName', 'location'],
  computed: {
    movieDetailsLink() {
      return '/movies/' + this.id;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

h3 {
  margin: 0.5rem 0;
}

.actions {
  display:flex;
  justify-content:flex-end;
  align-items: flex-end;
}
</style>