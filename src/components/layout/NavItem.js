import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

import colors from "../../config/colors";
import SubNavItems from "./SubNavItems";

const useStyles = makeStyles({
  container: {
    width: "100%",
  },
  navItem: {
    fontWeight: "500",
    fontFamily: "Roboto",
    fontSize: 19,
    transition: "color 0.2s",
    "&:hover": {
      color: colors.primary,
      cursor: "pointer",
    },
  },
});

const NavItem = ({ item }) => {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className={classes.container}
    >
      <span className={classes.navItem}>{item.name}</span>
      {show && <SubNavItems items={item.children} />}
    </div>
  );
};

export default NavItem;
