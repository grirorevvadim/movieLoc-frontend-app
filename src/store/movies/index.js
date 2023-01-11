import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
export default {
  namespaced: true,
  state() {
    return {
      movies: [
        { id: 'm1', movieName: 'Spy', location: 'Budapest' },
        { id: 'm2', movieName: 'MI Fantom Protocol', location: 'Budapest' },
        { id: 'm3', movieName: 'Dune', location: 'Budapest' },
        { id: 'm4', movieName: 'World War Z', location: 'Budapest' },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
