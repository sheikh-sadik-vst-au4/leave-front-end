import { authHeader } from "../_helpers";
import axios from "axios";
import * as url from "../helper/constant";

export const userService = {
  createUser,
  getAllUsersList,
  getUserById,
  getUserProfile,
  updateUserById,
  deleteUserById,
  dashboard,
  history
};

async function createUser(request) {
  const headers = authHeader();
  return await axios.post(url.POST_CREATE_USER_URL, request, { headers });
}

async function getUserById(id) {
  const reqOptions = {
    headers: authHeader(),
  };
  return await axios.get(url.GET_USER_URL + id, reqOptions);
}

async function getUserProfile() {
  const reqOptions = {
    headers: authHeader(),
  };
  return await axios.get(url.GET_USER_PROFILE_URL, reqOptions);
}

async function getAllUsersList() {
  const reqOptions = {
    headers: authHeader(),
  };
  return await axios.get(url.GET_ALL_USERS_URL, reqOptions);
}

async function updateUserById(Id, request) {
  const reqOptions = {
    headers: authHeader(),
  };
  return await axios.put(url.PUT_USER_URL + Id, request, reqOptions);
}

async function deleteUserById(Id) {
  const reqOptions = {
    headers: authHeader(),
  };
  return await axios.delete(url.DELETE_USER_URL + Id, reqOptions);
}

async function dashboard() {
  const reqOptions = {
    headers: authHeader(),
  };
  return await axios.get("http://3.132.85.97:9000/api/user/dashboard", reqOptions);
}

async function history(id) {
  const reqOptions = {
    headers: authHeader(),
  };
  return await axios.get(`http://3.132.85.97:9000/api/user/history/employee/${id}`, reqOptions);
}
