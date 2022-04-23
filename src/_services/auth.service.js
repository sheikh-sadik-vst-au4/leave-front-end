import axios from "axios";
import * as url from "../helper/constant";

export const authService = {
  login,
  forget,
  reset,
  resetUpdate,
  logout,
  
};

async function login(values) {
  const data = await axios.post(url.POST_LOGIN_URL, values);
  return data.data;
  
}

async function forget(values) {
  const data = await axios.post("http://3.132.85.97:9000/api/auth/forgot-password", values);
  return data.data;
  
}
async function reset(values) {
  const data = await axios.post("http://3.132.85.97:9000/api/auth/reset-password", values);
  return data.data;
  
}

async function resetUpdate(values) {
  const data = await axios.post("http://3.132.85.97:9000/api/auth/reset-password-updated", values);
  return data.data;
  
}

function logout() {
  // remove user from local storage to log user out
  sessionStorage.clear();
}
