import { employeeConstants } from "../_constants";

export function employee(state = {}, action) {
  switch (action.type) {
    case employeeConstants.GETALL_EMPLOYEEDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        employeeList: action.employee,
      };
    case employeeConstants.GETALL_EMPLOYEEDETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        employeeList: action.employee.data.result,
      };
    case employeeConstants.GETALL_EMPLOYEEDETAIL_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case employeeConstants.GETSINGLE_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true,
        singleEmployee: action.singleEmployee,
      };
    case employeeConstants.GETSINGLE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        singleEmployee: action.singleEmployee.data.result,
      };
    case employeeConstants.GETSINGLE_EMPLOYEE_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case employeeConstants.EMPLOYEE_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        employeeDetails: action.employeelist,
      };
    case employeeConstants.EMPLOYEE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        employeeDetails: action.employeelist.data.result,
      };
    case employeeConstants.EMPLOYEE_LIST_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case employeeConstants.EMPLOYEESINGLE_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        employeeSingleDetails: action.employeelist,
      };
    case employeeConstants.EMPLOYEESINGLE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        employeeSingleDetails: action.details.data.data.result,
      };
    case employeeConstants.EMPLOYEESINGLE_LIST_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    // case employeeConstants.EMPLOYEESINGLE_LIST_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //     employeeUpdated: action.details,
    //   };
    // case employeeConstants.EMPLOYEESINGLE_LIST_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     employeeUpdated: action.details,
    //   };
    // case employeeConstants.EMPLOYEESINGLE_LIST_FAILURE:
    //   return {
    //     ...state,
    //     error: action.error,
    //   };
    default:
      return state;
  }
}
