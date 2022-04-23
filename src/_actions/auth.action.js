import { authConstants } from "../_constants";
import { authService } from "../_services";
import { alertActions } from "./";
import App from "../helper/Appbasic";
import jwt_decode from "jwt-decode";

export const authActions = {
  login,
  forget,
  reset,
  resetUpdate,
  logout,
};

function login(values) {
  return (dispatch) => {
    dispatch(request(values));
    authService.login(values).then(
      (user) => {
        const token = jwt_decode(user.data.result.token);

        App.setToken(user.data.result.token);
        App.setCurrentUser(JSON.stringify(token));
        App.setRoleID(
          token.scope.role.name === "HR"
            ? 3
            : token.scope.role.name === "Team Lead"
            ? 2
            : token.scope.role.name === "Super Admin"
            ? 1
            : 4
        );

        dispatch(success(user));
        dispatch(alertActions.success(user));
      },
      (error) => {
        dispatch(failure(error.response.data));
        dispatch(alertActions.error(error.response.data));
      }
    );
  };

  function request(user) {
    return { type: authConstants.LOGIN_REQUEST, user };
  }

  function success(user) {
    return { type: authConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: authConstants.LOGIN_FAILURE, error };
  }
}

function forget(req) {
  return (dispatch) => {
    dispatch(request());
    authService.forget(req).then(
      (response) => {
        dispatch(success(response));
        dispatch(alertActions.success(response));
      },
      (error) => {
        dispatch(failure(error.response.data));
        dispatch(alertActions.error(error.response.data));
      }
    );
  };

  function request() {
    return { type: authConstants.FORGET_REQUEST };
  }

  function success(response) {
    return { type: authConstants.FORGET_SUCCESS, response };
  }
  function failure(error) {
    return { type: authConstants.FORGET_FAILURE, error };
  }
}

function reset(req) {
  return (dispatch) => {
    dispatch(request());
    authService.reset(req).then(
      (response) => {
        dispatch(success(response));
        dispatch(alertActions.success(response));
      },
      (error) => {
        dispatch(failure(error.response.data));
        dispatch(alertActions.error(error.response.data));
      }
    );
  };

  function request() {
    return { type: authConstants.RESET_REQUEST };
  }

  function success(response) {
    return { type: authConstants.RESET_SUCCESS, response };
  }
  function failure(error) {
    return { type: authConstants.RESET_FAILURE, error };
  }
}

function resetUpdate(req) {
  return (dispatch) => {
    dispatch(request());
    authService.resetUpdate({'token':req}).then(
      (response) => {
        dispatch(success(response));
        
      },
      (error) => {
        dispatch(failure(error.response.data));
        dispatch(alertActions.error(error.response.data));
      }
    );
  };

  function request() {
    return { type: authConstants.RESET_UPDATE_REQUEST };
  }

  function success(response) {
    return { type: authConstants.RESET_UPDATE_SUCCESS, response };
  }
  function failure(error) {
    return { type: authConstants.RESET_UPDATE_FAILURE, error };
  }
}

function logout() {
  return (dispatch) => {
    
    dispatch(alertActions.clear());
    sessionStorage.clear();
    
  }
  // function clear() {
  //   return { type: authConstants.LOGOUT };
  // }
 
 
}
