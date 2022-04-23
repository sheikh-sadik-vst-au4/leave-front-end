import { employeeConstants } from "../_constants";
import { employeeService } from "../_services";
import { alertActions } from "./";

export const employeeAction = {
  getEmployee,
  getSingleEmployee,
  employeeList,
  employeeListSingle,
  employeeUpdate,
};

function getEmployee() {
  return (dispatch) => {
    employeeService.getEmployeeDetails().then(
      (employee) => dispatch(success(employee.data)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function success(employee) {
    return { type: employeeConstants.GETALL_EMPLOYEEDETAIL_SUCCESS, employee };
  }
  function failure(error) {
    return { type: employeeConstants.GETALL_EMPLOYEEDETAIL_FAILURE, error };
  }
}

function getSingleEmployee(id) {
  return (dispatch) => {
    employeeService.getEmployeeSingle(id).then(
      (singleEmployee) => dispatch(success(singleEmployee.data)),

      (error) => dispatch(failure(error.toString()))
    );
  };

  function success(singleEmployee) {
    return {
      type: employeeConstants.GETSINGLE_EMPLOYEE_SUCCESS,
      singleEmployee,
    };
  }
  function failure(error) {
    return { type: employeeConstants.GETSINGLE_EMPLOYEE_FAILURE, error };
  }
}

function employeeList() {
  return (dispatch) => {
    employeeService.employeeList().then(
      (employeelist) => dispatch(success(employeelist.data)),

      (error) => dispatch(failure(error.toString()))
    );
  };

  function success(employeelist) {
    return { type: employeeConstants.EMPLOYEE_LIST_SUCCESS, employeelist };
  }
  function failure(error) {
    return { type: employeeConstants.EMPLOYEE_LIST_FAILURE, error };
  }
}

function employeeListSingle(id) {
  return (dispatch) => {
    dispatch(request());

    employeeService.employeeSingleList(id).then(
      (details) => dispatch(success(details)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: employeeConstants.EMPLOYEESINGLE_LIST_REQUEST };
  }
  function success(details) {
    return { type: employeeConstants.EMPLOYEESINGLE_LIST_SUCCESS, details };
  }
  function failure(error) {
    return { type: employeeConstants.EMPLOYEESINGLE_LIST_FAILURE, error };
  }
}

function employeeUpdate(id, details) {
  return (dispatch) => {
    employeeService.employeeUpdate(id, details).then(
      (details) => {
        dispatch(success(details));
        dispatch(success("Uppdated "));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function success(details) {
    return { type: employeeConstants.EMPLOYEEUPDATE_LIST_SUCCESS, details };
  }
  function failure(error) {
    return { type: employeeConstants.EMPLOYEEUPDATE_LIST_FAILURE, error };
  }
}
