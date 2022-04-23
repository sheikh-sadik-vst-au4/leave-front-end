import { alertConstants } from "../_constants";

export const alertActions = {
  success,
  error,
  clear,
};

function success(response) {
  return { type: alertConstants.SUCCESS, payload: response };
}

function error(response) {
  return { type: alertConstants.ERROR, payload: response };
}

function clear() {
  return { type: alertConstants.CLEAR };
}
