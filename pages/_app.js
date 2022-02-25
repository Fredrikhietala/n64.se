/* eslint-disable react/jsx-key */
import "../styles/globals.css";
import React from "react";
import { GlobalProvider } from "../state/GlobalState";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
