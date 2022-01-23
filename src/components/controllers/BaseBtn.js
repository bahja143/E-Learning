import { makeStyles } from "@mui/styles";
import { Button } from "@material-ui/core";
import colors from "../../config/colors";

function BaseBtn(props) {
  const {
    onClick,
    // parentclass,
    disabled,
    startIcon,
    hoverBgColor = colors.primary,
    hoverColor = "#fff",
    width = "4rem",
    height = "4rem",
    marginTop = "0.5rem",
    marginLeft,
    borderRadius = 15,
    backgroundColor = colors.primary,
    label = "Submit",
    color = colors.white,
    type = "submit",
    fontWeight,
    fontSize,
  } = props;

  const useStyles = makeStyles({
    Button: {
      borderRadius,
      marginTop,
      marginLeft,
      backgroundColor,
      width,
      height,
      fontWeight,
      color,
      fontSize,
      "&:hover": {
        backgroundColor: hoverBgColor,
        color: hoverColor,
      },
    },
  });

  const classes = useStyles();

  return (
    // <div className={parentclass}>
    <Button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={classes.Button}
      startIcon={startIcon}
    >
      {label}
    </Button>
    // </div>
  );
}

export default BaseBtn;
