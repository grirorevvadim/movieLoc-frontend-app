import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './pages/NotFound.vue';
import Connect from './pages/Connect.vue';
import MoviesList from './pages/movies/MoviesList.vue';
import MovieDetails from './pages/movies/MovieDetail.vue';
import MovieRegistration from './pages/movies/MovieRegistration.vue';
import LocationsList from './pages/locations/LocationsList.vue';
import LocationDetails from './pages/locations/LocationDetails.vue';
import LocationReg from './pages/locations/LocationRegistration.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/movies' },
    {
      path: '/movies',
      component: MoviesList,
    },
    { path: '/movies/register', component: MovieRegistration },
    { path: '/movies/:id', component: MovieDetails },
    { path: '/connect', component: Connect },
    {
      path: '/locations',
      component: LocationsList,
    },
    { path: '/location/register', component: LocationReg },
    { path: '/locations/:id', component: LocationDetails },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});
export default router;
