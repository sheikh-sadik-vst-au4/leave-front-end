import { roleConstants } from "../_constants";

export function role(state = {}, action) {
  switch (action.type) {
    case roleConstants.GET_ROLES_REQUEST:
      return {
        loading: true,
        role: action.roles,
      };
    case roleConstants.GET_ROLES_SUCCESS:
      return {
        loading: false,
        role: action.roles.data.result,
      };
    case roleConstants.GET_ROLES_FAILURE:
      return {
        error: action.error,
      };
    case roleConstants.SET_ROLE_REQUEST:
      return {
        role: action.role,
      };
    case roleConstants.SET_ROLE_SUCCESS:
      return {
        role: action.roles.data.result,
      };
    case roleConstants.SET_ROLE_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
