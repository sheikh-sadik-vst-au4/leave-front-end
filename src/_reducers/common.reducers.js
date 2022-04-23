import { commonConstants } from "../_constants";

export function common(state = {}, action) {
  switch (action.type) {
    case commonConstants.COUNTRY_GETALL_REQUEST:
      return {
        ...state,
        loading: true,
        country: action.country,
      };
    case commonConstants.COUNTRY_GETALL_SUCCESS:
      return {
        ...state,
        loading: false,
        country: action.country.data.result,
      };
    case commonConstants.COUNTRY_GETALL_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case commonConstants.STATE_GETALL_REQUEST:
      return {
        ...state,
        loading: true,
        states: action.states,
      };
    case commonConstants.STATE_GETALL_SUCCESS:
      return {
        ...state,
        loading: false,
        states: action.states.data.result,
      };
    case commonConstants.STATE_GETALL_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
