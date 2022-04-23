import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  FormControl,
  LinearProgress,
  Paper,
  InputLabel,
  Select,
  Grid,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import FilterListIcon from "@material-ui/icons/FilterList";
import { suddenLeaveAction } from "../../_actions";
// import { Link } from "react-router-dom";
import SearchLayout from "../../layouts/SearchLayout";
import DataTable from "react-data-table-component";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
const sortIcon = <ArrowDownward />;

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
    table: {
      minWidth: 650,
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

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

const SuddenLeaveList = ({ suddenLeaves }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [month, setMonth] = React.useState("");
  const [year, setYear] = React.useState("");

  const [filterText, setFilterText] = React.useState("");

  const filteredItems = suddenLeaves.filter((item) => {
    let search = filterText.toLowerCase();
    return (
      item.employee.name && item.employee.name.toLowerCase().includes(search)
    );
  });

  const subHeaderComponentMemo = React.useMemo(() => {
    return (
      <SearchLayout onFilter={setFilterText} placeHolderText="Search by Name" />
    );
  }, [setFilterText]);

  const subHeaderComponentFilter = () => {
    return (
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
    );
  };

  const heading = [
    {
      name: "Sr. No",
      wrap: true,
      sortable: true,
      cell: (row, index) => index + 1,
    },

    {
      name: "Employee Name",
      selector: "employee.name",
      wrap: true,
      sortable: true,
    },
    {
      name: "Leave Type",
      selector: "leaveType.name",
      wrap: true,
      sortable: true,
    },
    {
      name: "Date",

      wrap: true,
      sortable: true,
      cell: (suddenLeaves) => new Date(suddenLeaves.date).toLocaleDateString(),
    },
    {
      name: "Day Type",

      wrap: true,
      sortable: true,
      cell: (suddenLeaves) => (
        <p>
          {suddenLeaves.dayType === 1
            ? "First Half Leave"
            : suddenLeaves.dayType === 2
            ? "Second Half Leave"
            : suddenLeaves.dayType === 3
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

  useEffect(() => {
    dispatch(suddenLeaveAction.getAllSuddenLeaves(month, year));
  }, [dispatch, month, year]);

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

  return (
    <div>
      {suddenLeaves.lenght === 0 ? (
        <LinearProgress color="secondary" />
      ) : (
        <Paper className={classes.paper} square>
          <DataTable
            columns={heading}
            data={filteredItems}
            defaultSortField="name"
            pagination
            paginationRowsPerPageOptions={[10, 20, 30, 50, 100]}
            sortIcon={sortIcon}
            subHeader
            noHeader={true}
            subHeaderWrap={false}
            subHeaderAlign="left"
            subHeaderComponent={[
              subHeaderComponentMemo,
              subHeaderComponentFilter(),
            ]}
            striped={true}
            highlightOnHover={true}
            responsive={true}
          />
        </Paper>
      )}
    </div>
  );
};

export default SuddenLeaveList;
