import Head from "next/head";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";
import Config from "../config";

export default ({ conf = {}, children }) => {
  const router = useRouter();
  const currentRoute = (() => {
    let findedRoute = Config.routes.find((r) => r?.to === router.pathname);

    if (!findedRoute) {
      findedRoute = Object.assign(
        {
          name: "404",
          description: "No such page was found!",
        },
        conf
      );
    }

    return findedRoute;
  })();

  return (
    <>
      <Head>
        <title>
          {currentRoute.name} - {Config.hostName}
        </title>

        <meta charset="UTF-8" />

        <meta property="og:title" content={currentRoute.name} />
        <meta property="og:description" content={currentRoute.description} />
        <meta property="og:type" content={Config.metaTags.siteType} />
        <meta name="theme-color" content={Config.metaTags.themeColor} />

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <motion.div
        className="container mx-auto space-y-2 px-8 lg:px-16"
        transition={{ duration: 0.5 }}
        initial={{
          opacity: 0,
          y: 0,
        }}
        animate={{
          opacity: 1,
          y: -10,
        }}
        exit={{
          opacity: 0,
          y: 0,
        }}
      >
        <Navbar />
        {children}
      </motion.div>
    </>
  );
};
