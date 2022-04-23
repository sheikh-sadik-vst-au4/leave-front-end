import { authHeader } from "../_helpers";
import axios from "axios";

export const extraworkService = {
  applyextrawork,
  getAllExtraWork,
  getSingleExtraWork,
};

async function applyextrawork(details) {
  const data = details;
  const headers = authHeader();

  return await axios.post(
    "http://3.132.85.97:9000/api/extra-work",
    data,
    {
      headers,
    }
  );
}

async function getAllExtraWork(month = "", year = "") {
  const requestOptions = {
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };

  return await axios.get(
    `http://3.132.85.97:9000/api/extra-work?month=${month}&year=${year}`,
    requestOptions
  );
}

function getSingleExtraWork(id) {
  const requestOptions = {
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };

  return axios.get(
    `http://3.132.85.97:9000/api/extra-work/${id}`,
    requestOptions
  );
}
