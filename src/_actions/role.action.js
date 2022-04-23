import { roleConstants } from "../_constants";
import { roleService } from "../_services";
import { alertActions } from "./";

export const roleAction = {
  getRoles,
  setRole,
};

function getRoles() {
  return (dispatch) => {
    roleService.getRoles().then(
      (roles) => dispatch(success(roles.data)),

      (error) => dispatch(failure(error.toString()))
    );
  };

  function success(roles) {
    return { type: roleConstants.GET_ROLES_SUCCESS, roles };
  }
  function failure(error) {
    return { type: roleConstants.GET_ROLES_FAILURE, error };
  }
}

function setRole(role) {
  return (dispatch) => {
    roleService.setRole(role).then(
      (role) => {
        dispatch(success(role));
        dispatch(alertActions.success("role added successful"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function success(role) {
    return { type: roleConstants.SET_ROLE_SUCCESS, role };
  }
  function failure(error) {
    return { type: roleConstants.SET_ROLE_FAILURE, error };
  }
}
