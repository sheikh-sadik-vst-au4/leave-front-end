import { authHeader } from "../_helpers";
import axios from "axios";

export const employeeService = {
    getEmployeeDetails,
    getEmployeeSingle,
    employeeList,
    employeeSingleList,
    employeeUpdate
};

async function getEmployeeDetails() {
  const requestOptions = {
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };

  return await axios.get("http://3.132.85.97:9000/api/leaves/list?queryLimit=all&page=1", requestOptions);
}

async function getEmployeeSingle(id) {
  const requestOptions = {
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };

  return await axios.get(`http://3.132.85.97:9000/api/leaves/${id}`, requestOptions);
}

async function employeeList() {
  const requestOptions = {
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };

  return await axios.get("http://3.132.85.97:9000/api/user", requestOptions);
}


async function employeeSingleList(id) {
  const requestOptions = {
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };

  return await axios.get(`http://3.132.85.97:9000/api/user/${id}`, requestOptions);
}



async function employeeUpdate(id,details) {
  const headers = authHeader();
  return await axios.put(`http://3.132.85.97:9000/api/user/${id}`, details, { headers });
}