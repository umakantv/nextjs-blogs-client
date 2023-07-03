import { useEffect, useState } from "react";

export type ThemeType = "light" | "dark";

export function getSystemTheme() {
  if (typeof window === "undefined") {
    return "light";
  } else {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    return mediaQuery.matches ? "dark" : "light";
  }
}

export default function useSystemTheme(): ThemeType {
  const [theme, setSystemTheme] = useState<ThemeType>("light");

  // For preventing react-hydration-error: https://nextjs.org/docs/messages/react-hydration-error
  useEffect(() => {
    setSystemTheme(getSystemTheme());
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function handleThemeChange() {
      if (mediaQuery.matches) {
        setSystemTheme("dark");
      } else {
        setSystemTheme("light");
      }
    }

    mediaQuery.addEventListener("change", handleThemeChange);
    return () => mediaQuery.removeEventListener("change", handleThemeChange);
  }, []);

  return theme;
}
