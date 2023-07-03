import React, { useState } from "react";
import { Button, DialogContent, TextField } from "../ui";
import { AuthApi } from "../../api";
import { toast } from "react-toastify";
import UsernameField from "./UsernameField";

export default function RegisterForm({ setFormType }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [username, setUsername] = useState("");

  const register = () => {
    AuthApi.registerApi(name, username, email, password)
      .then(() => {
        setFormType("login");
        toast("Registered successfully", { type: "success" });
      })
      .catch((err) => {
        // Show error notification
        toast(err?.message || "Something went wrong", {
          type: "error",
        });
      });
  };

  return (
    <div>
      <DialogContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            register();
          }}
        >
          <UsernameField onChange={(username) => setUsername(username)} />
          <TextField
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            style={{ marginTop: 20 }}
            fullWidth
            type="submit"
          >
            Sign Up
          </Button>
        </form>
      </DialogContent>
    </div>
  );
}
