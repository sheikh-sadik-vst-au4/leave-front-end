import { holidayConstants } from "../_constants";
const initialState = {
  loading: "",
  holidaysList: [],
};

export function holidays(holidays = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case holidayConstants.GET_HOLIDAY_REQUEST:
      return {
        ...holidays,
        loading: true,
      };
    case holidayConstants.GET_HOLIDAY_SUCCESS:
      return {
        loading: false,
        holidaysList: payload.result,
      };
    case holidayConstants.GET_HOLIDAY_FAILURE:
      return {
        loading: false,
        error: action.error,
      };
    case holidayConstants.SET_HOLIDAY_REQUEST:
      return {
        loading: payload.loading,
        holidaysList: holidays.holidaysList,
      };
    case holidayConstants.SET_HOLIDAY_SUCCESS:
      const newHoliday = [];
      newHoliday.push(payload.result);
      return {
        loading: false,
        holidaysList: newHoliday.concat(holidays.holidaysList),
      };
    case holidayConstants.SET_HOLIDAY_FAILURE:
      return {
        ...holidays,
        loading: false,
        holidaysList: holidays.holidaysList,
        error: action.error,
      };
    case holidayConstants.SET_MULTIPLE_HOLIDAY_REQUEST:
      return {
        loading: payload.loading,
        holidaysList: holidays.holidaysList,
      };
    case holidayConstants.SET_MULTIPLE_HOLIDAY_SUCCESS:
      return {
        loading: false,
        holidaysList: payload.data.concat(holidays.holidaysList),
      };
    case holidayConstants.SET_MULTIPLE_HOLIDAY_FAILURE:
      return {
        holidaysList: holidays.holidaysList,
        loading: false,
        error: action.error,
      };
    case holidayConstants.DELETE_HOLIDAY_REQUEST:
      return holidays;
    case holidayConstants.DELETE_HOLIDAY_SUCCESS:
      return {
        loading: false,
        holidaysList: holidays.holidaysList.filter(
          (holiday) => holiday._id !== payload.ID
        ),
      };
    case holidayConstants.DELETE_HOLIDAY_FAILURE:
      return {
        error: action.error,
      };
    case holidayConstants.UPDATE_HOLIDAY_REQUEST:
      return holidays;
    case holidayConstants.UPDATE_HOLIDAY_SUCCESS:
      let holidayIndex = holidays.holidaysList.findIndex(
        (holiday) => holiday._id === payload.ID
      );
      holidays.holidaysList[holidayIndex].occasion = payload.occasion;
      holidays.holidaysList[holidayIndex].date = new Date(
        payload.date
      ).toLocaleDateString();
      return {
        loading: false,
        holidaysList: [...holidays.holidaysList],
      };
    case holidayConstants.UPDATE_HOLIDAY_FAILURE:
      return {
        ...holidays,
        loading: false,
        error: action.error,
      };
    default:
      return holidays;
  }
}
