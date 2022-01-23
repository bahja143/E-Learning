import React from "react";
import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import colors from "../../config/colors";
import PlayStoreLogo from "../../assets/PlayStore.png";
import AppleStore from "../../assets/AppleStore.png";

const useStyles = makeStyles({
  container: {
    backgroundColor: colors.primary,
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "55px 0",
  },
  title: {
    color: colors.white,
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 20,
  },
  heading: {
    display: "block",
    color: colors.white,
    fontFamily: "Roboto",
    fontSize: 40,
    fontWeight: "500",
    paddingTop: 20,
  },
  logo: {
    width: "100%",
    "&:hover": {
      cursor: "pointer",
    },
  },
});

const DownloadApp = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={4}
        >
          <Grid item xl={5} sm={5} xs={12}>
            <Grid container flexDirection="column">
              <Grid item>
                <span className={classes.title}>Ready to start?</span>
              </Grid>
              <Grid item>
                <span className={classes.heading}>
                  Download our mobile app. for easy to start your course.
                </span>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xl={4} sm={5} xs={12}>
            <Grid container spacing={2}>
              <Grid item xl={6} sm={6} xs={6}>
                <img className={classes.logo} src={PlayStoreLogo} alt="Logo" />
              </Grid>
              <Grid item xl={6} sm={6} xs={6}>
                <img className={classes.logo} src={AppleStore} alt="Logo" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default DownloadApp;
