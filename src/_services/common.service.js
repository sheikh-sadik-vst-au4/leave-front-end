import { authHeader } from "../_helpers";
import axios from "axios";
import * as url from "../helper/constant";
export const commonService = {
  getCountry,
  getStates,
};

async function getCountry() {
  const requestOptions = {
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };

  return await axios.get(url.GET_COUNTRIES_URL, requestOptions);
}

async function getStates(id) {
  const requestOptions = {
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };

  return await axios.get(url.GET_STATES_URL + id, requestOptions);
}
