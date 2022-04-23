const apiUrl = "http://3.132.85.97:9000/api/";

export const POST_LOGIN_URL = apiUrl + "auth/login";
export const POST_CREATE_USER_URL = apiUrl + "user/add";
export const POST_ADD_ROLE_URL = apiUrl + "roles";
export const POST_ADD_DEPARTMENT_URL = apiUrl + "departments";
export const POST_REMOVE_DEPARTMENT_URL = apiUrl + "departments/delete";
export const POST_ADD_DESIGNATION_URL = apiUrl + "designations";
export const POST_REMOVE_DESIGNATION_URL = apiUrl + "designations/delete";
export const POST_ADD_LEAVETYPE_URL = apiUrl + "leaveType";
export const POST_APPLY_LEAVE_URL = apiUrl + "leaves";
export const POST_ADD_HOLIDAY_URL = apiUrl + "holidays";
export const POST_ADD_MULTIPLE_HOLIDAY_URL = apiUrl + "holidays/multiple";
export const POST_SUDDEN_LEAVE_URL = apiUrl + "sudden-leaves";

export const GET_ALL_SUDDEN_LEAVE_URL = apiUrl + "sudden-leaves";
export const GET_SUDDEN_LEAVE_BY_ID_URL = apiUrl + "sudden-leaves/";
export const GET_ROLES_URL = apiUrl + "roles";
export const GET_ALL_USERS_LEAVES_URL = apiUrl + "leaves/list?status=";
export const GET_STATES_URL = apiUrl + "state/";
export const GET_COUNTRIES_URL = apiUrl + "country";
export const GET_USER_URL = apiUrl + "user/";
export const GET_ALL_USERS_URL = apiUrl + "user";
export const GET_USER_PROFILE_URL = apiUrl + "user/self";
export const GET_DEPARTMENTS_URL = apiUrl + "departments";
export const GET_DEPARTMENT_CHECK_URL = apiUrl + "departments/check/";
export const GET_DESIGNATIONS_URL = apiUrl + "designations";
export const GET_DESIGNATION_CHECK_URL = apiUrl + "designations/check/";
export const GET_LEAVETYPES_URL = apiUrl + "leaveType";
export const GET_HOLIDAYS_URL = apiUrl + "holidays";
export const GET_USER_LEAVE_URL = apiUrl + "leaves/self?status=";

export const DELETE_DEPARTMENT_URL = apiUrl + "departments/";
export const DELETE_DESIGNATION_URL = apiUrl + "designations/";
export const DELETE_LEAVETYPE_URL = apiUrl + "leaveType/";
export const DELETE_HOLIDAY_URL = apiUrl + "holidays/";
export const DELETE_USER_URL = apiUrl + "user/";

export const PUT_DEPARTMENT_URL = apiUrl + "departments/";
export const PUT_DESIGNATION_URL = apiUrl + "designations/";
export const PUT_LEAVETYPE_URL = apiUrl + "leaveType/";
export const PUT_HOLIDAY_URL = apiUrl + "holidays/";
export const PUT_USER_URL = apiUrl + "user/";
