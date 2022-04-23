import { departmentConstants } from "../_constants";
import { departmentService } from "../_services";
import { alertActions } from "./";

export const departmentAction = {
  getDepartments,
  setDepartment,
  deleteDepartment,
  updateDepartment,
  getDepartmentCheck,
  removeDepartment,
};

function getDepartments() {
  return (dispatch) => {
    departmentService.getDepartments().then(
      (response) => dispatch(success(response)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function success(response) {
    return {
      type: departmentConstants.GET_DEPARTMENT_SUCCESS,
      payload: response.data.data,
    };
  }
  function failure(error) {
    return { type: departmentConstants.GET_DEPARTMENT_FAILURE, error };
  }
}

function getDepartmentCheck(ID) {
  return (dispatch) => {
    dispatch(request());
    departmentService.getDepartmentCheck(ID).then(
      (response) => dispatch(success(response)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return {
      type: departmentConstants.GET_DEPARTMENT_CHECK_REQUEST,
    };
  }

  function success(response) {
    return {
      type: departmentConstants.GET_DEPARTMENT_CHECK_SUCCESS,
      payload: response.data.data,
    };
  }
  function failure(error) {
    return { type: departmentConstants.GET_DEPARTMENT_CHECK_FAILURE, error };
  }
}

function setDepartment(department) {
  return (dispatch) => {
    departmentService.setDepartment(department).then(
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
      type: departmentConstants.SET_DEPARTMENT_SUCCESS,
      payload: response.data.data,
    };
  }
  function failure(error) {
    return { type: departmentConstants.SET_DEPARTMENT_FAILURE, error };
  }
}

function deleteDepartment(ID) {
  return (dispatch) => {
    departmentService.deleteDepartment(ID).then(
      (response) => {
        dispatch(success(ID));
        dispatch(alertActions.success(response.data));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.response.data));
      }
    );
  };

  function success(departmentId) {
    return {
      type: departmentConstants.DELETE_DEPARTMENT_SUCCESS,
      payload: { ID: departmentId },
    };
  }
  function failure(error) {
    return { type: departmentConstants.DELETE_DEPARTMENT_FAILURE, error };
  }
}

function updateDepartment(request) {
  return (dispatch) => {
    departmentService.updateDepartment(request).then(
      (response) => {
        dispatch(success(request));
        dispatch(alertActions.success(response.data));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.response.data));
      }
    );
  };

  function success(request) {
    return {
      type: departmentConstants.UPDATE_DEPARTMENT_SUCCESS,
      payload: request,
    };
  }
  function failure(error) {
    return { type: departmentConstants.UPDATE_DEPARTMENT_FAILURE, error };
  }
}

function removeDepartment(request) {
  return (dispatch) => {
    departmentService.removeDepartment(request).then(
      (response) => {
        dispatch(success(request));
        dispatch(alertActions.success(response.data));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.response.data));
      }
    );
  };

  function success(request) {
    return {
      type: departmentConstants.REMOVE_DEPARTMENT_SUCCESS,
      payload: request,
    };
  }
  function failure(error) {
    return { type: departmentConstants.REMOVE_DEPARTMENT_FAILURE, error };
  }
}
