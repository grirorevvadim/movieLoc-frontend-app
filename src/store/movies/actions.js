export default {
  addMovie(context, data) {
    const movieData = {
      id: 'm6',
      movieName: data.movieName,
      description: data.desc,
    };

    context.commit('addMovie', movieData);
  },
};
