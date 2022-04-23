import React, { useEffect } from "react";
import SelfDetails from "./SelfDetail";
import PageContainer from "../../../../layouts/PageContainer";
import { useDispatch, useSelector } from "react-redux";
import { BalanceLeaveAction } from "../../../../_actions";

const SelfBalanceDetailContainer = (props) => {
  const dispatch = useDispatch();

  const balanceleaveSelfData = useSelector((state) =>
    state.balanceleave && state.balanceleave.balanceleaveSelf
      ? state.balanceleave.balanceleaveSelf
      : []
  );
  useEffect(() => {
    dispatch(BalanceLeaveAction.getBalanceLeaveSelf());
  }, [dispatch]);

  return (
    <PageContainer name="LEAVE DETAILS">
      <SelfDetails datas={balanceleaveSelfData} />
    </PageContainer>
  );
};

export default SelfBalanceDetailContainer;
