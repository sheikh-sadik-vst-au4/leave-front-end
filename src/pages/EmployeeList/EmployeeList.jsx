import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import React, { useMemo, useState } from "react";
import { Button, Paper } from "@material-ui/core";
import { LinearProgress } from "@material-ui/core";
import DataTable from "react-data-table-component";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import App from "../../helper/Appbasic";
import ExtraWorkModal from "./ExtraWorkModal";
import SuddenLeaveModal from "./SuddenLeaveModal";
import SearchLayout from "../../layouts/SearchLayout";

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

export default function BasicTable(props) {
  const { userList } = props;
  const classes = useStyles();
  const roleid = App.getRoleID();
  const [filterText, setFilterText] = useState("");
  const [text, setText] = useState("");
  const [id, setId] = useState("");
  const [open, setOpen] = useState(false);
  const [openextra, setOpenExtra] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = (e, name, id) => {
    setText(name);
    setId(id);
    setOpen(true);
  };
  const handleCloseExtra = () => {
    setOpenExtra(false);
  };
  const handleClickOpenExtra = (e, name, ids) => {
    setText(name);
    setId(ids);
    setOpenExtra(true);
  };

  const filteredItems = userList.filter((item) => {
    let search = filterText.toLowerCase();
    return item.name && item.name.toLowerCase().includes(search);
  });

  const subHeaderComponentMemo = React.useMemo(() => {
    return (
      <SearchLayout onFilter={setFilterText} placeHolderText="Search by Name" />
    );
  }, [setFilterText]);

  const heading = useMemo(() => [
    {
      name: "Sr. No",
      sortable: true,
      cell: (row, index) => index + 1,
    },
    {
      name: "Name",
      selector: "name",
      wrap: true,
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      wrap: true,
      sortable: true,
    },

    // {
    //   name: "Department",
    //   selector: "department.name",
    //   wrap: true,
    //   sortable: true,
    // },
    // {
    //   name: "Designation",
    //   selector: "designation.name",
    //   wrap: true,
    //   sortable: true,
    // },

    {
      name: "Mark Sudden Leave",
      wrap: true,
      center: true,
      cell: (userList, index) => (
        <React.Fragment>
          {roleid === "1" ? (
            ""
          ) : (
            <Tooltip title="SuddenLeave">
              <IconButton
                onClick={(e) => handleClickOpen(e, userList.name, userList._id)}
              >
                <AddIcon />
              </IconButton>
            </Tooltip>
          )}
        </React.Fragment>
      ),
    },
    {
      name: "Add Extra Work",
      wrap: true,
      center: true,
      cell: (userList) => (
        <div>
          <Tooltip title="Extra Work">
            <IconButton
              onClick={(e) =>
                handleClickOpenExtra(e, userList.name, userList._id)
              }
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </Tooltip>
          <br />

          <ExtraWorkModal
            open={openextra}
            handleClose={handleCloseExtra}
            name={text}
            Id={id}
          />
        </div>
      ),
    },
    {
      name: "Balance Leave",
      center: true,
      wrap: true,
      cell: (userList) => (
        <Link to={"/index/leave-data/" + userList._id}>
          <Button color="primary" size="small">
            Balance Leave
          </Button>
        </Link>
      ),
    },
    {
      name: " ",
      selector: "_id",
      right: true,
      cell: (userList) => (
        <Link to={"/index/employee-list/edit/" + userList._id}>
          <ChevronRightIcon />
        </Link>
      ),
    },
  ]);

  const headingAdmin = useMemo(() => [
    {
      name: "Sr. No",

      wrap: true,
      sortable: true,
      cell: (row, index) => index + 1,
    },

    {
      name: "Name",
      selector: "name",
      wrap: true,
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      wrap: true,
      sortable: true,
    },
    {
      name: "Department",
      selector: "department.name",
      wrap: true,
      sortable: true,
    },
    {
      name: "Designation",
      selector: "designation.name",
      wrap: true,
      sortable: true,
    },

    {
      name: " ",
      selector: "_id",
      right: true,
      cell: (userList) => (
        <Link to={"/index/employee-list/edit/" + userList._id}>
          <ChevronRightIcon />
        </Link>
      ),
    },
  ]);

  return (
    <>
      {userList.length === 0 ? (
        <LinearProgress />
      ) : (
        <>
          <Paper className={classes.paper} square>
            <DataTable
              columns={roleid === "1" ? headingAdmin : heading}
              data={filteredItems}
              defaultSortField="name"
              pagination
              paginationRowsPerPageOptions={[10, 20, 30, 50, 100]}
              sortIcon={sortIcon}
              subHeader
              noHeader={true}
              subHeaderWrap={false}
              subHeaderAlign="right"
              subHeaderComponent={[subHeaderComponentMemo]}
              striped={true}
              highlightOnHover={true}
              responsive={true}
            />
          </Paper>
          <SuddenLeaveModal
            open={open}
            handleClose={handleClose}
            name={text}
            Id={id}
          />
        </>
      )}
    </>
  );
}
