import TextError from "./textError";
import { Field, ErrorMessage } from "formik";
import { makeStyles } from "@mui/styles";
import { TextField, FormLabel } from "@material-ui/core";

function BaseField(props) {
  const {
    name,
    lable,
    size = "medium",
    placeholder,
    topLabel,
    variant = "outlined",
    parentclass,
    background,
    width,
    ...rest
  } = props;

  const useStyles = makeStyles({
    root: {
      background,
      width,
    },
  });

  const classes = useStyles();

  return (
    <div className={parentclass}>
      <FormLabel>{topLabel}</FormLabel>
      <Field name={name}>
        {(props) => {
          return (
            <TextField
              // fullWidth
              size={size}
              placeholder={placeholder}
              label={lable}
              className={classes.root}
              variant={variant}
              {...rest}
              {...props.field}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default BaseField;
