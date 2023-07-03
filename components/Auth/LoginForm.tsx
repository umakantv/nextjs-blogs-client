import React, { useContext, useState } from "react";
import { Button, DialogContent, TextField } from "../ui";

import AuthContext from "../../contexts/Auth";

export default function LoginForm() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <DialogContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            login(email, password);
          }}
        >
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            label="Username or Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            style={{ marginTop: 20 }}
            fullWidth
            type="submit"
          >
            Login
          </Button>
        </form>
      </DialogContent>
    </div>
  );
}
