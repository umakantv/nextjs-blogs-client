import { AppProps } from "next/app";
import "../styles/index.css";
import { AuthContextProvider } from "../contexts/Auth";
import Login from "../components/Auth/Login";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../utils/createEmotionCache";
import { ThemeContextProvider } from "../contexts/theme";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Login />
          <Component {...pageProps} />
        </AuthContextProvider>
      </ThemeContextProvider>
    </CacheProvider>
  );
}

export default MyApp;
