import React, { useEffect } from "react";
import PageContainer from "../../layouts/PageContainer";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../_actions";
import DataTable from "react-data-table-component";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Typography, Grid } from "@material-ui/core";

const sortIcon = <ArrowDownward />;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const LeaveData = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const activecl = useSelector((state)=>state.user && state.user.history ?state.user.history:'')

 

  const suddenleave = useSelector((state) =>
    state.user && state.user.history && state.user.history.suddenLeaves
      ? state.user.history.suddenLeaves
      : []
  );

  const extraWorkList = useSelector((state) =>
    state.user && state.user.history && state.user.history.extraWork
      ? state.user.history.extraWork
      : []
  );

  const leaveTaken = useSelector((state) =>
    state.user && state.user.history && state.user.history.leavesTaken
      ? state.user.history.leavesTaken
      : []
  );

  const heading = [
    {
      name: "Sr. No",
      wrap: true,
      sortable: true,
      cell: (row, index) => index + 1,
    },
    {
      name: "Date",
      wrap: true,
      sortable: true,
      cell: (suddenleave) => new Date(suddenleave.date).toLocaleDateString(),
    },
    {
      name: "Day Type",

      wrap: true,
      sortable: true,
      cell: (suddenleave) => (
        <p>
          {suddenleave.dayType === 1
            ? "First Half Leave"
            : suddenleave.dayType === 2
            ? "Second Half Leave"
            : suddenleave.dayType === 3
            ? "Full Day"
            : ""}
        </p>
      ),
    },
    {
      name: "Leaves Reduced",
      selector: "leavesReduced",
      wrap: true,
      sortable: true,
    },
  ];

  const headingExtra = [
    {
      name: "Sr. No",
      wrap: true,
      sortable: true,
      cell: (row, index) => index + 1,
    },
    {
      name: "Date",
      wrap: true,
      sortable: true,
      cell: (suddenleave) => new Date(suddenleave.date).toLocaleDateString(),
    },
    {
      name: "Day Type",
      wrap: true,
      sortable: true,
      cell: (extraWorkList) => (
        <p>
          {extraWorkList.dayType === 1
            ? "first half leave"
            : extraWorkList.dayType === 2
            ? "second half leave"
            : extraWorkList.dayType === 3
            ? "full day"
            : ""}
        </p>
      ),
    },
  ];

  const headingleave = [
    {
      name: "Sr. No",
      wrap: true,
      sortable: true,
      cell: (row, index) => index + 1,
    },
    {
      name: "Start Date",
      wrap: true,
      sortable: true,
      cell: (leaveTaken) => new Date(leaveTaken.fromDate).toLocaleDateString(),
    },
    {
      name: "End Date",
      wrap: true,
      sortable: true,
      cell: (leaveTaken) => new Date(leaveTaken.toDate).toLocaleDateString(),
    },
    {
      name: "Leave Type",
      selector: "leaveType.name",
      wrap: true,
      sortable: true,
    },
    {
      name: "Non Paid Leaves",
      selector: "nonPaidLeaves",
      wrap: true,
      sortable: true,
    },
    {
      name: "Days",
      selector: "days",
      wrap: true,
      sortable: true,
    },
    {
      name: "Reason",
      selector: "reason",
      wrap: true,
      sortable: true,
    },
  ];

  useEffect(() => {
    if (props.match.params.id) {
      const id = props.match.params.id;
      dispatch(userActions.history(id));
    }
  }, [dispatch, props.match.params.id]);

  return (
    <PageContainer pageheading="MONTH HISTORY">
      <div className={classes.root}>
        <h6 style={{textAlign:'center'}}>No. of Active Cl's :- {activecl.activeCls}</h6>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>LEAVES TAKEN</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              <Grid item sm={12}>
                <DataTable
                  style={{ border: "1px solid #979799" }}
                  columns={headingleave}
                  data={leaveTaken}
                  defaultSortField="leaveType.name"
                  pagination
                  paginationRowsPerPageOptions={[10, 20, 30, 50, 100]}
                  sortIcon={sortIcon}
                  noHeader={true}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>EXTRA WORK</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              <Grid item sm={12}>
                <DataTable
                  style={{ border: "1px solid #979799" }}
                  columns={headingExtra}
                  data={extraWorkList}
                  defaultSortField="leaveType.name"
                  pagination
                  paginationRowsPerPageOptions={[10, 20, 30, 50, 100]}
                  sortIcon={sortIcon}
                  noHeader={true}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>SUDDEN LEAVE</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              <Grid item sm={12}>
                <DataTable
                  style={{ border: "1px solid #979799" }}
                  columns={heading}
                  data={suddenleave}
                  defaultSortField="leaveType.name"
                  pagination
                  paginationRowsPerPageOptions={[10, 20, 30, 50, 100]}
                  sortIcon={sortIcon}
                  noHeader={true}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </div>
    </PageContainer>
  );
};

export default LeaveData;
