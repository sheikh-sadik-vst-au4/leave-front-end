import { userConstants } from "../_constants";
import { userService } from "../_services";
import { alertActions } from "./alert.action";

export const userActions = {
  createUser,
  getUserById,
  getUserProfile,
  getAllUsersList,
  updateUserById,
  deleteUserById,
  dashboard,
  history,
};

function createUser(req) {
  return (dispatch) => {
    dispatch(request());
    userService.createUser(req).then(
      (response) => {
        dispatch(success(response));
        dispatch(alertActions.success(response.data));
      },
      (error) => {
        dispatch(failure(error.response.data));
        dispatch(alertActions.error(error.response.data));
      }
    );
  };

  function request() {
    return { type: userConstants.CREATE_USER_REQUEST };
  }

  function success(response) {
    return {
      type: userConstants.CREATE_USER_SUCCESS,
      payload: response.data.data.result,
    };
  }

  function failure(error) {
    return { type: userConstants.CREATE_USER_FAILURE, error };
  }
}

function getUserById(ID) {
  return (dispatch) => {
    dispatch(request());
    userService.getUserById(ID).then(
      (response) => dispatch(success(response)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: userConstants.GET_USER_REQUEST };
  }

  function success(response) {
    return {
      type: userConstants.GET_USER_SUCCESS,
      payload: response.data.data.result,
    };
  }
  function failure(error) {
    return { type: userConstants.GET_USER_FAILURE, error };
  }
}

function getUserProfile() {
  return (dispatch) => {
    dispatch(request());

    userService.getUserProfile().then(
      (response) => dispatch(success(response)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: userConstants.GET_USER_PROFILE_REQUEST };
  }
  function success(response) {
    return {
      type: userConstants.GET_USER_PROFILE_SUCCESS,
      payload: response.data.data,
    };
  }
  function failure(error) {
    return { type: userConstants.GET_USER_PROFILE_FAILURE, error };
  }
}

function getAllUsersList() {
  return (dispatch) => {
    dispatch(request());

    userService.getAllUsersList().then(
      (response) =>{dispatch(alertActions.clear()); dispatch(success(response))},
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: userConstants.GET_ALL_USERS_LIST_REQUEST };
  }
  function success(response) {
    return {
      type: userConstants.GET_ALL_USERS_LIST_SUCCESS,
      payload: response.data.data.result,
    };
  }
  function failure(error) {
    return { type: userConstants.GET_ALL_USERS_LIST_FAILURE, error };
  }
}

function updateUserById(id, request) {
  return (dispatch) => {
    userService.updateUserById(id, request).then(
      (response) => {
        dispatch(success(response));
        dispatch(alertActions.success(response.data));
      },
      (error) => {
        dispatch(failure(error.response.data));
        dispatch(alertActions.error(error.response.data));
      }
    );
  };

  function success(response) {
    return {
      type: userConstants.UPDATE_USER_SUCCESS,
      payload: response.data.data.result,
    };
  }
  function failure(error) {
    return { type: userConstants.UPDATE_USER_FAILURE, error };
  }
}

function deleteUserById(id) {
  return (dispatch) => {
    userService.deleteUserById(id).then(
      (response) => {
        dispatch(success(response));
        dispatch(alertActions.success(response.data));
      },
      (error) => {
        dispatch(failure(error.response.data));
        dispatch(alertActions.error(error.response.data));
      }
    );
  };

  function success(response) {
    return {
      type: userConstants.DELETE_USER_SUCCESS,
      payload: response.data.data.result,
    };
  }
  function failure(error) {
    return { type: userConstants.DELETE_USER_FAILURE, error };
  }
}

function dashboard() {
  return (dispatch) => {
    dispatch(request());
    userService.dashboard().then(
      (response) => {
        dispatch(success(response));
        dispatch(alertActions.clear());
      },
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: userConstants.DASHBOARD_REQUEST };
  }
  function success(response) {
    return {
      type: userConstants.DASHBOARD_SUCCESS,
      payload: response.data.data,
    };
  }
  function failure(error) {
    return { type: userConstants.DASHBOARD_FAILURE, error };
  }
}

function history(Id) {
  return (dispatch) => {
    userService.history(Id).then(
      (response) => dispatch(success(response)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function success(response) {
    return {
      type: userConstants.HISTORY_SUCCESS,
      payload: response.data.data,
    };
  }
  function failure(error) {
    return { type: userConstants.HISTORY_FAILURE, error };
  }
}
