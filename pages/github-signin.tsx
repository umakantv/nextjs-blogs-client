import React from "react";
import { CardContent, CircularProgress, Typography } from "../components/ui";
import { useEffect } from "react";
import { AuthApi } from "../api";
import { toast } from "react-toastify";

export default function GithubSignin() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      AuthApi.loginWithGithubApi(code)
        .then((response: any) => {
          const { token } = response;
          localStorage.setItem("auth-token", token);
          window.location.replace("/");
        })
        .catch((err) => {
          toast("Error while logging you in with github", {
            type: "error",
          });
        });
    }
  }, []);

  return (
    <CardContent>
      <CircularProgress />
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 mb-8">
        Logging you in with GitHub
      </h1>
    </CardContent>
  );
}
