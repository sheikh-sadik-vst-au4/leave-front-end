import { authHeader } from "./auth-header";
import axios from "axios";
export const helpers = {
  getSiteId,
  login,
  apiCall,
};

const apiUrl = process.env.REACT_APP_API_URI;

async function getSiteId(method, data) {
  // Default options are marked with *
  const response = await fetch(`${apiUrl}getSiteId`, {
    method: method, // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  return await response.json(); // parses JSON response into native JavaScript objects
}

async function login(method, data) {
  // Default options are marked with *
  const response = await fetch(`${apiUrl}auth/login`, {
    method: method, // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  return await response.json(); // parses JSON response into native JavaScript objects
}

async function apiCall(method, url, data) {
  // for multipart  dont stringify it
  const response = await axios(url, {
    method: method,
    mode: "cors", // no-cors, *cors, same-origin
    headers: authHeader(),
    body: JSON.stringify(data),
  });

  return await response.json();
}
