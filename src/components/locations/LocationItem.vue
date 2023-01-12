<template>
  <li>
    <h3>{{ locationName }}</h3>
    <div class="actions">
      <base-button link to="/connect">Connect to Movie</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'locationName'],
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
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
</style>