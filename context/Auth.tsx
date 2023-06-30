import React, { useEffect, useState } from "react";
import { AuthApi } from "../api";
import { toast } from "react-toastify";
import { User } from "../types/user";
import axios from "../api/apiTransport";

const AuthContext = React.createContext({
  user: null,
  setUser: (user: User) => {},
  showLoginForm: false,
  setShowLoginForm: (show: boolean) => {},
  login: (email: string, password: string) => {},
  logout: () => {},
});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(false);

  useEffect(() => {
    // Adding an interceptor (middleware) for all API requests
    // https://axios-http.com/docs/interceptors
    axios.interceptors.request.use(
      function (config) {
        const token = localStorage.getItem("auth-token");

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );
  }, []);

  const login = (email: string, password: string) => {
    AuthApi.loginApi(email, password)
      .then((response) => {
        let { token } = response.data.data;
        localStorage.setItem("auth-token", token);
        setShowLoginForm(false);
        toast("Logged in successfully", { type: "success" });
      })
      .catch((err) => {
        toast(err?.message, {
          type: "error",
        });
      });
  };

  const logout = () => {
    localStorage.removeItem("auth-token");
    setUser(null);
  };

  useEffect(() => {
    let authToken = localStorage.getItem("auth-token");

    if (authToken) {
      AuthApi.getLoggedInUser()
        .then((user) => {
          setUser(user);
        })
        .catch((err) => {
          // auth-token did not work, we should remove it to prevent any unnecessary API calls to server
          localStorage.removeItem("auth-token");
          toast(err?.message, {
            type: "error",
          });
        });
    }
  }, [showLoginForm]);

  return (
    <AuthContext.Provider
      value={{
        showLoginForm,
        setShowLoginForm,
        user,
        setUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
