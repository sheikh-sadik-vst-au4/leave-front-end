import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Table from "../../layouts/Table";
import Card from "../../layouts/Card";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const heading = ["Id", "Employee Name", "Leave Type", "Status", ""];

  const data = [
    { id: "1", name: "Mohit", leavetype: "CL", status: "Approved" },
    { id: "2", name: "Sadik", leavetype: "PL", status: "Pending" },
    { id: "3", name: "Rohit", leavetype: "Co", status: "Approved" },
    { id: "4", name: "Ram", leavetype: "HD", status: "Rejected" },
  ];

  const [tableData, setTableData] = useState(data);
  return (
    <React.Fragment>
      <section id="team" className="team">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Dashboard</h2>
          </header>
          <Grid container spacing={3}>
            <Card
              number={
                <Link to="/index/apply-leave">
                  <AddCircleIcon
                    style={{ color: "#720d5d", fontSize: "50px" }}
                  />
                </Link>
              }
              carddata={"Apply for Leave"}
            ></Card>

            <Card number={"3"} carddata={"My Leave"} />
            <Card
              number={tableData.length}
              carddata={"Total Leave"}
              // handleAllData={handleAllData}
              id={1}
            />
            <Card
              number={tableData.length}
              carddata={"Pending Leave"}
              // handlePendingData={handlePendingData}
              id={2}
            />
          </Grid>

          <br />
          <br />
          <Table
            heading={heading}
            data={tableData}
            setTableData={setTableData}
          />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Dashboard;
