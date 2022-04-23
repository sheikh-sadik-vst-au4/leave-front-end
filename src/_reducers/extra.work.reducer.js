import { extraworkConstants } from "../_constants";

export function extrawork(state = {}, action) {
  switch (action.type) {
    case extraworkConstants.EXTRAWORK_REQUEST:
      return {
        ...state,
        extraworkapply: action.details,
      };
    case extraworkConstants.EXTRAWORK_SUCCESS:
      return {
        ...state,
        extraworkapply: action.details,
      };
    case extraworkConstants.EXTRAWORK_FAILURE:
      return { details: action.details };

    case extraworkConstants.EXTRAWORK_GETALL_REQUEST:
      return {
        ...state,
        allextrawork: action.details,
      };
    case extraworkConstants.EXTRAWORK_GETALL_SUCCESS:
      return {
        ...state,
        allextrawork: action.details.data.data.result,
      };
    case extraworkConstants.EXTRAWORK_GETALL_FAILURE:
      return { details: action.details };

    case extraworkConstants.EXTRAWORK_SINGLE_REQUEST:
      return {
        ...state,
        Singleextrawork: action.details,
      };
    case extraworkConstants.EXTRAWORK_SINGLE_SUCCESS:
      return {
        ...state,
        Singleextrawork: action.details.data.data.result,
      };
    case extraworkConstants.EXTRAWORK_SINGLE_FAILURE:
      return { details: action.details };
    default:
      return state;
  }
}
