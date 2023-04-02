import axios from "axios";
export default {
  async addMovie(context, data) {
    const movieData = {
      id: data.id,
      movieName: data.movieName,
      description: data.desc,
    };
    let responseData;
    axios.post("http://localhost:8081/movies", movieData)
    .then(response =>responseData  = response.data);

    context.commit('addMovie', movieData);
  },

};
