import React, { useEffect } from "react";
import LeaveDetails from "./LeaveDetails";
import PageContainer from "../../layouts/PageContainer";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

import { leaveAction } from "../../_actions";

const LeaveDetailContainer = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const leaveDetail = useSelector((state) =>
    state.leave &&
    state.leave.leaveSingleDetails &&
    state.leave.leaveSingleDetails.data &&
    state.leave.leaveSingleDetails.data.result
      ? state.leave.leaveSingleDetails.data.result
      : ""
  );

  const alert = useSelector((state)=> state.alert ?state.alert:''

  )

  useEffect(() => {
    if (props.match.params.id) {
      const id = props.match.params.id;
      dispatch(leaveAction.leaveSingledetails(id));
    }
  }, [dispatch, props.match.params.id]);

  useEffect(() => {
    if(alert.type === "success"){
      history.push("/index/leave-history")
    }
  }, [alert]);

  const deleteLeaveById = () => {
    const leaveId = props.match.params.id
    dispatch(leaveAction.deleteLeave(leaveId));
  
    
  };

  return (
    <>
      <Helmet>
        <title>Leave Detail | JPLOFT</title>
      </Helmet>
      <PageContainer name="LEAVE DETAILS">
        <LeaveDetails leaveDetail={leaveDetail} deleteLeaveById={deleteLeaveById }></LeaveDetails>
      </PageContainer>
    </>
  );
};

export default LeaveDetailContainer;
