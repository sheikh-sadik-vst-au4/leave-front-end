import React, { useEffect } from "react";
import EmployeeList from "./EmployeeList";
import PageContainer from "../../layouts/PageContainer";
import { useDispatch, useSelector } from "react-redux";
import { userActions,leaveTypeAction } from "../../_actions";
import { Helmet } from "react-helmet";

const EmployeeListContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.getAllUsersList());
    dispatch(leaveTypeAction.getLeaveType())
  }, [dispatch]);

  const userList = useSelector((state) =>
    state.user && state.user.userList ? state.user.userList : []
  );



  return (
    <React.Fragment>
      <Helmet>
        <title>Employee List | JPLOFT</title>
      </Helmet>
      <PageContainer pageheading="EMPLOYEES LIST">
        <EmployeeList userList={userList} />
      </PageContainer>
    </React.Fragment>
  );
};

export default EmployeeListContainer;
