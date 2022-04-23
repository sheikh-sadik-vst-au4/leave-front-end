import { alertConstants } from "../_constants";
const initailState = {};
export function alert(alert = initailState, action) {
  const { type, payload } = action;
  switch (type) {
    case alertConstants.SUCCESS:
      return {
        type: "success",
        status: payload.status,
        message: payload.message,
      };
    case alertConstants.ERROR:
      return {
        type: "error",
        status: payload.status,
        message: payload.message,
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return alert;
  }
}
