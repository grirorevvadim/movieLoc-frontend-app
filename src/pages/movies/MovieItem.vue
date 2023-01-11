<template>
  <li>
    <h3>{{ movieName }}</h3>
    <div class="location" >{{ location }}</div>
  </li>
</template>

<script>
export default {
  props: ['movieName','location'],
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

.location {
  border-radius: 40px;
  background-color: #ccc;
  color: #252525;
  padding: 0.25rem 1rem;
  display: inline-block;
}

</style>