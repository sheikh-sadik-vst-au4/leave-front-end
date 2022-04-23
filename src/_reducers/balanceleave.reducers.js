import { BalanceLeaveConstants } from "../_constants";

export function balanceleave(state = {}, action) {
  switch (action.type) {
    case BalanceLeaveConstants.BALANCELEAVE_GETALL_REQUEST:
      return {
        ...state,
        loading: true,
        balanceleaveemp: action.details,
      };
    case BalanceLeaveConstants.BALANCELEAVE_GETALL_SUCCESS:
      return {
        ...state,
        loading: false,
        balanceleaveemp: action.details.data.data.result,
      };
    case BalanceLeaveConstants.BALANCELEAVE_GETALL_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    
      case BalanceLeaveConstants.BALANCELEAVE_SINGLE_REQUEST:
      return {
        ...state,
        loading: true,
        BLEsingle: action.details,
      };
    case BalanceLeaveConstants.BALANCELEAVE_SINGLE_SUCCESS:
      return {
        ...state,
        loading: false,
        BLEsingle: action.details.data.data.result,
      };
    case BalanceLeaveConstants.BALANCELEAVE_SINGLE_FAILURE:
      return {
        ...state,
        error: action.error,
      };

      case BalanceLeaveConstants.BALANCELEAVE_SELF_REQUEST:
      return {
        ...state,
        loading: true,
        balanceleaveSelf: action.details,
      };
    case BalanceLeaveConstants.BALANCELEAVE_SELF_SUCCESS:
      return {
        ...state,
        loading: false,
        balanceleaveSelf: action.details.data.data.result,
      };
    case BalanceLeaveConstants.BALANCELEAVE_SELF_FAILURE:
      return {
        ...state,
        error: action.error,
      };
   
    default:
      return state;
  }
}
