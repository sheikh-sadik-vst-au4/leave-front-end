import { departmentConstants } from "../_constants";

const initialState = {
  check: "",
  departments: [],
  loading: "",
};

export function departments(departments = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case departmentConstants.GET_DEPARTMENT_REQUEST:
      return { ...initialState, departments: payload.result };
    case departmentConstants.GET_DEPARTMENT_SUCCESS:
      return { ...initialState, departments: payload.result };
    case departmentConstants.GET_DEPARTMENT_FAILURE:
      return {
        error: action.error,
      };
    case departmentConstants.GET_DEPARTMENT_CHECK_REQUEST:
      return {
        check: "",
        departments: departments.departments,
      };
    case departmentConstants.GET_DEPARTMENT_CHECK_SUCCESS:
      return {
        check: payload.result,
        departments: departments.departments,
      };
    case departmentConstants.GET_DEPARTMENT_CHECK_FAILURE:
      return {
        error: action.error,
      };
    case departmentConstants.REMOVE_DEPARTMENT_REQUEST:
      return {
        loading: true,
      };
    case departmentConstants.REMOVE_DEPARTMENT_SUCCESS:
      return {
        departments: departments.departments.filter(
          (department) => department._id !== payload.previousId
        ),
      };
    case departmentConstants.REMOVE_DEPARTMENT_FAILURE:
      return {
        error: action.error,
      };
    case departmentConstants.SET_DEPARTMENT_REQUEST:
      return departments;
    case departmentConstants.SET_DEPARTMENT_SUCCESS:
      const dept = [];
      dept.push(payload.result);
      return { departments: dept.concat(departments.departments) };
    case departmentConstants.SET_DEPARTMENT_FAILURE:
      return departments;
    case departmentConstants.DELETE_DEPARTMENT_REQUEST:
      return {
        department: action.department,
      };
    case departmentConstants.DELETE_DEPARTMENT_SUCCESS:
      return {
        departments: departments.departments.filter(
          (department) => department._id !== payload.ID
        ),
      };
    case departmentConstants.DELETE_DEPARTMENT_FAILURE:
      return {
        error: action.error,
      };
    case departmentConstants.UPDATE_DEPARTMENT_REQUEST:
      return departments;
    case departmentConstants.UPDATE_DEPARTMENT_SUCCESS:
      let departmentIndex = departments.departments.findIndex(
        (department) => department._id === payload._id
      );
      departments.departments[departmentIndex].name = payload.name;
      return { departments: [...departments.departments] };
    case departmentConstants.UPDATE_DEPARTMENT_FAILURE:
      return departments;
    default:
      return departments;
  }
}
