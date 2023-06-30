import React, { useState } from "react";
import {
  FormHelperText,
  TextField,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { TextFieldProps, TextFieldVariants } from "@mui/material/TextField";
// import View from "@material-ui/icons/Visibility";
// import Hide from "@material-ui/icons/VisibilityOff";

function Hide({ fontSize }) {
  return <span className="material-symbols-outlined">visibility_off</span>;
}

function View({ fontSize }) {
  return <span className="material-symbols-outlined">visibility</span>;
}

// type AdditionalProps = {
//   /**
//    * The variant to use.
//    * @default 'outlined'
//    */
//   variant?: TextFieldVariants;

//   error: string;
//   info?: string;
//   otherInputProps?: any;
//   tabIndex?: number;
// };

// type CustomTextFieldProps =  AdditionalProps extends Omit<TextFieldProps, "variant">;

function capitalize(str?: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function CustomTextField({
  error,
  success,
  required = false,
  label,
  id,
  value,
  onChange,
  name,
  variant,
  tabIndex,
  info,
  loading = false,
  type = "text",
  autoComplete = "on",
  otherInputProps = {},
  ...props
}: any) {
  const [visible, setVisible] = useState(false);

  error = capitalize(error);

  return (
    <>
      <TextField
        fullWidth
        style={{
          marginTop: 15,
          ...(success == true ? { borderColor: "green" } : {}),
        }}
        label={label}
        variant={variant as any}
        error={Boolean(error)}
        success={success}
        required={required}
        type={visible ? "text" : type}
        id={id}
        name={name}
        value={value}
        tabIndex={tabIndex}
        onChange={onChange}
        InputProps={{
          endAdornment:
            type === "password" ? (
              <IconButton tabIndex={5} onClick={() => setVisible(!visible)}>
                {visible ? (
                  <Hide fontSize="small" />
                ) : (
                  <View fontSize="small" />
                )}
              </IconButton>
            ) : (
              loading === true && <CircularProgress size={12} />
            ),
          autoComplete,
          ...otherInputProps,
        }}
        {...props}
      />
      {info && <FormHelperText>{info}</FormHelperText>}
      {error && (
        <FormHelperText error={true}>
          {error.charAt(0).toUpperCase() + error.slice(1)}
        </FormHelperText>
      )}
    </>
  );
}
