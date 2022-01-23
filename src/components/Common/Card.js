import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

import colors from "../../config/colors";

const useStyles = makeStyles({
  container: {
    border: `1.5px solid rgba(37, 150, 190, 0.2)`,
    borderRadius: 20,
    padding: 12.5,
    transition: "border .25s",
    "&:hover": {
      border: `1.5px solid rgba(37, 150, 190, 0.7)`,
    },
  },
  img: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    "&:hover": {
      cursor: "pointer",
    },
  },
  teacher: {
    width: 55,
    height: 55,
    borderRadius: 100,
  },
  name: {
    fontSize: 15.25,
    fontFamily: "Roboto",
    color: colors.lightBlack,
    position: "relative",
    top: -25,
    left: 10,
    transition: "color .3s",
    "&:hover": {
      color: colors.primary,
      cursor: "pointer",
    },
  },
  teacherContainer: {
    marginTop: 18,
  },
  category: {
    backgroundColor: "rgba(37, 150, 190, 0.1)",
    width: 95,
    height: 34,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    position: "relative",
    top: 7,
    color: colors.primary,
    transition: "background-color .3s, color .3s",
    "&:hover": {
      backgroundColor: colors.primary,
      color: colors.white,
      cursor: "pointer",
    },
  },
  categoryName: {
    color: "inherit",
    fontFamily: "Roboto",
    "&:hover": {
      color: colors.white,
    },
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 17.25,
    fontWeight: "500",
    color: colors.black,
    lineHeight: 1.5,
    transition: "color .3s",
    "&:hover": {
      color: colors.primary,
      cursor: "pointer",
    },
  },
  icon: {
    color: colors.primary,
    marginRight: 6,
  },
  text: {
    color: colors.lightBlack,
    fontFamily: "Roboto",
  },
  priceContainer: {
    width: "100%",
    height: 50,
    backgroundColor: "rgba(37, 150, 190, 0.1)",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 9,
  },
  price: {
    fontSize: 19,
    fontFamily: "Roboto",
    fontWeight: "700",
    color: colors.primary,
    marginLeft: 15,
  },
});

const Card = ({ course }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <img src={course.image} alt="JavaScript" className={classes.img} />

      <Grid
        container
        justifyContent="space-between"
        className={classes.teacherContainer}
      >
        <Grid item>
          <img
            className={classes.teacher}
            src={course.instructor.image}
            alt="Teacher"
          />
          <span className={classes.name}>{course.instructor.name}</span>
        </Grid>

        <Grid item>
          <div className={classes.category}>
            <span className={classes.categoryName}>{course.category}</span>
          </div>
        </Grid>
      </Grid>

      <p onClick={() => navigate("/coursedetail")} className={classes.title}>
        {course.title}
      </p>

      <Grid container justifyContent="space-between">
        <Grid item>
          <i className={`far fa-clock ${classes.icon}`} />
          <span className={classes.text}> 08 hr 15 mins</span>
        </Grid>

        <Grid item>
          <i className={`fas fa-book-reader ${classes.icon}`} />
          <span className={classes.text}>29 Lectures</span>
        </Grid>
      </Grid>

      <div className={classes.priceContainer}>
        <span className={classes.price}>${course.price}</span>
      </div>
    </div>
  );
};

export default Card;
