import { createStore } from 'vuex';
import moviesModule from './movies/index.js';

const store = createStore({
    modules:{
        movies: moviesModule
    }
});
export default store;
