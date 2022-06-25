import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/header";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps}></Component>;
}

export default MyApp;
