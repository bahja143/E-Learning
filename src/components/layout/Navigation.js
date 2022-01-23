import React, { useState, useEffect } from "react";
import { Container, Grid, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Logo from "../../assets/Logo.png";
import colors from "../../config/colors";

import NavItem from "./NavItem";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: 150,
    backgroundColor: "rgba(37, 150, 190, 0.1)",
    position: "relative",
    top: -1,
    paddingTop: 29,
  },
  img: {
    width: 70,
    height: 70,
    position: "relative",
    top: 3,
    left: -7,
  },
  header: {
    marginTop: 10,
    border: "0.5px solid rgba(37, 150, 190, 0.25)",
    borderRadius: 15,
    padding: "8px 25px",
  },
  "@keyframes fadeIn": {
    "0%": {
      transform: "translateY(-5rem)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },
  headerScroll: {
    backgroundColor: colors.white,
    marginTop: -49,
    padding: "8px 25px",
    position: "fixed",
    left: 0,
    top: 0,
    boxShadow: "5px 2.5px 5px rgba(0, 0, 0, 0.15)",
    animation: "$fadeIn .75s ease-in-out",
    zIndex: 1,
  },
  name: {
    position: "relative",
    top: 20,
    left: 5,
    fontWeight: "bold",
    fontSize: 28,
    fontFamily: "Roboto",
  },
  brand: {
    color: colors.primary,
  },
  signUp: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 52.5,
    border: "0.5px solid rgba(37, 150, 190, 0.75)",
    borderRadius: 10,
    fontWeight: "500",
    fontFamily: "Roboto",
    fontSize: 18,
    backgroundColor: colors.white,
    transition: "color .3s, background-color .3s",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: colors.primary,
      color: colors.white,
    },
  },
  signIn: {
    position: "relative",
    top: 17,
    fontWeight: "500",
    fontFamily: "Roboto",
    fontSize: 19,
    transition: "color 0.2s",
    "&:hover": {
      color: colors.primary,
      cursor: "pointer",
    },
  },
  menu: {
    fontSize: 28,
    color: colors.primary,
  },
});

const Navigation = ({ setShow, menus }) => {
  const classes = useStyles();
  const [scrollPosition, setScrollPosition] = useState(0);
  const mobile = useMediaQuery("(max-width:768px)");

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={classes.container}
      onScroll={(e) => console.log("scrolling!", e.target.scrollTop)}
    >
      <Container>
        <Grid
          container
          justifyContent={
            scrollPosition >= 120
              ? mobile
                ? "space-between"
                : "center"
              : "space-between"
          }
          alignItems="center"
          className={
            scrollPosition >= 120 ? classes.headerScroll : classes.header
          }
          spacing={scrollPosition >= 120 ? (mobile ? 8 : 10) : 0}
        >
          <Grid item>
            <Grid container>
              <Grid item>
                <img className={classes.img} src={Logo} alt="" />
              </Grid>
              <Grid item>
                <span className={classes.name}>
                  <span className={classes.brand}>Iqra</span> College
                </span>
              </Grid>
            </Grid>
          </Grid>
          {!mobile && (
            <Grid item>
              <Grid container spacing={4}>
                {menus.map((r) => (
                  <Grid item key={r.id}>
                    <NavItem item={r} key={r.id} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          )}
          <Grid item>
            {mobile ? (
              <i
                onClick={() => setShow(true)}
                className={`fas fa-bars ${classes.menu}`}
              />
            ) : (
              <Grid container spacing={2}>
                <Grid item>
                  <span className={`${classes.navItem} ${classes.signIn}`}>
                    Sign In
                  </span>
                </Grid>
                <Grid item>
                  <span className={classes.signUp}>Sign Up </span>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Navigation;
