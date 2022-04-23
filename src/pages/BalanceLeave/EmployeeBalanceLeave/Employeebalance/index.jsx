import React, { useEffect } from "react";
import Details from "./Details";
import PageContainer from "../../../../layouts/PageContainer";
import { useDispatch, useSelector } from "react-redux";
import { BalanceLeaveAction } from "../../../../_actions";

const EmployeeBalanceDetailContainer = (props) => {
  const dispatch = useDispatch();
  const BLEsingle = useSelector((state) =>
    state.balanceleave && state.balanceleave.BLEsingle
      ? state.balanceleave.BLEsingle[0]
      : ""
  );

  useEffect(() => {
    if (props.match.params.id) {
      const id = props.match.params.id;
      dispatch(BalanceLeaveAction.BLESingledetails(id));
    }
  }, [dispatch, props.match.params.id]);

  return (
    <PageContainer name="LEAVE DETAILS">
      <Details data={BLEsingle} />
    </PageContainer>
  );
};

export default EmployeeBalanceDetailContainer;
