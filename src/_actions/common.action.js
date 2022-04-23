import { commonConstants } from "../_constants";
import { commonService } from "../_services";

export const commonAction = {
  getCountry,
  getStates,
};

function getCountry() {
  return (dispatch) => {
    
    commonService.getCountry().then(
      (country) => dispatch(success(country.data)),

      (error) => dispatch(failure(error.toString()))
    );
  };

  function success(country) {
    return { type: commonConstants.COUNTRY_GETALL_SUCCESS, country };
  }
  function failure(error) {
    return { type: commonConstants.COUNTRY_GETALL_FAILURE, error };
  }
}

function getStates(id) {
  return (dispatch) => {
    commonService.getStates(id).then(
      (states) => dispatch(success(states.data)),

      (error) => dispatch(failure(error.toString()))
    );
  };

  function success(states) {
    return { type: commonConstants.STATE_GETALL_SUCCESS, states };
  }
  function failure(error) {
    return { type: commonConstants.STATE_GETALL_FAILURE, error };
  }
}
