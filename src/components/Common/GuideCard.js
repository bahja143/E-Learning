import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import colors from "../../config/colors";

const useStyles = makeStyles({
  container: {
    backgroundColor: "rgba(37, 150, 190, 0.1)",
    borderRadius: 10,
    padding: 28,
  },
  icon: {
    color: "inherit",
    fontSize: 30,
  },
  iconContainer: {
    width: 70,
    height: 70,
    backgroundColor: colors.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "0.5px solid rgba(37, 150, 190, 0.20)",
    borderRadius: 10,
    color: colors.primary,
    transition: "background-color .3s, color .3s",
    "&:hover": {
      backgroundColor: colors.primary,
      color: colors.white,
    },
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 25,
    fontWeight: "500",
    marginTop: 30,
  },
  text: {
    fontFamily: "Roboto",
    color: colors.lightBlack,
    fontSize: 17,
    lineHeight: 1.6,
  },
});

const GuideCard = ({ item }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container flexDirection="column">
        <Grid item>
          <div className={classes.iconContainer}>
            <i className={`fas fa-${item.icon} ${classes.icon}`} />
          </div>
        </Grid>
        <Grid item>
          <p className={classes.title}>{item.title}</p>
        </Grid>
        <Grid item>
          <p className={classes.text}>{item.text}</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default GuideCard;
