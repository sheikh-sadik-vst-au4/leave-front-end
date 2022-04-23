import { extraworkConstants } from "../_constants";
import { extraworkService } from "../_services";
import { alertActions } from "./";

export const extraworkAction = {
  applyextrawork,
  getAllExtraWork,
  getSingleExtraWork,
};

function applyextrawork(details) {
  return (dispatch) => {
    extraworkService.applyextrawork(details).then(
      (details) => {
        dispatch(success(details));
        dispatch(alertActions.success("Leave applyied successful"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function success(details) {
    return { type: extraworkConstants.EXTRAWORK_SUCCESS, details };
  }
  function failure(error) {
    return { type: extraworkConstants.EXTRAWORK_FAILURE, error };
  }
}

function getAllExtraWork(month, year) {
  return (dispatch) => {
    extraworkService.getAllExtraWork(month, year).then(
      (details) => dispatch(success(details)),

      (error) => dispatch(failure(error.toString()))
    );
  };

  function success(details) {
    return { type: extraworkConstants.EXTRAWORK_GETALL_SUCCESS, details };
  }
  function failure(error) {
    return { type: extraworkConstants.EXTRAWORK_GETALL_FAILURE, error };
  }
}

function getSingleExtraWork(id) {
  return (dispatch) => {
    dispatch(request());

    extraworkService.getSingleExtraWork(id).then(
      (details) => dispatch(success(details)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: extraworkConstants.EXTRAWORK_SINGLE_REQUEST };
  }
  function success(details) {
    return { type: extraworkConstants.EXTRAWORK_SINGLE_SUCCESS, details };
  }
  function failure(error) {
    return { type: extraworkConstants.EXTRAWORK_SINGLE_FAILURE, error };
  }
}
