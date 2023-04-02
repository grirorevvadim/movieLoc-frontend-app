<template>
  <li>
    <h3>{{ city }}</h3>
    <h3>{{ country }}</h3>
    <div class="actions">
      <base-button link to="/connect">Connect to Movie</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'city','country'],
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