import { authConstants } from "../_constants";

export function authentication(state = {}, action) {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        loading: true,
        loggedIn: false,
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        loading: false,
        user: action.user,
      };
    case authConstants.LOGIN_FAILURE:
      return {
        loading: false,
      };
    case authConstants.FORGET_REQUEST:
      return {
        loading: true,
      };
    case authConstants.FORGET_SUCCESS:
      return {
        loading: false,
        user: action.user,
      };
    case authConstants.FORGET_FAILURE:
      return {
        loading: false,
        user: action.user,
      };
    case authConstants.RESET_REQUEST:
      return {
        loading: true,
      };
    case authConstants.RESET_SUCCESS:
      return {
        loading: false,
        user: action.user,
      };
    case authConstants.RESET_FAILURE:
      return {
        loading: false,
        user: action.user,
      };
      case authConstants.RESET_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case authConstants.RESET_UPDATE_SUCCESS:
      return {
        loading: false,
        password: action.response.data.result,
      };
    case authConstants.RESET_UPDATE_FAILURE:
      return {
        loading: false,
        
      };
    case authConstants.LOGOUT:
      return {
        loading: false,
      };
    default:
      return state;
  }
}
