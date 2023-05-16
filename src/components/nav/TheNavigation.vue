<template>
  <header>
    <div class="first">
      <div class="greeting"><span>Welcome to MovieLoc!</span></div>
      <div class="description">
        <img class="image1" :src="image1" />
        Here you can match movies and locations where it was filmed.
        <img class="image2" :src="image2" />
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <router-link to="/movies">Movies</router-link>
        </li>
        <li>
          <router-link to="/locations">Locations</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import image1 from '../layout/image1.png';
import image2 from '../layout/image2.png';
export default {
  data: function () {
    return {
      image1: image1,
      image2: image2,
    };
  },
};
</script>

<style scoped>
.greeting {
  background-color: hwb(198 21% 30%);
  width: 100%;
  height: 3rem;
  text-align: center;
  line-height:2;
  font-size: 22px;
  font-weight: 540;
}
.description {
  margin: 22px;
  width: 100%;
  height: 3rem;
  font-size: 20px;
  text-align: center;
  line-height: 5;
}
header {
  width: 100%;
  height: 14rem;
  background-color: #cdcde2;
}

nav {
  float: left;
  height: 50%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
}

li {
  margin: 0 0rem;
}

a {
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 12px 0px 0px 0px;
  cursor: pointer;
  border-color: hwb(198 21% 30%);
  color: rgb(0, 0, 0);
  padding: 1rem 3rem;
  display: inline-block;
  font-size: 20px;
}

img {
  display: block;
  max-width: 5%;
  height: auto;
}

.image1 {
  float: left;
  margin-left: 10em;
}

.image2 {
  margin-right: 10em;
  float: right;
}

a:hover,
a:active,
a.active {
  background-color: hwb(198 21% 30%);
}
</style>