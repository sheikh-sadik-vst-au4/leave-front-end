import { authHeader } from "../_helpers";
import axios from "axios";

export const BalanceLeave = {
    getBalanceLeaveEmp,
    getBalanceLeaveSelf,
    BLESingledetails
    
  };
  
  async function getBalanceLeaveEmp() {
    const requestOptions = {
      headers: { ...authHeader(), "Content-Type": "application/json" },
    };
  
    return await axios.get("http://3.132.85.97:9000/api/balance", requestOptions);
  }

  async function getBalanceLeaveSelf() {
    const requestOptions = {
      headers: { ...authHeader(), "Content-Type": "application/json" },
    };
  
    return await axios.get("http://3.132.85.97:9000/api/balance/self", requestOptions);
  }

  function BLESingledetails(id) {
    const requestOptions = {
      headers: { ...authHeader(), "Content-Type": "application/json" },
    };
  
    return axios.get(
      `http://3.132.85.97:9000/api/balance/${id}`,
      requestOptions
    );
  }