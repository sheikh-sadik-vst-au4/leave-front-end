import { suddenLeaveConstants } from "../_constants";
import { suddenLeaveService } from "../_services";
import { alertActions } from "./";

export const suddenLeaveAction = {
  getAllSuddenLeaves,
  createSuddenLeave,
  getSuddenLeaveById,
};

function getAllSuddenLeaves(month, year) {
  return (dispatch) => {
    suddenLeaveService.getAllSuddenLeaves(month, year).then(
      (response) => dispatch(success(response)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function success(response) {
    return {
      type: suddenLeaveConstants.GET_ALL_SUDDEN_LEAVES_SUCCESS,
      payload: response.data.data.result,
    };
  }
  function failure(error) {
    return { type: suddenLeaveConstants.GET_ALL_SUDDEN_LEAVES_FAILURE, error };
  }
}

function getSuddenLeaveById(Id) {
  return (dispatch) => {
    suddenLeaveService.getSuddenLeaveById(Id).then(
      (response) => dispatch(success(response)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function success(response) {
    return {
      type: suddenLeaveConstants.GET_SUDDEN_LEAVE_SUCCESS,
      payload: response.data.data.result,
    };
  }
  function failure(error) {
    return { type: suddenLeaveConstants.GET_SUDDEN_LEAVE_FAILURE, error };
  }
}

function createSuddenLeave(req) {
  return (dispatch) => {
    dispatch(request());
    suddenLeaveService.createSuddenLeave(req).then(
      (response) => {
        dispatch(success(response));
        dispatch(alertActions.success(response.data));
        dispatch(alertActions.clear());
      },
      (error) => {
        dispatch(failure(error.response.data));
        dispatch(alertActions.error(error.response.data));
      }
    );
  };

  function request() {
    return {
      type: suddenLeaveConstants.SET_SUDDEN_LEAVE_REQUEST,
    };
  }

  function success(response) {
    return {
      type: suddenLeaveConstants.SET_SUDDEN_LEAVE_SUCCESS,
      payload: response.data.data.result,
    };
  }
  function failure(error) {
    return { type: suddenLeaveConstants.SET_SUDDEN_LEAVE_FAILURE, error };
  }
}
