import httpService from "./httpService";

const LOCATION_URL = "http://127.0.0.1:8000/api/location/";

const GET_STATE_URL = LOCATION_URL + "states";
const GET_STATE_AND_CITIES_URL = LOCATION_URL + "states_and_cities";

const get_states = () => {
  return httpService.get(GET_STATE_URL);
};

const get_states_and_cities = () => {
  return httpService.get(GET_STATE_AND_CITIES_URL);
};

export default {
  get_states: get_states,
  get_states_and_cities: get_states_and_cities,
};
