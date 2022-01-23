import React from "react";
import { makeStyles } from "@mui/styles";

import colors from "../../config/colors";

const useStyles = makeStyles({
  container: {
    backgroundColor: colors.black,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 18,
    color: colors.white,
    fontWeight: "300",
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <p className={classes.text}>
        &copy; Iqra College {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
