import {
  NavLink as RouterLink,
  matchPath,
  useLocation,
} from "react-router-dom";
import PropTypes from "prop-types";
import { Button, ListItem } from "@material-ui/core";

const NavItem = ({ href, icon, title, ...rest }) => {
  const location = useLocation();
  const active = href
    ? !!matchPath(location.pathname, {
        path: href,
        exact: true,
      })
    : false;

  return (
    <ListItem
      disableGutters
      style={{
        display: "flex",
        py: 0,
      }}
      {...rest}
    >
      <Button
        fullWidth
        component={RouterLink}
        color={active ? "primary" : "text.secondary"}
        style={{
          justifyContent: "flex-start",
          fontWeight: "medium",
          letterSpacing: 0,
          py: 1.25,
          textTransform: "UperCase",
          width: "100%",
          "& svg": {
            mr: 1,
          },
        }}
        to={href}
      >
        {icon}&nbsp;
        <span>{title}</span>
      </Button>
    </ListItem>
  );
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string,
};

export default NavItem;
