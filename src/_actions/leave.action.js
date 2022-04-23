import { leaveConstants } from "../_constants";
import { leaveService } from "../_services";
import { alertActions } from "./";

export const leaveAction = {
  applyleave,
  leavedetails,
  leaveSingledetails,
  leaveActions,
  getAllUserLeaves,
  deleteLeave
};

function applyleave(req) {
  return (dispatch) => {
    dispatch(request());
    leaveService.applyleave(req).then(
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
    return { type: leaveConstants.APPLY_LEAVE_REQUEST };
  }
  function success(response) {
    return { type: leaveConstants.APPLY_LEAVE_SUCCESS, response };
  }
  function failure(error) {
    return { type: leaveConstants.APPLY_LEAVE_FAILURE, error };
  }
}

function leavedetails(status) {
  return (dispatch) => {
    dispatch(request());

    leaveService.leavedetails(status).then(
      (response) => {dispatch(success(response.data.data));dispatch(alertActions.clear());},

      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: leaveConstants.GETALL_REQUEST };
  }
  function success(details) {
    return { type: leaveConstants.GETALL_SUCCESS, details };
  }
  function failure(error) {
    return { type: leaveConstants.GETALL_FAILURE, error };
  }
}

function leaveSingledetails(id) {
  return (dispatch) => {
    dispatch(request());

    leaveService.leaveSingledetails(id).then(
      (details) => dispatch(success(details)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: leaveConstants.GETSINGLE_REQUEST };
  }
  function success(details) {
    return { type: leaveConstants.GETSINGLE_SUCCESS, details };
  }
  function failure(error) {
    return { type: leaveConstants.GETSINGLE_FAILURE, error };
  }
}

function leaveActions(id, detail) {
  return (dispatch) => {
    dispatch(request());

    leaveService.leaveAction(id, detail).then(
      (details) =>{ dispatch(success(details));
        dispatch(alertActions.success(details.data));
        // dispatch(alertActions.clear());
      },
      (error) => dispatch(failure(error.toString()))
    );
  };
  function request() {
    return { type: leaveConstants.GETACTION_REQUEST };
  }
  function success(details) {
    return { type: leaveConstants.GETACTION_SUCCESS, details };
  }
  function failure(error) {
    return { type: leaveConstants.GETACTION_FAILURE, error };
  }
}

function getAllUserLeaves(status, month, year) {
  return (dispatch) => {
    dispatch(request());
    leaveService.getAllUserLeaves(status, month, year).then(
      (response) => dispatch(success(response)),
      (error) => dispatch(failure(error.toString()))
    );
  };
  function request() {
    return { type: leaveConstants.GET_ALL_USERS_LEAVES_REQUEST };
  }
  function success(response) {
    return {
      type: leaveConstants.GET_ALL_USERS_LEAVES_SUCCESS,
      payload: response.data.data.result,
    };
  }
  function failure(error) {
    return { type: leaveConstants.GET_ALL_USERS_LEAVES_FAILURE, error };
  }
}

function deleteLeave(ID) {
  return (dispatch) => {
    leaveService.deleteLeave(ID).then(
      (response) => {
        dispatch(success(ID));
        dispatch(alertActions.success(response.data));
        dispatch(alertActions.clear());
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.response.data));
      }
    );
  };

  function success(leaveId) {
    return {
      type: leaveConstants.DELETE_LEAVES_SUCCESS,
      payload: { ID: leaveId },
    };
  }
  function failure(error) {
    return { type: leaveConstants.DELETE_LEAVES_FAILURE, error };
  }
}
