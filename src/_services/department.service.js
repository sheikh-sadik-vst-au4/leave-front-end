import { authHeader } from "../_helpers";
import axios from "axios";
import * as url from "../helper/constant";
export const departmentService = {
  setDepartment,
  getDepartments,
  updateDepartment,
  deleteDepartment,
  getDepartmentCheck,
  removeDepartment,
};

async function getDepartments() {
  const requestOptions = {
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };

  return await axios.get(url.GET_DEPARTMENTS_URL, requestOptions);
}

async function getDepartmentCheck(ID) {
  const requestOptions = {
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  return await axios.get(url.GET_DEPARTMENT_CHECK_URL + ID, requestOptions);
}

async function setDepartment(department) {
  const headers = authHeader();
  return await axios.post(url.POST_ADD_DEPARTMENT_URL, department, { headers });
}

async function deleteDepartment(ID) {
  const headers = authHeader();
  return await axios.delete(url.DELETE_DEPARTMENT_URL + ID, {
    headers,
  });
}

async function removeDepartment(request) {
  const headers = authHeader();
  return await axios.post(url.POST_REMOVE_DEPARTMENT_URL, request, {
    headers,
  });
}

async function updateDepartment(request) {
  const { _id, name } = request;
  const headers = authHeader();
  return await axios.put(
    url.PUT_DEPARTMENT_URL + _id,
    { name },
    {
      headers,
    }
  );
}
