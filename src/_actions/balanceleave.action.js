import { BalanceLeaveConstants } from "../_constants";
import { BalanceLeave } from "../_services";

export const BalanceLeaveAction = {
    getBalanceLeaveEmp,
    BLESingledetails,
    getBalanceLeaveSelf
 
};

function getBalanceLeaveEmp() {
  return (dispatch) => {
    
    BalanceLeave.getBalanceLeaveEmp().then(
      (details) => dispatch(success(details)),

      (error) => dispatch(failure(error.toString()))
    );
  };

  function success(details) {
    return { type: BalanceLeaveConstants.BALANCELEAVE_GETALL_SUCCESS, details };
  }
  function failure(error) {
    return { type: BalanceLeaveConstants.BALANCELEAVE_GETALL_FAILURE, error };
  }
}


function BLESingledetails(id) {
  return (dispatch) => {
    dispatch(request());

    BalanceLeave.BLESingledetails(id).then(
      (details) => dispatch(success(details)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: BalanceLeaveConstants.BALANCELEAVE_SINGLE_REQUEST };
  }
  function success(details) {
    return { type: BalanceLeaveConstants.BALANCELEAVE_SINGLE_SUCCESS, details };
  }
  function failure(error) {
    return { type: BalanceLeaveConstants.BALANCELEAVE_SINGLE_FAILURE, error };
  }
}


function getBalanceLeaveSelf() {
  return (dispatch) => {
    
    BalanceLeave.getBalanceLeaveSelf().then(
      (details) => dispatch(success(details)),

      (error) => dispatch(failure(error.toString()))
    );
  };

  function success(details) {
    return { type: BalanceLeaveConstants.BALANCELEAVE_SELF_SUCCESS, details };
  }
  function failure(error) {
    return { type: BalanceLeaveConstants.BALANCELEAVE_SELF_FAILURE, error };
  }
}