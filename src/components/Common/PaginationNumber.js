import React from "react";
import { makeStyles } from "@mui/styles";

import colors from "../../config/colors";

const useStyles = makeStyles({
  container: {
    backgroundColor: "rgba(37, 150, 190, 0.5)",
    width: 50,
    height: 43,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    transition: "background-color .2s",
    "&:hover": {
      backgroundColor: colors.primary,
      cursor: "pointer",
    },
  },
  active: {
    backgroundColor: colors.primary,
  },
  number: {
    color: colors.white,
    fontSize: 21,
    fontFamily: "Roboto",
  },
});

const PaginationNumber = ({ number, onClick, active }) => {
  const classes = useStyles();

  return (
    <div
      className={`${classes.container} ${active && classes.active}`}
      onClick={onClick}
    >
      <span className={classes.number}>{number}</span>
    </div>
  );
};

export default PaginationNumber;
