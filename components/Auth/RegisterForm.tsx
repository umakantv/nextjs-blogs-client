import React, { useState } from "react";
import { Button, DialogContent, TextField } from "../ui";
import { AuthApi } from "../../api";
import { toast } from "react-toastify";

export default function RegisterForm({ setFormType }) {
  const [name, setName] = useState("Umakant Vashishtha");
  const [email, setEmail] = useState("umakantvashishtha@example.com");
  const [password, setPassword] = useState("password");

  const register = () => {
    AuthApi.registerApi(name, email, password)
      .then((response) => {
        setFormType("login");
        toast("Registered successfully", { type: "success" });
      })
      .catch((err) => {
        console.error(err);
        // Show error notification
        toast(err?.response?.data?.message || "Something went wrong", {
          type: "error",
        });
      });
  };

  return (
    <div>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="name"
          fullWidth
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          style={{ marginTop: 20 }}
          fullWidth
          onClick={() => register()}
        >
          Sign Up
        </Button>
      </DialogContent>
    </div>
  );
}
