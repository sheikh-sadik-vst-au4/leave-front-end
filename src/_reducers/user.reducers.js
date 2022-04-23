import { userConstants } from "../_constants";
const initialState = { loading: "", user: "", dashboard: "" };

export function user(user = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case userConstants.CREATE_USER_REQUEST:
      return { loading: true };
    case userConstants.CREATE_USER_SUCCESS:
      return {
        loading: false,
        user: payload,
      };
    case userConstants.CREATE_USER_FAILURE:
      return {
        loading: false,
        error: action.error,
      };
    case userConstants.GET_USER_REQUEST:
      return {
        loading: true,
      };
    case userConstants.GET_USER_SUCCESS:
      return {
        loading: false,
        user: payload,
      };
    case userConstants.GET_USER_FAILURE:
      return {
        loading: false,
        error: action.error,
      };
    case userConstants.GET_USER_PROFILE_REQUEST:
      return {
        loading: true,
        user: user.user,
        dashboard: user.dashboard,
      };
    case userConstants.GET_USER_PROFILE_SUCCESS:
      return {
        loading: false,
        user: payload.result,
        dashboard: user.dashboard,
      };
    case userConstants.GET_USER_PROFILE_FAILURE:
      return {
        loading: false,
        error: action.error,
      };
    case userConstants.GET_ALL_USERS_LIST_REQUEST:
      return {
        loading: true,
      };
    case userConstants.GET_ALL_USERS_LIST_SUCCESS:
      return {
        loading: false,
        userList: payload,
      };
    case userConstants.GET_ALL_USERS_LIST_FAILURE:
      return {
        loading: false,
        error: action.error,
      };
    case userConstants.UPDATE_USER_REQUEST:
      return {
        loading: true,
        };
    case userConstants.UPDATE_USER_SUCCESS:
      return {
        loading: false,
        user: payload,
      };
    case userConstants.UPDATE_USER_FAILURE:
      return {
        loading: false,
        error: action.error,
      };
    case userConstants.DELETE_USER_REQUEST:
      return {
        loading: true,
      };
    case userConstants.DELETE_USER_SUCCESS:
      return {
        loading: false,
        user: payload,
      };
    case userConstants.DELETE_USER_FAILURE:
      return {
        loading: false,
        ...user,
        error: action.error,
      };
    case userConstants.DASHBOARD_REQUEST:
      return {
        loading: true,
        user: user.user,
        dashboard: user.dashboard,
      };
    case userConstants.DASHBOARD_SUCCESS:
      return {
        loading: false,
        user: payload,
        dashboard: payload.result,
      };
    case userConstants.DASHBOARD_FAILURE:
      return {
        loading: false,
        error: action.error,
      };
    case userConstants.HISTORY_REQUEST:
      return {
        loading: true,
      };
    case userConstants.HISTORY_SUCCESS:
      return {
        loading: false,
        history: payload.result,
      };
    case userConstants.HISTORY_FAILURE:
      return {
        loading: false,
        error: action.error,
      };
    default:
      return user;
  }
}
