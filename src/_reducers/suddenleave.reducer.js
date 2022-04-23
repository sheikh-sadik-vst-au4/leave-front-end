import { suddenLeaveConstants } from "../_constants";
const initialState = {
  loading: "",
  suddenLeavesList: [],
};

export function suddenLeave(suddenLeave = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case suddenLeaveConstants.SET_SUDDEN_LEAVE_REQUEST:
      return {
        loading: true,
        suddenLeavesList: suddenLeave.suddenLeavesList,
      };
    case suddenLeaveConstants.SET_SUDDEN_LEAVE_SUCCESS:
      const newSuddenLeave = [];
      newSuddenLeave.push(payload);
      return {
        loading: false,
        suddenLeavesList: suddenLeave.suddenLeavesList.concat(newSuddenLeave),
      };
    case suddenLeaveConstants.SET_SUDDEN_LEAVE_FAILURE:
      return {
        loading: false,
        suddenLeavesList: suddenLeave.suddenLeavesList,
        error: action.error,
      };
    case suddenLeaveConstants.GET_ALL_SUDDEN_LEAVES_REQUEST:
      return {
        loading: true,
      };
    case suddenLeaveConstants.GET_ALL_SUDDEN_LEAVES_SUCCESS:
      return {
        loading: false,
        ...suddenLeave,
        suddenLeavesList: payload,
      };
    case suddenLeaveConstants.GET_ALL_SUDDEN_LEAVES_FAILURE:
      return {
        loading: false,
        ...suddenLeave,
        error: action.error,
      };
    case suddenLeaveConstants.GET_SUDDEN_LEAVE_REQUEST:
      return {
        loading: true,
      };
    case suddenLeaveConstants.GET_SUDDEN_LEAVE_SUCCESS:
      return {
        loading: false,
        ...suddenLeave,
        suddenLeavesList: payload,
      };
    case suddenLeaveConstants.GET_SUDDEN_LEAVE_FAILURE:
      return {
        loading: false,
        ...suddenLeave,
        error: action.error,
      };
    default:
      return suddenLeave;
  }
}
