import React from "react";
import { Routes, Route } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import Home from "../../views/Home/Home";
import Register from "../../views/Register";
import Login from "../../views/Login";
import CourseDetail from "../../views/Course/CourseDetail";

const useStyles = makeStyles({
  container: {
    width: "100%",
    position: "relative",
    top: -28,
  },
});

const Body = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/coursedetail" element={<CourseDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Body;
