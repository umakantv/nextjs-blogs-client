import React, { useState } from "react";
import {
  FormHelperText,
  TextField,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { StandardTextFieldProps } from "@mui/material/TextField";
import { InputProps } from "@mui/material/Input";
import { Hide, View } from "../icons";

interface CustomTextFieldProps extends StandardTextFieldProps {
  /**
   * The variant to use.
   * @default 'outlined'
   */
  // variant?: TextFieldVariants;

  errorMessage?: string;
  info?: string;
  otherInputProps?: Partial<InputProps>;
  tabIndex?: number;
  success?: boolean;
  loading?: boolean;
}

function capitalize(str?: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function CustomTextField({
  errorMessage,
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
}: CustomTextFieldProps) {
  const [visible, setVisible] = useState(false);

  errorMessage = capitalize(errorMessage);

  return (
    <>
      <TextField
        fullWidth
        style={{
          marginTop: 15,
        }}
        label={label}
        variant={variant as any}
        error={Boolean(errorMessage)}
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
      {errorMessage && (
        <FormHelperText error={true}>{errorMessage}</FormHelperText>
      )}
    </>
  );
}
