import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
export default {
  namespaced: true,
  state() {
    return {
      locations: [
        // {id: 'l1', locationName: 'Budapest', country: 'Hungary'},
        // {id: 'l2', locationName: 'Wien', country: 'Austria'},
        // {id: 'l3', locationName: 'Barcelona', country: 'Spain'},
      ],
    };
  },
  mutations,
  actions,
  getters,
};
