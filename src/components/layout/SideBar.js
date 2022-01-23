import React, { useState } from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CallOutlined } from "@mui/icons-material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import colors from "../../config/colors";

const useStyles = makeStyles({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 1,
  },
  body: {
    backgroundColor: colors.white,
    width: "75%",
    paddingTop: 75,
    height: "100%",
    overflow: "hidden",
    animation: "$fadeIn .4s ease-in-out",
  },
  bodyMobile: {
    backgroundColor: colors.white,
    width: "75%",
    height: "100%",
    overflow: "hidden",
    animation: "$fadeIn .4s ease-in-out",
  },
  menu: {
    fontSize: 25,
    margin: 15,
    color: "#444",
    position: "relative",
    top: 15,
  },
  icon: {
    color: colors.primary,
    position: "relative",
    top: 6,
    marginRight: 5,
  },
  nav: {
    transition: "color .3s",
    paddingTop: 3,
    "&:hover": {
      color: colors.primary,
      cursor: "pointer",
    },
  },
  contact: {
    marginTop: 25,
    marginBottom: 45,
  },
  btn: {
    display: "flex",
    textTransfrom: "capitalize",
    fontFamily: "Roboto",
    fontSize: 18,
    border: "0.75px solid rgba(37, 150, 190, 0.75)",
    borderRadius: 5,
    width: 115,
    height: 43,
    justifyContent: "center",
    alignItems: "center",
    "&:active": {
      backgroundColor: colors.primary,
      color: colors.white,
    },
  },
  navigation: {
    marginTop: 25,
    width: "100%",
  },
  navItem: {
    width: "100%",
    fontFamily: "Roboto",
    fontSize: 17.5,
    fontWeight: "400",
    margin: "4px 0",
    paddingLeft: 20,
    color: colors.black,
    textDecoration: "none",
  },
  contactNav: {
    borderBottom: "1px solid #eee",
    borderTop: "1px solid #eee",
    paddingBottom: 12,
  },
  subNav: {
    paddingLeft: 38,
    fontSize: 16.5,
  },
  "@keyframes fadeIn": {
    "0%": {
      transform: "translateX(-25rem)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  },
  openNavIcon: {
    position: "relative",
    top: 5,
    right: 15,
    fontSize: 20,
    color: "#444",
  },
  navConta: {
    display: "flex",
    borderTop: "1px solid #eee",
    paddingTop: 5,
    paddingBottom: 5,
  },
});

const SideBar = ({ show, setShow, menus }) => {
  const classes = useStyles();
  const [open, setOpen] = useState({ id: 0, show: false });
  const mobile = useMediaQuery("(max-width:375px)");

  const handleEmail = () => {
    window.open("mailto:address@gmail.com");
  };

  const handlePhoneCall = () => {
    window.open("tel:(970) 262-1413", "_self");
  };

  const handleOpenSubNav = (id) => {
    open.show && open.id === id
      ? setOpen({ id, show: false })
      : setOpen({ id, show: true });
  };

  if (!show) return null;

  return (
    <div className={classes.container}>
      <div className={mobile ? classes.bodyMobile : classes.body}>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <i
              onClick={() => setShow(false)}
              className={`fas fa-times ${classes.menu}`}
            />
          </Grid>
        </Grid>

        <Grid
          container
          flexDirection="column"
          alignItems="center"
          className={classes.contact}
        >
          <Grid item>
            <Typography className={classes.nav}>
              <CallOutlined className={classes.icon} />
              <span onClick={() => handlePhoneCall()}>(970) 262-1413 </span>
            </Typography>
          </Grid>

          <Grid item>
            <Typography className={classes.nav}>
              <MailOutlineIcon className={classes.icon} />
              <span onClick={handleEmail}>address@gmail.com </span>
            </Typography>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" spacing={3}>
          <Grid item>
            <span className={classes.btn}>Sign In</span>
          </Grid>
          <Grid item>
            <span className={classes.btn}>Sign Up</span>
          </Grid>
        </Grid>

        <Grid container flexDirection="column" className={classes.navigation}>
          {menus.map((r) => (
            <Grid item key={r.id} xs={12}>
              <div
                className={classes.navConta}
                onClick={() => handleOpenSubNav(r.id)}
              >
                <a href={r.url} className={classes.navItem}>
                  {r.name}
                </a>
                {r.children &&
                  (open.show && open.id === r.id ? (
                    <i className={`fas fa-minus ${classes.openNavIcon}`} />
                  ) : (
                    <i className={`fas fa-plus ${classes.openNavIcon}`} />
                  ))}
              </div>
              {open.id === r.id && open.show && r.children
                ? r.children.map((c) => (
                    <Grid container key={c.id}>
                      <Grid
                        item
                        key={c.id}
                        xs={12}
                        className={classes.navConta}
                      >
                        <p className={`${classes.navItem} ${classes.subNav}`}>
                          {c.name}
                        </p>
                      </Grid>
                    </Grid>
                  ))
                : null}
            </Grid>
          ))}
          <Grid item xs={12}>
            <p className={`${classes.navItem} ${classes.contactNav}`}>
              Contact
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SideBar;
