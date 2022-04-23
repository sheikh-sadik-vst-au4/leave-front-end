import { leaveConstants } from "../_constants";

export function leave(state = {}, action) {
  switch (action.type) {
    case leaveConstants.APPLY_LEAVE_REQUEST:
      return {
        loading: true,
        leave: action.details,
      };
    case leaveConstants.APPLY_LEAVE_SUCCESS:
      return {
        loading: false,
        leave: action.details,
      };
    case leaveConstants.APPLY_LEAVE_FAILURE:
      return { details: action.details };
    case leaveConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case leaveConstants.GETALL_SUCCESS:
      return {
        loading: false,
        leaveDetails: action.details.result,
      };
    case leaveConstants.GETALL_FAILURE:
      return {
        loading: false,
        error: action.error,
      };
    case leaveConstants.GETSINGLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case leaveConstants.GETSINGLE_SUCCESS:
      return {
        ...state,
        leaveSingleDetails: action.details.data,
      };
    case leaveConstants.GETSINGLE_FAILURE:
      return {
        error: action.error,
      };
    case leaveConstants.GETACTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case leaveConstants.GETACTION_SUCCESS:
      return {
        ...state,
        leaveActionDetails: action.details.data,
      };
    case leaveConstants.GETACTION_FAILURE:
      return {
        error: action.error,
      };
    case leaveConstants.GET_ALL_USERS_LEAVES_REQUEST:
      return {
        loading: true,
      };
    case leaveConstants.GET_ALL_USERS_LEAVES_SUCCESS:
      return {
        loading: false,
        leavesList: action.payload,
      };
    case leaveConstants.GET_ALL_USERS_LEAVES_FAILURE:
      return {
        loading: false,
        error: action.error,
      };
      case leaveConstants.DELETE_LEAVES_REQUEST:
      return {
        leave: action.leave,
      };
    case leaveConstants.DELETE_LEAVES_SUCCESS:
      return {
        
      };
    case leaveConstants.DELETE_LEAVES_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
