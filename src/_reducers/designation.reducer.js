import { designationConstants } from "../_constants";

const initialState = {
  check: "",
  designations: [],
  loading: "",
};

export function designations(designations = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case designationConstants.GET_DESIGNATION_REQUEST:
      return designations;
    case designationConstants.GET_DESIGNATION_SUCCESS:
      return { designations: payload.result };
    case designationConstants.GET_DESIGNATION_FAILURE:
      return {
        error: action.error,
      };
    case designationConstants.GET_DESIGNATION_CHECK_REQUEST:
      return {
        check: "",
        designations: designations.designations,
      };
    case designationConstants.GET_DESIGNATION_CHECK_SUCCESS:
      return {
        check: payload.result,
        designations: designations.designations,
      };
    case designationConstants.GET_DESIGNATION_CHECK_FAILURE:
      return {
        error: action.error,
      };
    case designationConstants.REMOVE_DESIGNATION_REQUEST:
      return {
        loading: true,
      };
    case designationConstants.REMOVE_DESIGNATION_SUCCESS:
      return {
        designations: designations.designations.filter(
          (designation) => designation._id !== payload.previousId
        ),
      };
    case designationConstants.REMOVE_DESIGNATION_FAILURE:
      return {
        error: action.error,
      };
    case designationConstants.SET_DESIGNATION_REQUEST:
      return designations;
    case designationConstants.SET_DESIGNATION_SUCCESS:
      const newDesignation = [];
      newDesignation.push(payload.result);
      return { designations: newDesignation.concat(designations.designations) };
    case designationConstants.SET_DESIGNATION_FAILURE:
      return designations;
    case designationConstants.DELETE_DESIGNATION_REQUEST:
      return designations;
    case designationConstants.DELETE_DESIGNATION_SUCCESS:
      return {
        designations: designations.designations.filter(
          (designation) => designation._id !== payload.ID
        ),
      };
    case designationConstants.DELETE_DESIGNATION_FAILURE:
      return {
        error: action.error,
      };
    case designationConstants.UPDATE_DESIGNATION_REQUEST:
      return designations;
    case designationConstants.UPDATE_DESIGNATION_SUCCESS:
      let designationIndex = designations.designations.findIndex(
        (designation) => designation._id === payload._id
      );
      designations.designations[designationIndex].name = payload.name;
      return { designations: [...designations.designations] };
    case designationConstants.UPDATE_DESIGNATION_FAILURE:
      return designations;
    default:
      return designations;
  }
}
