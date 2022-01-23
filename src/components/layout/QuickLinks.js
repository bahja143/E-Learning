import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography } from "@mui/material";
import { CallOutlined } from "@mui/icons-material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import colors from "../../config/colors";
import Logo from "../../assets/Logo.png";

const useStyles = makeStyles({
  container: {
    backgroundColor: "rgba(37, 150, 190, 0.17)",
    padding: "55px 0",
  },
  img: {
    height: 70,
    position: "relative",
    top: 3,
    left: -7,
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
  icon: {
    color: colors.primary,
    position: "relative",
    top: 6,
    marginRight: 13,
  },
  nav: {
    transition: "color .3s",
    paddingTop: 3,
    "&:hover": {
      color: colors.primary,
      cursor: "pointer",
    },
  },
  socialIcon: {
    transition: "color .3s",
    fontSize: 20,

    "&:hover": {
      color: colors.primary,
    },
  },
  city: {
    display: "block",
    fontFamily: "Roboto",
    fontSize: 25,
    fontWeight: "500",
    marginBottom: 6,
  },
  subAddress: {
    fontFamily: "Roboto",
    color: colors.primary,
    fontSize: 16,
  },
  title: {
    display: "inline-block",
    fontFamily: "Roboto",
    fontSize: 25,
    fontWeight: "400",
    marginBottom: 22.5,
    marginTop: 25,
  },
  navItem: {
    display: "inline-block",
    color: colors.lightBlack,
    fontFamily: "Roboto",
    transition: "color 0.2s",
    fontSize: 17,
    margin: "8px 0",
    "&:hover": {
      color: colors.primary,
      cursor: "pointer",
    },
  },
});

const QuickLinks = () => {
  const classes = useStyles();

  const handleEmail = () => {
    window.open("mailto:address@gmail.com");
  };

  const handlePhoneCall = () => {
    window.open("tel:(970) 262-1413", "_self");
  };

  return (
    <div className={classes.container}>
      <Container>
        <Grid container justifyContent="space-around">
          <Grid item xs={12} xl={4} sm={4} lg={4}>
            <Grid container flexDirection="column" spacing={3}>
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

              <Grid item>
                <Grid container flexDirection="column">
                  <Grid item>
                    <span className={classes.city}>Hargiesa</span>
                  </Grid>
                  <Grid item>
                    <span className={classes.subAddress}>
                      Haymarket, Virginia (VA).
                    </span>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container flexDirection="column">
                  <Grid item>
                    <Typography className={classes.nav}>
                      <CallOutlined className={classes.icon} />
                      <span onClick={() => handlePhoneCall()}>
                        (970) 262-1413{" "}
                      </span>
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography className={classes.nav}>
                      <MailOutlineIcon className={classes.icon} />
                      <span onClick={handleEmail}>address@gmail.com </span>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container spacing={4}>
                  <Grid item>
                    <i className={`fab fa-facebook-f  ${classes.socialIcon}`} />
                  </Grid>

                  <Grid item>
                    <i className={`fab fa-twitter  ${classes.socialIcon}`} />
                  </Grid>

                  <Grid item>
                    <i className={`fab fa-instagram  ${classes.socialIcon}`} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} xl={4} sm={4} lg={4}>
            <Grid container>
              <Grid item>
                <span className={classes.title}>Category</span>
              </Grid>
            </Grid>
            <Grid item>
              <span className={classes.navItem}>Creative Writing</span>
            </Grid>
            <Grid item>
              <span className={classes.navItem}>Film & Video</span>
            </Grid>
            <Grid item>
              <span className={classes.navItem}>Graphic Design</span>
            </Grid>
            <Grid item>
              <span className={classes.navItem}>UI/UX Design</span>
            </Grid>
            <Grid item>
              <span className={classes.navItem}>Business Analytics</span>
            </Grid>
            <Grid item>
              <span className={classes.navItem}>Marketing</span>
            </Grid>
          </Grid>

          <Grid item xs={12} xl={4} sm={4} lg={4}>
            <Grid container>
              <Grid item>
                <span className={classes.title}>Quick Links</span>
              </Grid>
            </Grid>
            <Grid item>
              <span className={classes.navItem}>Creative Writing</span>
            </Grid>
            <Grid item>
              <span className={classes.navItem}>Film & Video</span>
            </Grid>
            <Grid item>
              <span className={classes.navItem}>Graphic Design</span>
            </Grid>
            <Grid item>
              <span className={classes.navItem}>UI/UX Design</span>
            </Grid>
            <Grid item>
              <span className={classes.navItem}>Business Analytics</span>
            </Grid>
            <Grid item>
              <span className={classes.navItem}>Marketing</span>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default QuickLinks;
