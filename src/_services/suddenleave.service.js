import { authHeader } from "../_helpers";
import axios from "axios";
import * as url from "../helper/constant";
export const suddenLeaveService = {
  getAllSuddenLeaves,
  createSuddenLeave,
  getSuddenLeaveById,
};

async function getAllSuddenLeaves(month = "", year = "") {
  const requestOptions = {
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  return await axios.get(
    `${url.GET_ALL_SUDDEN_LEAVE_URL}?month=${month}&year=${year}`,
    requestOptions
  );
}

async function getSuddenLeaveById(id) {
  const requestOptions = {
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  return await axios.get(url.GET_SUDDEN_LEAVE_BY_ID_URL + id, requestOptions);
}

async function createSuddenLeave(request) {
  const headers = authHeader();
  return await axios.post(url.POST_SUDDEN_LEAVE_URL, request, { headers });
}
