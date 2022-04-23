import { holidayConstants } from "../_constants";
import { holidayService } from "../_services";
import { alertActions } from ".";

export const holidayAction = {
  getHolidays,
  setHoliday,
  setMultiHoliday,
  deleteHoliday,
  updateHoliday,
};

function getHolidays() {
  return (dispatch) => {
    holidayService.getHolidays().then(
      (response) => dispatch(success(response)),
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function success(response) {
    return {
      type: holidayConstants.GET_HOLIDAY_SUCCESS,
      payload: response.data.data,
    };
  }

  function failure(error) {
    return { type: holidayConstants.GET_HOLIDAY_FAILURE, error };
  }
}

function setHoliday(req) {
  return (dispatch) => {
    dispatch(request());
    holidayService.setHoliday(req).then(
      (response) => {
        dispatch(success(response));
        dispatch(alertActions.success(response.data));
      },
      (error) => {
        dispatch(failure(error.response.data));
        dispatch(alertActions.error(error.response.data));
      }
    );
  };

  function request() {
    return {
      type: holidayConstants.SET_HOLIDAY_REQUEST,
      payload: { loading: true },
    };
  }

  function success(response) {
    return {
      type: holidayConstants.SET_HOLIDAY_SUCCESS,
      payload: response.data.data,
    };
  }
  function failure(error) {
    return { type: holidayConstants.SET_HOLIDAY_FAILURE, error };
  }
}
function setMultiHoliday(req) {
  return (dispatch) => {
    dispatch(request(req));
    holidayService.setMultiHoliday(req).then(
      (response) => {
        dispatch(success(response));
        dispatch(alertActions.success(response.data));
      },
      (error) => {
        dispatch(failure(error.response.data));
        dispatch(alertActions.error(error.response.data));
      }
    );
  };
  function request(req) {
    return {
      type: holidayConstants.SET_MULTIPLE_HOLIDAY_REQUEST,
      payload: { loading: true },
    };
  }
  function success(response) {
    return {
      type: holidayConstants.SET_MULTIPLE_HOLIDAY_SUCCESS,
      payload: response.data.data.result,
    };
  }

  function failure(error) {
    return { type: holidayConstants.SET_MULTIPLE_HOLIDAY_FAILURE, error };
  }
}

function deleteHoliday(ID) {
  return (dispatch) => {
    holidayService.deleteHoliday(ID).then(
      (response) => {
        dispatch(success(ID));
        dispatch(alertActions.success("holiday Deleted successful"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
  function success(holidayId) {
    return {
      type: holidayConstants.DELETE_HOLIDAY_SUCCESS,
      payload: { ID: holidayId },
    };
  }
  function failure(error) {
    return { type: holidayConstants.DELETE_HOLIDAY_FAILURE, error };
  }
}

function updateHoliday(request) {
  return (dispatch) => {
    holidayService.updateHoliday(request).then(
      (response) => {
        dispatch(success(request));
        dispatch(alertActions.success("Holiday updated successful"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
  function success(request) {
    const { _id, date, occasion } = request;
    return {
      type: holidayConstants.UPDATE_HOLIDAY_SUCCESS,
      payload: { ID: _id, date, occasion },
    };
  }
  function failure(error) {
    return { type: holidayConstants.UPDATE_HOLIDAY_FAILURE, error };
  }
}
