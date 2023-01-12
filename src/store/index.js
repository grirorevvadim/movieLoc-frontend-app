import { createStore } from 'vuex';
import moviesModule from './movies/index.js';
import locationsModule from './locations/index.js';

const store = createStore({
    modules:{
        movies: moviesModule,
        locations: locationsModule
    }
});
export default store;
