import axios from "axios";
import { authHeader } from "../_helpers";
import * as url from "../helper/constant";

export const leaveTypeService = {
  getLeaveType,
  setLeaveType,
  deleteLeaveType,
  updateLeaveType,
};

async function getLeaveType() {
  const requestOptions = {
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  return await axios.get(url.GET_LEAVETYPES_URL, requestOptions);
}

async function setLeaveType(details) {
  const headers = authHeader();
  return await axios.post(url.POST_ADD_LEAVETYPE_URL, details, { headers });
}

async function deleteLeaveType(ID) {
  const headers = authHeader();
  return await axios.delete(url.DELETE_LEAVETYPE_URL + ID, { headers });
}

async function updateLeaveType(request) {
  const { _id, name } = request;
  const headers = authHeader();
  return await axios.put(url.PUT_LEAVETYPE_URL + _id, { name }, { headers });
}
