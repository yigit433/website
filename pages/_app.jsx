import { ThemeProvider } from "next-themes";

import BackgroundEffect from "../components/backgroundEffect";
import "windi.css";

export default ({ Component, pageProps }) => {
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
