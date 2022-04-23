import { designationConstants } from "../_constants";
import { designationService } from "../_services";
import { alertActions } from ".";

export const designationAction = {
  getDesignations,
  setDesignation,
  deleteDesignation,
  updateDesignation,
  getDesignationCheck,
  removeDesignation,
};

function getDesignations() {
  return (dispatch) => {
    designationService.getDesignations().then(
      (response) => dispatch(success(response)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function success(response) {
    return {
      type: designationConstants.GET_DESIGNATION_SUCCESS,
      payload: response.data.data,
    };
  }

  function failure(error) {
    return { type: designationConstants.GET_DESIGNATION_FAILURE, error };
  }
}

function getDesignationCheck(ID) {
  return (dispatch) => {
    dispatch(request());
    designationService.getDesignationCheck(ID).then(
      (response) => dispatch(success(response)),
      (error) => dispatch(failure(error.toString()))
    );
  };
  function request() {
    return {
      type: designationConstants.GET_DESIGNATION_CHECK_REQUEST,
    };
  }

  function success(response) {
    return {
      type: designationConstants.GET_DESIGNATION_CHECK_SUCCESS,
      payload: response.data.data,
    };
  }

  function failure(error) {
    return {
      type: designationConstants.GET_DESIGNATION_CHECK_FAILURE_FAILURE,
      error,
    };
  }
}

function setDesignation(designation) {
  return (dispatch) => {
    designationService.setDesignation(designation).then(
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

  function success(response) {
    return {
      type: designationConstants.SET_DESIGNATION_SUCCESS,
      payload: response.data.data,
    };
  }
  function failure(error) {
    return { type: designationConstants.SET_DESIGNATION_FAILURE, error };
  }
}

function deleteDesignation(ID) {
  return (dispatch) => {
    designationService.deleteDesignation(ID).then(
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

  function success(designationId) {
    return {
      type: designationConstants.DELETE_DESIGNATION_SUCCESS,
      payload: { ID: designationId },
    };
  }
  function failure(error) {
    return { type: designationConstants.DELETE_DESIGNATION_FAILURE, error };
  }
}

function updateDesignation(request) {
  return (dispatch) => {
    designationService.updateDesignation(request).then(
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
      type: designationConstants.UPDATE_DESIGNATION_SUCCESS,
      payload: request,
    };
  }
  function failure(error) {
    return { type: designationConstants.UPDATE_DESIGNATION_FAILURE, error };
  }
}

function removeDesignation(request) {
  return (dispatch) => {
    designationService.removeDesignation(request).then(
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
      type: designationConstants.REMOVE_DESIGNATION_SUCCESS,
      payload: request,
    };
  }
  function failure(error) {
    return { type: designationConstants.REMOVE_DESIGNATION_FAILURE, error };
  }
}
