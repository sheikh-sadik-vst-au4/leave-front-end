import { leaveTypeConstants } from "../_constants";

const initialState = [];

export function leaveTypes(leaveTypes = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case leaveTypeConstants.GET_LEAVETYPE_REQUEST:
      return leaveTypes;
    case leaveTypeConstants.GET_LEAVETYPE_SUCCESS:
      return payload.result;
    case leaveTypeConstants.GET_LEAVETYPE_FAILURE:
      return {
        error: action.error,
      };
    case leaveTypeConstants.SET_LEAVETYPE_REQUEST:
      return leaveTypes;
    case leaveTypeConstants.SET_LEAVETYPE_SUCCESS:
      const newLeaveType = [];
      newLeaveType.push(payload.result);
      return newLeaveType.concat(leaveTypes);
    case leaveTypeConstants.SET_LEAVETYPE_FAILURE:
      return leaveTypes;
    case leaveTypeConstants.DELETE_LEAVETYPE_REQUEST:
      return leaveTypes;
    case leaveTypeConstants.DELETE_LEAVETYPE_SUCCESS:
      return leaveTypes.filter((leaveType) => leaveType._id !== payload.ID);
    case leaveTypeConstants.DELETE_LEAVETYPE_FAILURE:
      return {
        error: action.error,
      };
    case leaveTypeConstants.UPDATE_LEAVETYPE_REQUEST:
      return leaveTypes;
    case leaveTypeConstants.UPDATE_LEAVETYPE_SUCCESS:
      let leaveTypeIndex = leaveTypes.findIndex(
        (leaveType) => leaveType._id === payload._id
      );
      leaveTypes[leaveTypeIndex].name = payload.name;
      return [...leaveTypes];
    case leaveTypeConstants.UPDATE_LEAVETYPE_FAILURE:
      return leaveTypes;
    default:
      return leaveTypes;
  }
}
