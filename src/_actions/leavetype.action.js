import { leaveTypeConstants } from "../_constants";
import { leaveTypeService } from "../_services";
import { alertActions } from "./alert.action";

export const leaveTypeAction = {
  getLeaveType,
  setLeaveType,
  deleteLeaveType,
  updateLeaveType,
};

function getLeaveType() {
  return (dispatch) => {
    leaveTypeService.getLeaveType().then(
      (response) => {dispatch(success(response));dispatch(alertActions.clear());},
      (error) => dispatch(failure(error.toString()))
    );
  };

  function success(response) {
    return {
      type: leaveTypeConstants.GET_LEAVETYPE_SUCCESS,
      payload: response.data.data,
    };
  }

  function failure(error) {
    return { type: leaveTypeConstants.GET_LEAVETYPE_FAILURE, error };
  }
}

function setLeaveType(leavetype) {
  return (dispatch) => {
    leaveTypeService.setLeaveType(leavetype).then(
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
      type: leaveTypeConstants.SET_LEAVETYPE_SUCCESS,
      payload: response.data.data,
    };
  }
  function failure(error) {
    return { type: leaveTypeConstants.SET_LEAVETYPE_FAILURE, error };
  }
}

function deleteLeaveType(ID) {
  return (dispatch) => {
    leaveTypeService.deleteLeaveType(ID).then(
      (response) => {
        dispatch(success(ID));
        dispatch(alertActions.success(response.data));
      },
      (error) => {
        dispatch(failure(error.response.data));
        dispatch(alertActions.error(error.response.data));
      }
    );
  };

  function success(leaveTypeId) {
    return {
      type: leaveTypeConstants.DELETE_LEAVETYPE_SUCCESS,
      payload: { ID: leaveTypeId },
    };
  }
  function failure(error) {
    return { type: leaveTypeConstants.DELETE_LEAVETYPE_FAILURE, error };
  }
}

function updateLeaveType(request) {
  return (dispatch) => {
    leaveTypeService.updateLeaveType(request).then(
      (response) => {
        dispatch(success(request));
        dispatch(alertActions.success(response.data));
      },
      (error) => {
        dispatch(failure(error.response.data));
        dispatch(alertActions.error(error.response.data));
      }
    );
  };

  function success(request) {
    return {
      type: leaveTypeConstants.UPDATE_LEAVETYPE_SUCCESS,
      payload: request,
    };
  }
  function failure(error) {
    return { type: leaveTypeConstants.UPDATE_LEAVETYPE_FAILURE, error };
  }
}
