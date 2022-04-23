import React from "react";
import { IconButton, LinearProgress, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
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
}));

const HolidayList = ({ holidays, deleteHoliday, editHoliday }) => {
  const classes = useStyles();

  const heading = [
    {
      name: "Sr. No",
      wrap: true,
      sortable: true,
      cell: (row, index) => index + 1,
    },

    {
      name: "Ocassion",
      selector: "occasion",
      wrap: true,
      sortable: true,
    },

    {
      name: "Date(MM/dd/YYYY)",
      wrap: true,
      sortable: true,
      center: true,
      cell: (holiday) => new Date(holiday.date).toLocaleDateString(),
    },

    {
      name: "Action",
      wrap: true,
      center: true,

      cell: (holiday) => (
        <div>
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => {
              editHoliday(holiday._id);
            }}
          >
            <EditIcon color="primary" />
          </IconButton>

          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => deleteHoliday(holiday._id)}
          >
            <DeleteIcon color="primary" />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <div>
      {holidays.lenght === 0 ? (
        <LinearProgress color="secondary" />
      ) : (
        <Paper className={classes.paper} square>
          <DataTable
            columns={heading}
            noHeader={true}
            data={holidays}
            pagination
            paginationRowsPerPageOptions={[10, 20, 30, 50, 100]}
            sortIcon={sortIcon}
            striped={true}
            highlightOnHover={true}
            responsive={true}
          />
        </Paper>
      )}
    </div>
  );
};

export default HolidayList;
