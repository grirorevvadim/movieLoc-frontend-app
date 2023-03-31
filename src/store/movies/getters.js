import axios from "axios";

const MOVIE_URL = "http://localhost:8081/movies";
export default {
   movies(state) {
    axios
      .get(MOVIE_URL)
      .then((response) => {
        state.movies = response.data
        // console.log(state.movies);
      })
    return state.movies;
  },
};
