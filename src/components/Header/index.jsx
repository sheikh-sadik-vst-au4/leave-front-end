import React from "react";
import clsx from "clsx";
import App from "../../helper/Appbasic";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link as RouterLink, useHistory } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { Avatar, Box } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import { AccountCircle } from "@material-ui/icons";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import HistoryIcon from "@material-ui/icons/History";
import AppsIcon from "@material-ui/icons/Apps";
//import FormatBoldIcon from "@material-ui/icons/FormatBold";
import NavItem from "./Navitem";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
//import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import AddBoxIcon from "@material-ui/icons/AddBox";
import img from "../../assets/img/logo.white.svg"
import { useDispatch } from "react-redux";
import { authActions } from "../../_actions";
import { Link } from "react-router-dom";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import { deepPurple } from "@material-ui/core/colors";
import "./header.css"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  title: {
    flexGrow: 1,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

const handleRole = () => {
  const roleid = App.getRoleID();
  
  const RoleOneMenuList = [
    {
      title: "Dashboard",
      icon: <DashboardOutlinedIcon />,
      href: "/index/dashboard",
    },
    {
      title: "Add",
      icon: <AddBoxOutlinedIcon />,
      href: "/index/Add",
    },
    {
      title: "Profile",
      icon: <AccountCircleOutlinedIcon />,
      href: "/index/user-profile",
    },
    {
      title: "Sudden Leave",
      icon: <AddBoxIcon />,
      href: "/index/sudden-leave",
    },
    {
      title: "Extra Work(Employee)",
      icon: <HistoryIcon />,
      href: "/index/dashboard/extrawork",
    },
    {
      title: "Add Employee",
      icon: <AddBoxOutlinedIcon />,
      href: "/index/create-user",
    },
    {
      title: "Employee List",
      icon: <ListAltOutlinedIcon />,
      href: "/index/employee-list",
    },
    {
      title: "Applied Leave(Employee)",
      icon: <ListAltOutlinedIcon />,
      href: "/index/dashboard/employee",
    },
    // {
    //   title: "System Setting",
    //   icon: <SettingsOutlinedIcon />,
    //   href: "/index/dashboard/system-setting",
    // },
  ];
  const RoleThreeMenuList = [
    {
      title: "Dashboard",
      icon: <DashboardOutlinedIcon />,
      href: "/index/dashboard",
    },
    {
      title: "Add",
      icon: <AddBoxOutlinedIcon />,
      href: "/index/Add",
    },
    {
      title: "Profile",
      icon: <AccountCircleOutlinedIcon />,
      href: "/index/user-profile",
    },
    {
      title: "Sudden Leave",
      icon: <AddBoxIcon />,
      href: "/index/sudden-leave",
    },
    {
      title: "Add Employee",
      icon: <AddBoxOutlinedIcon />,
      href: "/index/create-user",
    },
    {
      title: "Employee List",
      icon: <ListAltOutlinedIcon />,
      href: "/index/employee-list",
    },
    {
      title: "Apply Leave",
      icon: <AddBoxOutlinedIcon />,
      href: "/index/apply-leave",
    },
    {
      title: "Applied Leave(Employee)",
      icon: <ListAltOutlinedIcon />,
      href: "/index/dashboard/employee",
    },
    {
      title: "Add Holiday",
      icon: <AddBoxOutlinedIcon />,
      href: "/index/add-holiday",
    },
    // {
    //   title: "Balance leave(Employee)",
    //   icon: <FormatBoldIcon />,
    //   href: "/index/balance-leave-emp",
    // },
    //
    {
      title: "Leave History",
      icon: <HistoryIcon />,
      href: "/index/leave-history",
    },
    {
      title: "Extra Work(Employee)",
      icon: <HistoryIcon />,
      href: "/index/dashboard/extrawork",
    },
  ];

  const RoleTwoMenuList = [
    {
      title: "Dashboard",
      icon: <DashboardOutlinedIcon />,
      href: "/index/dashboard",
    },
    {
      title: "Profile",
      icon: <AccountCircleOutlinedIcon />,
      href: "/index/user-profile",
    },
    {
      title: "Apply Leave",
      icon: <AddBoxOutlinedIcon />,
      href: "/index/apply-leave",
    },
    {
      title: "Applied Leave(Employee)",
      icon: <AppsIcon />,
      href: "/index/dashboard/employee",
    },
    {
      title: "Leave History",
      icon: <HistoryIcon />,
      href: "/index/leave-history",
    },
    // {
    //   title: "Balance Leave",
    //   icon: <HistoryIcon />,
    //   href: "/index/balance-leave-self",
    // },
  ];
  const defaultMenuList = [
    {
      title: "Dashboard",
      icon: <DashboardOutlinedIcon />,
      href: "/index/dashboard",
    },
    {
      title: "Profile",
      icon: <AccountCircleOutlinedIcon />,
      href: "/index/user-profile",
    },
    {
      title: "Apply Leave",
      icon: <AddBoxOutlinedIcon />,
      href: "/index/apply-leave",
    },
    {
      title: "Leave History",
      icon: <HistoryIcon />,
      href: "/index/leave-history",
    },
    // {
    //   title: "Balance Leave",
    //   icon: <HistoryIcon />,
    //   href: "/index/balance-leave-self",
    // },
  ];
  switch (roleid) {
    case "1":
      return RoleOneMenuList;
    case "2":
      return RoleTwoMenuList;
    case "3":
      return RoleThreeMenuList;
    default:
      return defaultMenuList;
  }
};

export default function Header({ handleDrawerClose, handleDrawerOpen, open }) {
  const classes = useStyles();
  const theme = useTheme();
  const currentUser = JSON.parse(App.getCurrentUser());
  const history = useHistory();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(authActions.logout());
    history.push("/index/login");
  };

  const profile = () => {
    history.push("/index/user-profile");
  };

  
  const applyLeave = () => {
    history.push("/index/apply-leave");
  };

  const getAvatarName = () => {
    
    const name = currentUser.scope.name
    const nameIcon = name.substring(0, 1) 
    return nameIcon.toUpperCase();
  };

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.title}>
            <RouterLink to="/index/dashboard">
              <img src={img} alt="logo" style={{ height: "40px" }} />
            </RouterLink>
          </div>
          <div style={{  display:'contents'}}>
          <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={applyLeave}
            >
          <Link to="/index/apply-leave">
            <Typography style={{color:'white'}}>LEAVE <AddCircleIcon style={{color:'white'  }} /></Typography>
                  </Link>
                  &nbsp; | 
                  </IconButton>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={profile}
            >
             
              
              <div className="hide" style={{  display:'contents'}}>
              <Typography>{currentUser.scope.name.toUpperCase()}</Typography>
              &nbsp; | &nbsp;
              <Typography>
                {currentUser.scope.role.name.toUpperCase()}
              </Typography>
              &nbsp; | &nbsp;
              <AccountCircle />
              &nbsp; | &nbsp;
              {/* <NotificationsActiveIcon /> &nbsp; | &nbsp; */}
              </div>
              <PowerSettingsNewIcon onClick={logout} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: theme.spacing(2),
            textTransform: "capitalize",
          }}
        >
          <div className={classes.root}>
            <Avatar
              component={RouterLink}
              to="/index/user-profile"
              className={classes.purple}
            >
              {getAvatarName()}
            </Avatar>
          </div>

          <Typography color="primary" variant="h5">
            {currentUser.scope.name}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {currentUser.scope.role.name.toUpperCase()}
          </Typography>
        </Box>
        <Divider />
        <List>
          {handleRole().map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
}
