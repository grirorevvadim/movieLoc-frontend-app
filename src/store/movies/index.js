import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
export default {
  namespaced: true,
  state() {
    return {
      movies: [
        { id: 'm1', movieName: 'Spy', location: 'l1' , description:'Spy desc' },
        { id: 'm2', movieName: 'MI Fantom Protocol', location: 'l2' , description:'MI desc'},
        { id: 'm3', movieName: 'Dune', location: 'l1', description:'Dune desc' },
        { id: 'm4', movieName: 'World War Z', location: 'l1', description:'WWZ desc' },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
