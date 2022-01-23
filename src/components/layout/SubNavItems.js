import React from "react";
import { makeStyles } from "@mui/styles";

import colors from "../../config/colors";

const useStyles = makeStyles({
  container: {
    backgroundColor: "transparent",
    width: 215,
    marginLeft: -20,
    position: "absolute",
    zIndex: 1,
  },
  body: {
    backgroundColor: colors.white,
    borderTop: "2px solid #000",
    width: 215,
    marginTop: 25,
    paddingBottom: 3,
    animation: "$fadeIn .3s ease-in-out",
  },
  "@keyframes fadeIn": {
    "0%": {
      transform: "translateY(0.3rem)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },
  item: {
    fontSize: 17.5,
    fontWeight: "500",
    fontFamily: "Roboto",
    marginLeft: 15,
    transition: "color .5s, transform .5s",
    "&:hover": {
      color: colors.primary,
      transform: "translateX(0.5rem)",
    },
  },
});
const SubNavItems = ({ items }) => {
  const classes = useStyles();

  if (!items) return null;

  return (
    <div className={classes.container}>
      <div className={classes.body}>
        {items?.map((i) => (
          <p className={classes.item} key={i.id}>
            {i.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SubNavItems;
