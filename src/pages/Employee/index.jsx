import React, { useEffect } from "react";
import EmployeeContainer from "./EmployeContainer";
import TakeActionModal from "./TakeActionModal";
import PageContainer from "../../layouts/PageContainer";
import { useDispatch, useSelector } from "react-redux";
import { employeeAction } from "../../_actions";
import { Grid, Paper, Button } from "@material-ui/core";
import { holidayAction, leaveAction } from "../../_actions";
import { MyCalendar } from "./Calender";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(5),
    },
  },
}));

const Employee = (props) => {
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState("");
  const [takeAction, setTakeAction] = React.useState(true);
  const dispatch = useDispatch();

  const holidays = useSelector((state) =>
    state.holidays && state.holidays.holidaysList
      ? state.holidays.holidaysList
      : []
  );

  const leaves = useSelector((state) =>
    state.leave && state.leave.leaveDetails ? state.leave.leaveDetails : []
  );

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const data = useSelector((state) =>
    state.employee && state.employee.singleEmployee
      ? state.employee.singleEmployee
      : ""
  );

  
  useEffect(() => {
    dispatch(holidayAction.getHolidays());
    dispatch(leaveAction.leavedetails("Pending"));
  }, [dispatch]);
  useEffect(() => {
    if (props.match.params.id) {
      const id = props.match.params.id;
      setId(id);
      dispatch(employeeAction.getSingleEmployee(id));
    }
  }, [dispatch, props.match.params.id]);

  const handleOpen = () => {
    if (takeAction === true) {
      setTakeAction(false);
    } else {
      setTakeAction(true);
    }
  };
  return (
    <PageContainer name="LEAVE DETAILS">
      <EmployeeContainer
        handleClickOpen={handleClickOpen}
        data={data}
      ></EmployeeContainer>
      <Button variant="contained" onClick={handleOpen}>
        Take Action
      </Button>

      {takeAction === false ? (
        <>
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12}>
              <TakeActionModal
                open={open}
                handleClose={handleClose}
                Id={id}
              ></TakeActionModal>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Paper className={classes.paper} square>
                <MyCalendar
                  holidays={holidays}
                  leaves={leaves}
                  leaveDetails={data}
                />
              </Paper>
            </Grid>
          </Grid>
        </>
      ) : (
        ""
      )}
    </PageContainer>
  );
};

export default Employee;
