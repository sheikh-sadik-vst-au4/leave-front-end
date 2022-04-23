import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
// import { makeStyles } from "@material-ui/core/styles";
import PageContainer from "../../layouts/PageContainer";

import { userActions } from "../../_actions";
import { extraworkAction } from "../../_actions";
import ExtraWorkList from "./ExtraWorkList";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(3),
//     marginBottom: theme.spacing(3),
//     padding: theme.spacing(2),
//     [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
//       marginTop: theme.spacing(2),
//       marginBottom: theme.spacing(6),
//       padding: theme.spacing(3),
//     },
//     table: {
//       minWidth: 650,
//     },
//   },
// }));

const ExtraWork = () => {
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAllUsersList());
    dispatch(extraworkAction.getAllExtraWork());
  }, [dispatch]);

  const userList = useSelector((state) =>
    state.user && state.user.userList ? state.user.userList : []
  );

  const extraworklist = useSelector((state) =>
    state.extrawork && state.extrawork.allextrawork
      ? state.extrawork.allextrawork
      : []
  );

  return (
    <PageContainer pageheading="Extra Work">
      <Grid container spacing={2}>
        <Grid item sm={12} xs={12}>
          <Typography
            gutterBottom
            style={{ fontWeight: "bold" }}
            color="primary"
          >
            Extra Work List
          </Typography>
          <ExtraWorkList extraworklist={extraworklist} userList={userList} />
        </Grid>
      </Grid>
    </PageContainer>
  );
};
export default ExtraWork;
