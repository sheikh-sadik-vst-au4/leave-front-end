import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import PageContainer from "../../layouts/PageContainer";
import Box from "@material-ui/core/Box";
import TableLayout from "../../layouts/TableLayout";
import { useDispatch, useSelector } from "react-redux";
import { leaveAction } from "../../_actions";
import {
  LinearProgress,
  FormControl,
  InputLabel,
  //MenuItem,
  Select,
  Grid,
} from "@material-ui/core";

const months = [
  { name: "Janaury", value: "01" },
  { name: "February", value: "02" },
  { name: "March", value: "03" },
  { name: "April", value: "04" },
  { name: "May", value: "05" },
  { name: "June", value: "06" },
  { name: "July", value: "07" },
  { name: "August", value: "08" },
  { name: "September", value: "09" },
  { name: "October", value: "10" },
  { name: "November", value: "11" },
  { name: "December", value: "12" },
];
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

export default function SimpleTabs() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const [month, setMonth] = React.useState("");
  const [year, setYear] = React.useState("");

  const generateYears = () => {
    let maxOffset = 10;
    let thisYear = new Date().getFullYear();
    let allYears = [];

    for (let minOffset = 0; minOffset <= maxOffset; minOffset++) {
      allYears.push(thisYear - minOffset);
    }
    return allYears;
  };

  const handleMonth = (event) => {
    setMonth(event.target.value);
  };

  const handleYear = (event) => {
    setYear(event.target.value);
  };

  const handleChange = (event, newValue) => {
    if (newValue === 0) {
      dispatch(leaveAction.getAllUserLeaves("Pending", month, year));
    }
    if (newValue === 1) {
      dispatch(leaveAction.getAllUserLeaves("Approved", month, year));
    }
    if (newValue === 2) {
      dispatch(leaveAction.getAllUserLeaves("Rejected", month, year));
    }
    setValue(newValue);
  };

  const leavesList = useSelector((state) =>
    state.leave && state.leave.leavesList ? state.leave.leavesList : []
  );

  const isLoading = useSelector((state) =>
    state.leave && state.leave.loading ? state.leave.loading : false
  );

  useEffect(() => {
    dispatch(leaveAction.getAllUserLeaves("Pending", month, year));
  }, [dispatch, month, year]);

  return (
    <PageContainer pageheading="USER APPLIED LEAVES">
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
        <Grid container justify="flex-end" spacing={2}>
          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">Month</InputLabel>
              <Select
                native
                value={month}
                onChange={handleMonth}
                inputProps={{
                  name: "month",
                }}
              >
                <option aria-label="None" value="" />
                {months.map((item, pos) => {
                  return (
                    <option value={item.value} key={pos}>
                      {item.name}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">Year</InputLabel>
              <Select
                native
                value={year}
                onChange={handleYear}
                inputProps={{
                  name: "year",
                }}
              >
                <option aria-label="None" value="" />
                {generateYears().map((year, pos) => {
                  return (
                    <option value={year} key={pos}>
                      {year}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <TabPanel value={value} index={0}>
          {isLoading === true ? (
            <LinearProgress color="secondary" />
          ) : (
            <TableLayout leavesList={leavesList} />
          )}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {isLoading === true ? (
            <LinearProgress color="secondary" />
          ) : (
            <TableLayout leavesList={leavesList} />
          )}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {isLoading === true ? (
            <LinearProgress color="secondary" />
          ) : (
            <>
              <TableLayout leavesList={leavesList} />
            </>
          )}
        </TabPanel>
      </div>
    </PageContainer>
  );
}
