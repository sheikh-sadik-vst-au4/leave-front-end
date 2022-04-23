import clsx from "clsx";
import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ApplyLeave from "../pages/ApplyLeave";
import App from "../helper/Appbasic";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Login from "../pages/Login";
import LeaveHistory from "../pages/LeaveHistory";
import UserProfile from "../pages/Profile";
import SuperAdmin from "../pages/Dashboard/SuperAdmin";
import LeaveDetailContainer from "../pages/LeaveDetails";
import EmployeeListContainer from "../pages/EmployeeList";
import AdminForm from "../pages/Admin/AdminForm";
import AddHoliday from "../pages/AddHoliday";
import CreateUser from "../pages/CreateUser";
import Employee from "../pages/Employee";
import EditUser from "../pages/EditUser";
import Settings from "../pages/Settings";
import SuddenLeave from "../pages/SuddenLeave";
import SuddenLeaveDetail from "../pages/SuddenLeave/SuddenLeaveDetail";
import Add from "../pages/Add";
import EmployeeBalanceLeave from "../pages/BalanceLeave/EmployeeBalanceLeave";
import EmployeeBalanceDetailContainer from "../pages/BalanceLeave/EmployeeBalanceLeave/Employeebalance/index";
import SelfBalanceDetailContainer from "../pages/BalanceLeave/EmployeeBalanceLeave/SelfBalanceLeave/index";
import ExtraWork from "../pages/ExtraWork/index";
import ExtraWorkEmployee from "../pages/ExtraWork/ExtraWorkEmployee/index";
import NotFound from "../pages/404";
import LeaveData from "../pages/LeaveData";
import ForgetPassword from "../pages/ForgetPassword";
import ResetPassword from "../pages/ResetPassword";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const Router = (props) => {
  const token = App.getToken();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      {token && token.length ? (
        <div className={classes.root}>
          <CssBaseline />
          {props.location.pathname !== "/index/login" &&
          props.location.pathname !== "/index/signup" &&
          props.location.pathname !== "/index/forget" &&
          props.location.pathname !== "/index/reset-password/:token" &&
          token ? (
            <Header
              handleDrawerOpen={handleDrawerOpen}
              handleDrawerClose={handleDrawerClose}
              open={open}
            />
          ) : null}

          <main
            onClick={handleDrawerClose}
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            <Switch>
              <Route exact path="/index/dashboard" component={Dashboard} />

              <Route exact path="/index/settings" component={Settings} />
              <Route exact path="/index/dashboard/employee" component={SuperAdmin} />
              <Route
                exact
                path="/index/dashboard/system-setting"
                component={AdminForm}
              />
              <Route exact path="/index/sudden-leave" component={SuddenLeave} />
              <Route
                exact
                path="/index/sudden-leave/:id"
                component={SuddenLeaveDetail}
              />

              <Route exact path="/index/leave-history" component={LeaveHistory} />
              <Route exact path="/index/leave/:id" component={LeaveDetailContainer} />
              <Route exact path="/index/leave-data/:id" component={LeaveData} />
              <Route
                exact
                path="/index/dashboard/employee/:id"
                component={Employee}
              />
              <Route
                exact
                path="/index/employee-list/edit/:id"
                component={EditUser}
              />
              <Route
                exact
                path="/index/leave-history/:id"
                component={LeaveDetailContainer}
              />
              <Route
                exact
                path="/index/dashboard/employee/:id"
                component={Employee}
              />
              <Route exact path="/index/employee-list/edit" component={EditUser} />

              <Route exact path="/index/user-profile" component={UserProfile} />
              <Route exact path="/index/create-user" component={CreateUser} />
              <Route exact path="/index/Add" component={Add} />
              <Route
                exact
                path="/index/employee-list"
                component={EmployeeListContainer}
              />
              <Route exact path="/index/add-holiday" component={AddHoliday} />

              <Route exact path="/index/apply-leave" component={ApplyLeave} />
              <Route
                exact
                path="/index/balance-leave-emp"
                component={EmployeeBalanceLeave}
              />
              <Route
                exact
                path="/index/balance-leave-self"
                component={SelfBalanceDetailContainer}
              />
              <Route
                exact
                path="/index/balance-leave-emp/:id"
                component={EmployeeBalanceDetailContainer}
              />
              <Route exact path="/index/dashboard/extrawork" component={ExtraWork} />
              <Route
                exact
                path="/index/dashboard/extrawork/:id"
                component={ExtraWorkEmployee}
              />
              <Route path="*" component={NotFound} />
            </Switch>
            <Footer />
          </main>
        </div>
      ) : props.location.pathname === "/" ? (
        <Redirect to="/index/login" />
      ) : props.location.pathname === "/index/login" ? (
        <Switch>
          <Route exact path="/index/login" component={Login} />
        </Switch>
      ) : props.location.pathname === "/index/forget" ? (
        <Switch>
          {" "}
          <Route exact path="/index/forget" component={ForgetPassword} />
        </Switch>
      ) : props.location.pathname.includes('reset-password') ? (
        <Switch>
          <Route exact path="/index/reset-password/:token" component={ResetPassword} />
        </Switch>
      ) : (
        <Redirect to="/index/login" />
      )}
      {/* {!token ? (
        <Switch>
          {" "}
          <Route
            exact
            path="/index/reset-password/:token"
            component={ResetPassword}
          />
        </Switch>
      ) : (
        ""
      )} */}
    </>
  );
};

export default withRouter(Router);
