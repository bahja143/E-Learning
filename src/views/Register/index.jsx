import React from "react";
import * as Yup from "yup";
import { Grid, Container, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BaseFormik from "../../components/Common/BaseFormik";
import BaseField from "../../components/controllers/BaseField";
import BaseBtn from "../../components/controllers/BaseBtn";

import Header from "../../components/layout/Header";
import colors from "../../config/colors";

const useStyles = makeStyles({
  pageContent: {
    padding: "20px",
    paddingLeft: "15%",
    paddingTop: 35,
    width: "100%",
  },
  container: {
    width: "100%",
  },
  image: {
    width: "50%",
    marginTop: 25,
  },
  imageMobile: {
    width: "100%",
  },
  form: {
    paddingTop: 35,
    width: "100%",
  },
  title: {
    fontSize: 28,
    marginLeft: 15,
    fontFamily: "Roboto",
  },
  brandColor: {
    color: colors.primary,
  },
  nav: {
    fontFamily: "Roboto",
    fontSize: 19,
    fontWeight: "500",
    marginBottom: 25,
  },
  brand: {
    color: colors.primary,
    marginLeft: 5,
  },
  navItem: {
    display: "inline-block",
    marginRight: 5,
    transition: "color .3s",
    "&:hover": {
      color: colors.primary,
      cursor: "pointer",
    },
  },
  titleNav: {
    fontFamily: "Roboto",
    fontSize: 31,
    fontWeight: "500",
    marginTop: -0.1,
  },
  header: {
    padding: "40px 0",
  },
  iconAward: {
    color: colors.white,
    fontSize: 60,
  },
  awardContainer: {
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    padding: 25,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

function Register() {
  const onSubmit = async (values) => {
    const data = {
      ...values,
    };
    console.log(data);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string().required("Required!"),
    password: Yup.string().required("Required!"),
    confirm: Yup.string().required("Required!"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm: "",
  };

  const classes = useStyles();
  const mobile = useMediaQuery("(max-width:768px)");

  return (
    <>
      <Header>
        <Container className={classes.header}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Grid container flexDirection="column">
                <Grid item>
                  <p className={classes.nav}>
                    <span className={classes.navItem}>Home </span> //
                    <span className={classes.brand}>Register</span>
                  </p>
                </Grid>
                <Grid item>
                  <p className={classes.titleNav}>
                    Register <span className={classes.brandColor}>Form</span>
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <div className={classes.awardContainer}>
                <i className={`fas fa-award ${classes.iconAward}`} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Header>
      <Container className={classes.pageContent}>
        <Grid container justifyContent="center" className={classes.container}>
          <Grid item xl={6} xs={12} md={6} sm={12}>
            <div className={classes.bgImg}>
              <img
                src="https://st.depositphotos.com/1771835/1477/i/450/depositphotos_14779185-stock-photo-confident-young-student-back-to.jpg"
                alt=""
                className={mobile ? classes.imageMobile : classes.image}
              />
            </div>
          </Grid>
          <Grid item xl={6} xs={12} md={6} sm={12}>
            <BaseFormik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Grid container spacing={2} className={classes.form}>
                <h3 className={classes.title}>
                  Register <span className={classes.brand}>Now</span>
                </h3>
                <Grid item xs={12}>
                  <BaseField name="name" placeholder="Name" width="100%" />
                </Grid>
                <Grid item xs={12}>
                  <BaseField name="email" placeholder="Email" width="100%" />
                </Grid>
                <Grid item xs={12}>
                  <BaseField
                    name="password"
                    placeholder="Password"
                    width="100%"
                  />
                </Grid>
                <Grid item xs={12}>
                  <BaseField
                    name="confirm"
                    placeholder="Confirm Password"
                    width="100%"
                  />
                </Grid>
                <Grid item xs={12}>
                  <BaseBtn
                    width="100%"
                    label="Create Account"
                    fontSize="18px"
                    hoverBgColor="#141212"
                  />
                </Grid>
                <Grid item xs={12}>
                  <BaseBtn
                    width="100%"
                    label="Sign up"
                    backgroundColor="#e9f4f8"
                    color="#2596be"
                    fontSize="18px"
                  />
                </Grid>
              </Grid>
            </BaseFormik>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Register;
