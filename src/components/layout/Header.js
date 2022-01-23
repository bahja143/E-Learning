import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    width: "100%",
    backgroundColor: "rgba(37, 150, 190, 0.1)",
    position: "relative",
    top: 27,
  },
});
const Header = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.container}>{children}</div>;
};

export default Header;
