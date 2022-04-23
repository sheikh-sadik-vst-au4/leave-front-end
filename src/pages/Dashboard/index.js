import React from "react";
//import SuperAdmin from "./SuperAdmin";
import App from "../../helper/Appbasic";
import UserDashBoard from "./UserDashboard";
import { Helmet } from "react-helmet";

const DashboardContainer = () => {
  const roleid = App.getRoleID();

  const dashboardHandler = (roleID) => {
    switch (roleID) {
      case "1":
        return <UserDashBoard roleid={roleid} />;
      case "2":
        return <UserDashBoard roleid={roleid} />;
      case "3":
        return <UserDashBoard roleid={roleid} />;
      case "4":
        return <UserDashBoard roleid={roleid} />;
      default:
        break;
    }
  };

  return (
    <>
      <Helmet>
        <title>Dashboard | JPLOFT</title>
      </Helmet>
      {dashboardHandler(roleid)}
    </>
  );
};

export default DashboardContainer;
