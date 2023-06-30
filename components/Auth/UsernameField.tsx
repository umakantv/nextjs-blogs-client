import React, { useEffect, useState } from "react";
import { Button, CircularProgress, DialogContent, TextField } from "../ui";
import { AuthApi } from "../../api";
import { toast } from "react-toastify";
import useDebounce from "../../hooks/debouce";
import { ErrorIcon, UnavailableIcon, VerifiedIcon } from "../icons";

let usernameRegex = new RegExp(/^[_a-z0-9]+$/);
function validateUsername(username: string) {
  if (!username) return "Username is required";
  if (username.length < 4) return "Username should have at least 4 characters";

  if (!usernameRegex.test(username)) return "Invalid characters";

  // if (username.match(/^[_a-z0-9]+$/)) {
  // }
}

export default function UsernameField({ onChange }) {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [usernameToCheck] = useDebounce(username);
  const [usernameAvailable, setUsernameAvailable] = useState(null); // null, true, false, "Some error"

  useEffect(() => {
    if (!usernameToCheck) {
      setUsernameAvailable(null);
      return;
    }
    const error = validateUsername(usernameToCheck);
    if (error) {
      setUsernameAvailable(error);
      return;
    }
    setLoading(true);
    AuthApi.checkUsernameAvailable(usernameToCheck)
      .then(() => {
        setUsernameAvailable(true);
      })
      .catch((err) => {
        console.log("Error", err);
        if (err?.status === 409) {
          setUsernameAvailable(false);
        } else {
          setUsernameAvailable(err?.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [usernameToCheck]);

  useEffect(() => onChange(username), [username]);

  let success = null;
  let error = "";
  let endAdornment = null;
  if (loading) {
    endAdornment = <CircularProgress size={18} />;
  } else if (usernameAvailable === true) {
    endAdornment = <VerifiedIcon />;
    success = true;
    error = "";
  } else if (usernameAvailable === false) {
    endAdornment = <UnavailableIcon />;
    error = "Username is not available";
  } else if (usernameAvailable !== null) {
    endAdornment = <ErrorIcon />;
    error = usernameAvailable;
  }

  return (
    <TextField
      margin="dense"
      id="usernmae"
      label="Username"
      type="username"
      fullWidth
      autoFocus
      required
      variant="outlined"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      info={"Use only alphabets, numbers and _"}
      error={error}
      success={true}
      otherInputProps={{
        endAdornment,
      }}
    />
  );
}
