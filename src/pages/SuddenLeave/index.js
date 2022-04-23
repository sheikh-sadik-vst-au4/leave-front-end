import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector, connect } from "react-redux";

import PageContainer from "../../layouts/PageContainer";
import SuddenLeaveList from "./SuddenLeaveList";
import {
  suddenLeaveAction,
  leaveTypeAction,
  userActions,
} from "../../_actions";

const SuddenLeave = () => {
  const dispatch = useDispatch();
  const suddenLeaves = useSelector((state) =>
    state.suddenLeave && state.suddenLeave.suddenLeavesList
      ? state.suddenLeave.suddenLeavesList
      : []
  );

  useEffect(() => {
    dispatch(suddenLeaveAction.getAllSuddenLeaves());
    dispatch(userActions.getAllUsersList());
    dispatch(leaveTypeAction.getLeaveType());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Sudden Leave | JPLOFT</title>
      </Helmet>
      <PageContainer pageheading="SUDDEN LEAVE">
        <Grid container spacing={2}>
          <Grid item sm={12} xs={12}>
            <SuddenLeaveList suddenLeaves={suddenLeaves} />
          </Grid>
        </Grid>
      </PageContainer>
    </>
  );
};

export default connect()(SuddenLeave);
