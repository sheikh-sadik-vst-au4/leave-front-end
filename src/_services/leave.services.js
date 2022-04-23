import { authHeader } from "../_helpers";
import axios from "axios";
import * as url from "../helper/constant";

export const leaveService = {
  applyleave,
  leavedetails,
  leaveSingledetails,
  leaveAction,
  getAllUserLeaves,
  deleteLeave
};

async function applyleave(details) {
  const data = details;
  const headers = authHeader();

  return await axios.post(url.POST_APPLY_LEAVE_URL, data, {
    headers,
  });
}

async function leavedetails(status) {
  const requestOptions = {
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  return await axios.get(url.GET_USER_LEAVE_URL + status, requestOptions);
}

async function getAllUserLeaves(status, month = "", year = "") {
  const requestOptions = {
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  return await axios.get(
    `${url.GET_ALL_USERS_LEAVES_URL}${status}&month=${month}&year=${year}`,
    requestOptions
  );
}

async function leaveSingledetails(id) {
  const requestOptions = {
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };

  return await axios.get(
    `http://3.132.85.97:9000/api/leaves/${id}`,
    requestOptions
  );
}

async function leaveAction(id, details) {
  const headers = authHeader();
  return await axios.put(
    `http://3.132.85.97:9000/api/leaves/${id}`,
    details,
    { headers }
  );
}

async function deleteLeave(ID) {
  const headers = authHeader();
  return await axios.delete(`http://3.132.85.97:9000/api/leaves/${ID}`, {
    headers,
  });
}
