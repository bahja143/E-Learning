import React from "react";
import { makeStyles } from "@mui/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import colors from "../../config/colors";

const useStyles = makeStyles({
  container: {
    backgroundColor: "rgba(37, 150, 190, 0.5)",
    width: 70,
    height: 43,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    transition: "background-color .2s",
    "&:hover": {
      backgroundColor: colors.primary,
      cursor: "pointer",
    },
  },
  number: {
    color: colors.white,
    fontSize: 20,
    fontFamily: "Roboto",
    marginLeft: 5,
  },
  icon: {
    color: colors.white,
    fontSize: 14,
  },
});

const NextPagination = ({ onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.container} onClick={onClick}>
      <span className={classes.number}>Next</span>
      <KeyboardArrowRightIcon className={classes.icon} />
    </div>
  );
};

export default NextPagination;
