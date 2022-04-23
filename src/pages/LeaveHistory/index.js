import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import HistoryTable from "./HistoryTable";
import PageContainer from "../../layouts/PageContainer";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { leaveAction } from "../../_actions";
import { Typography, Box, AppBar, Tabs, Tab } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const LeaveHistory = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const LeaveHistoryData = useSelector((state) =>
    !state.leave ? [] : state.leave.leaveDetails
  );

  const handleChange = (event, newValue) => {
    
    if (newValue === 0) {
      dispatch(leaveAction.leavedetails("Pending"));
    }

    if (newValue === 1) {
      dispatch(leaveAction.leavedetails("Approved"));
    }

    if (newValue === 2) {
      dispatch(leaveAction.leavedetails("Rejected"));
    }

    setValue(newValue);
  };

  useEffect(() => {
    dispatch(leaveAction.leavedetails("Pending"));
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Leave History | JPLOFT</title>
      </Helmet>
      <PageContainer pageheading="LEAVE HISTORY">
        <div className={classes.root}>
          <AppBar position="static" color="textSecondary">
            <Tabs value={value} onChange={handleChange} centered>
              <Tab
                label="Pending"
                style={{ color: "#ffc400" }}
                {...a11yProps(0)}
              />
              <Tab
                label="Approved"
                style={{ color: "#4caf50" }}
                {...a11yProps(1)}
              />
              <Tab
                label="Rejected"
                style={{ color: "#f44336" }}
                {...a11yProps(2)}
              />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <HistoryTable LeaveHistoryData={LeaveHistoryData} value={value} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <HistoryTable LeaveHistoryData={LeaveHistoryData} value={value}/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <HistoryTable LeaveHistoryData={LeaveHistoryData} value={value}/>
          </TabPanel>
        </div>
      </PageContainer>
    </>
  );
};

export default LeaveHistory;
