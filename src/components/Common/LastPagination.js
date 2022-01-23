import React from "react";
import { makeStyles } from "@mui/styles";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

import colors from "../../config/colors";

const useStyles = makeStyles({
  container: {
    backgroundColor: "rgba(37, 150, 190, 0.5)",
    width: 75,
    height: 43,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
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
  },
  icon: {
    color: colors.white,
    fontSize: 14,
  },
});

const LastPagination = ({ onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.container} onClick={onClick}>
      <span className={classes.number}>Last</span>
      <DoubleArrowIcon className={classes.icon} />
    </div>
  );
};

export default LastPagination;
