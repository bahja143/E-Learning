import React from "react";
import { Typography, Grid, Link, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CallOutlined } from "@mui/icons-material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import colors from "../../config/colors";

const useStyles = makeStyles({
  container: {
    backgroundColor: colors.black,
    width: "100%",
    height: 42,
    color: "#fff",
    boxShadow: "0 0 25px #fff",
    paddingTop: 7,
    zIndex: 1,
  },
  brand: {
    fontSize: 17,
    fontWeight: "bold",
  },
  icon: {
    color: colors.primary,
    position: "relative",
    top: 6,
    marginRight: 5,
  },
  socialIcon: {
    transition: "color .3s",
    fontSize: 20,
    "&:hover": {
      color: colors.primary,
    },
  },
  nav: {
    transition: "color .3s",
    "&:hover": {
      color: colors.primary,
      cursor: "pointer",
    },
  },
});

const TopHeader = () => {
  const classes = useStyles();

  const handleEmail = () => {
    window.open("mailto:address@gmail.com");
  };

  const handlePhoneCall = () => {
    window.open("tel:(970) 262-1413", "_self");
  };

  return (
    <div className={classes.container}>
      <Container maxWidth="lg">
        <Grid
          container
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Grid item className={classes.offer}>
            <Grid container spacing={1}>
              <Grid item>
                <Typography>All course 28% off for</Typography>
              </Grid>
              <Grid item>
                <Link
                  className={classes.brand}
                  color={colors.primary}
                  underline="none"
                >
                  Somalian people’s.
                </Link>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container spacing={4}>
              <Grid item>
                <Typography className={classes.nav}>
                  <CallOutlined className={classes.icon} />
                  <span onClick={() => handlePhoneCall()}>(970) 262-1413 </span>
                </Typography>
              </Grid>

              <Grid item>
                <Typography className={classes.nav}>
                  <MailOutlineIcon className={classes.icon} />{" "}
                  <span onClick={handleEmail}>address@gmail.com </span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container spacing={2}>
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
      </Container>
    </div>
  );
};

export default TopHeader;
