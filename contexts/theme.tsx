import React, { useEffect, useReducer } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red, grey, green } from "@mui/material/colors";
import { CssBaseline, useMediaQuery } from "@mui/material";

const reducer = (state: any, newState: any) => ({ ...state, ...newState });

export function ThemeContextProvider({ children }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  let themeType = prefersDarkMode ? "dark" : "light";

  const [themeSettings] = useReducer(reducer, {
    palette: {
      type: themeType,
      primary: {
        main: grey[900],
      },
      secondary: {
        main: green[900],
      },
      error: {
        main: red.A400,
      },
    },
  });

  const theme = createTheme({
    ...themeSettings,
    shape: {
      borderRadius: 0,
    },
    typography: {
      fontFamily:
        'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
  });

  theme.typography.h1 = {
    fontWeight: "700",
  };

  useEffect(() => {
    if (themeType === "dark") {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  }, [themeType]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
