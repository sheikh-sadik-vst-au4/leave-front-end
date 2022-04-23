import React, { useEffect } from "react";
import PageContainer from "../../layouts/PageContainer";
import { useDispatch } from "react-redux";
import { suddenLeaveAction } from "../../_actions";

function SuddenLeaveDetail(props) {
  const dispatch = useDispatch();
  // const suddenLeaves = useSelector((state) =>
  //   state.suddenLeave && state.suddenLeave.suddenLeavesList
  //     ? state.suddenLeave.suddenLeavesList
  //     : []
  // );
  useEffect(() => {
    dispatch(suddenLeaveAction.getSuddenLeaveById(props.match.params.id));
  }, [dispatch, props.match.params.id]);
  return (
    <PageContainer pageheading="SUDDEN LEAVE DETAIL">
      <h1>{props.match.params.id}</h1>
    </PageContainer>
  );
}

export default SuddenLeaveDetail;
