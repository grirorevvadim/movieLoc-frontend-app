export default {
  locations(state) {
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
