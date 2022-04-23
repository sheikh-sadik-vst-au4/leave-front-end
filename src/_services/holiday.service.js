import { authHeader } from "../_helpers";
import axios from "axios";
import * as url from "../helper/constant";
export const holidayService = {
  getHolidays,
  setHoliday,
  deleteHoliday,
  updateHoliday,
  setMultiHoliday,
};

async function getHolidays() {
  const requestOptions = {
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };

  return await axios.get(url.GET_HOLIDAYS_URL, requestOptions);
}

async function setHoliday(request) {
  const headers = authHeader();
  return await axios.post(url.POST_ADD_HOLIDAY_URL, request, {
    headers,
  });
}

async function setMultiHoliday(request) {
  const headers = authHeader();
  return await axios.post(url.POST_ADD_MULTIPLE_HOLIDAY_URL, request, {
    headers,
  });
}

async function deleteHoliday(ID) {
  const headers = authHeader();
  return await axios.delete(url.DELETE_HOLIDAY_URL + ID, {
    headers,
  });
}

async function updateHoliday(request) {
  const { _id, occasion, date } = request;
  const headers = authHeader();
  return await axios.put(
    url.PUT_HOLIDAY_URL + _id,
    { occasion, date },
    { headers }
  );
}
