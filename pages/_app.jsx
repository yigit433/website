import { ThemeProvider } from "next-themes";
import NProgress from "nprogress";
import Router from "next/router";

import BackgroundEffect from "../components/backgroundEffect";

import "nprogress/nprogress.css";
import "windi.css";

export default ({ Component, pageProps }) => {
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
  Router.events.on("routeChangeError", () => {
    NProgress.done();
  });

  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        themes={["light", "dark"]}
      >
        <BackgroundEffect />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};
