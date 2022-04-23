import React, { useEffect } from "react";
import Table from "./Table";
import PageContainer from "../../../layouts/PageContainer";
import { useDispatch, useSelector } from "react-redux";
import { BalanceLeaveAction } from "../../../_actions";

const EmployeeBalanceLeave = () => {
  const heading = ["No", "Name", "Leave Type", "Date", ""];
  const dispatch = useDispatch();

  const balanceleaveEmployeeData = useSelector((state) =>
    state.balanceleave && state.balanceleave.balanceleaveemp
      ? state.balanceleave.balanceleaveemp
      : []
  );
  useEffect(() => {
    dispatch(BalanceLeaveAction.getBalanceLeaveEmp("Pending"));
  }, [dispatch]);

  return (
    <PageContainer pageheading="Employee Balance Leaave">
      <Table heading={heading} data={balanceleaveEmployeeData} />
    </PageContainer>
  );
};

export default EmployeeBalanceLeave;
