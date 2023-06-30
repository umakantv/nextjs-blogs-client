import { AppProps } from "next/app";
import "../styles/index.css";
import { AuthContextProvider } from "../context/Auth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
