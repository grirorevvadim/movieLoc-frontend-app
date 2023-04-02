import axios from "axios";
const LOC_URL = "http://localhost:8081/locations";
export default {
  locations(state) {
    axios
    .get(LOC_URL)
    .then((response) => {
      state.locations = response.data
      // console.log(state.movies);
    })
  // return state.movies;
    return state.locations;
  },
  location: (state) => (id) => {
    let locationName = '';
    const locationObject = state.locations.find((loc) => loc.id === id);
    if (locationObject) {
      locationName = locationObject.locationName;
    }
    return locationName;
  },
  hasLocations(state) {
    return state.locations && state.locations.length > 0;
  },
};
