import React, { useEffect, useReducer, useState } from "react";
import { ThemeProvider, createTheme, Theme } from "@mui/material/styles";
import { green, amber, deepOrange } from "@mui/material/colors";
import { CssBaseline } from "@mui/material";
import useSystemTheme, {
  ThemeType,
  getSystemTheme,
} from "../hooks/useSystemTheme";

const reducer = (state: any, newState: any) => ({ ...state, ...newState });

interface CustomThemeContext {
  theme: Theme;
  themeType: ThemeType;
  switchTheme: (themeType: ThemeType) => void;
}

const CustomThemeContext = React.createContext<CustomThemeContext>({
  theme: createTheme(),
  themeType: getSystemTheme(),
  switchTheme: (themeType: ThemeType) => {},
});

export default CustomThemeContext;

export function ThemeContextProvider({ children }) {
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const systemTheme = useSystemTheme();

  const [themeType, setThemeType] = useState<ThemeType>(systemTheme);

  const [themeSettings, dispatch] = useReducer(reducer, {
    palette: {
      mode: themeType,
      primary: amber,
      secondary: green,
    },
  });

  useEffect(() => {
    dispatch({
      palette: {
        ...themeSettings.palette,
        mode: themeType,
        primary: themeType === "dark" ? amber : deepOrange,
      },
    });
  }, [themeType]);

  useEffect(() => {
    setThemeType(systemTheme);
  }, [systemTheme]);

  const theme = createTheme({
    ...themeSettings,
    shape: {
      borderRadius: 0,
    },
    typography: {
      h1: {
        fontWeight: "700",
      },
      fontFamily:
        'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
  });

  useEffect(() => {
    if (themeType === "dark") {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  }, [themeType]);

  return (
    <CustomThemeContext.Provider
      value={{
        themeType: themeType as any,
        theme,
        switchTheme: setThemeType,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
}
