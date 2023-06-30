import React, { useContext, useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Divider,
} from "../ui";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import config from "../../config";
import AuthContext from "../../contexts/Auth";

export default function Login() {
  const { showLoginForm, setShowLoginForm } = useContext(AuthContext);
  const [formType, setFormType] = useState("login");

  const handleClose = () => {
    setShowLoginForm(false);
  };

  return (
    <div className="app-login">
      <Dialog open={showLoginForm} onClose={handleClose}>
        {formType === "login" ? (
          <>
            <DialogTitle fontSize={34}>Login</DialogTitle>
            <LoginForm />
          </>
        ) : (
          <>
            <DialogTitle fontSize={34}>Sign Up</DialogTitle>
            <RegisterForm setFormType={setFormType} />
          </>
        )}

        <Divider />
        <DialogContent>
          <DialogActions>
            <Button
              onClick={() =>
                setFormType(formType === "login" ? "register" : "login")
              }
            >
              {formType === "login" ? "Sign Up" : "Login"}
            </Button>
            <a
              href={`https://github.com/login/oauth/authorize?client_id=${config.GITHUB_OAUTH_CLIENT_ID}`}
            >
              <Button>Login With Github</Button>
            </a>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}
