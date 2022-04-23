import { authHeader } from "../_helpers";
import axios from "axios";
import * as url from "../helper/constant";
export const roleService = {
  getRoles,
  setRole,
};

async function getRoles() {
  const requestOptions = {
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  return await axios.get(url.GET_ROLES_URL, requestOptions);
}

async function setRole(role) {
  const headers = authHeader();
  return await axios.post(url.POST_ADD_ROLE_URL, role, { headers });
}
