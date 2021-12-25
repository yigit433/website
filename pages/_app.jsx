import { ThemeProvider } from "next-themes";
import "windi.css";

export default ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      themes={["light", "dark"]}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
