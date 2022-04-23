import { authHeader } from "../_helpers";
import axios from "axios";
import * as url from "../helper/constant";
export const designationService = {
  getDesignations,
  setDesignation,
  deleteDesignation,
  updateDesignation,
  getDesignationCheck,
  removeDesignation,
};

async function getDesignations() {
  const requestOptions = {
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };

  return await axios.get(url.GET_DESIGNATIONS_URL, requestOptions);
}

async function getDesignationCheck(ID) {
  const requestOptions = {
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };

  return await axios.get(url.GET_DESIGNATION_CHECK_URL + ID, requestOptions);
}

async function setDesignation(designation) {
  const headers = authHeader();
  return await axios.post(url.POST_ADD_DESIGNATION_URL, designation, {
    headers,
  });
}

async function deleteDesignation(ID) {
  const headers = authHeader();
  return await axios.delete(url.DELETE_DESIGNATION_URL + ID, {
    headers,
  });
}

async function removeDesignation(request) {
  const headers = authHeader();
  return await axios.post(url.POST_REMOVE_DESIGNATION_URL, request, {
    headers,
  });
}

async function updateDesignation(request) {
  const { _id, name } = request;
  const headers = authHeader();
  return await axios.put(url.PUT_DESIGNATION_URL + _id, { name }, { headers });
}
