import React from "react";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DataTable from "react-data-table-component";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import SearchLayout from "../layouts/SearchLayout";

const sortIcon = <ArrowDownward />;

// const handleColorHeading = (value) => {
//   if (value === "Approved") {
//     return {
//       color: "green",
//       fontWeight: "bold",
//       textTransform: "uppercase",
//     };
//   }
//   if (value === "Rejected") {
//     return {
//       color: "red",
//       fontWeight: "bold",
//       textTransform: "uppercase",
//     };
//   }
//   if (value === "Pending") {
//     return {
//       color: "blue",
//       fontWeight: "bold",
//       textTransform: "uppercase",
//     };
//   }
// };

export default function TableLayout({ leavesList }) {
  const list = leavesList;
  const [filterText, setFilterText] = React.useState("");

  const filteredItems = list.filter((item) => {
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
      name: "From Date",
      wrap: true,
      sortable: true,
      cell: (list) => new Date(list.fromDate).toLocaleDateString(),
    },
    {
      name: "End Date",
      wrap: true,
      sortable: true,
      cell: (list) => (
        <React.Fragment>
          {list.toDate
            ? new Date(list.toDate).toLocaleDateString()
            : new Date(list.fromDate).toLocaleDateString()}
        </React.Fragment>
      ),
    },
    {
      name: "Total Days",
      selector: "days",
      wrap: true,
      sortable: true,
    },
    {
      name: " ",
      selector: "_id",
      right: true,
      cell: (list) => (
        <Link to={"/index/dashboard/employee/" + list._id}>
          <ChevronRightIcon />
        </Link>
      ),
    },
  ];

  return (
    <DataTable
      columns={heading}
      data={filteredItems}
      defaultSortField="employee.name"
      pagination
      paginationRowsPerPageOptions={[10, 20, 30, 50, 100]}
      sortIcon={sortIcon}
      subHeader
      noHeader={true}
      subHeaderWrap={false}
      subHeaderAlign="left"
      subHeaderComponent={[subHeaderComponentMemo]}
      striped={true}
      highlightOnHover={true}
      responsive={true}
    />
  );
}
