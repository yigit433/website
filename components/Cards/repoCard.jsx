import { GoRepo, GoRepoForked } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";

import LangColors from "../../public/colors";

export default ({
  skeleton,
  name,
  description,
  language,
  stargazers_count,
  forks_count,
  html_url,
}) => {
  if (skeleton) {
    return (
      <div className="flex flex-wrap">
        <motion.div
          className="bg-blue-gray-200 dark:bg-blue-gray-800 w-full cursor-pointer shaodow-xl p-4 rounded-lg space-y-2"
          variants={{
            hidden: {
              y: 20,
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
            },
          }}
        >
          <div className="rounded w-12 px-8 py-2 bg-warm-gray-400 animate-pulse" />
          <div className="rounded w-32 text-base mb-12 px-16 py-2 bg-warm-gray-400 animate-pulse" />
          <div className="space-x-2 w-full flex items-center justify-around">
            <div className="rounded w-12 px-8 py-2 bg-warm-gray-400 animate-pulse" />
            <div className="rounded w-12 px-8 py-2 bg-warm-gray-400 animate-pulse" />
            <div className="rounded w-12 px-8 py-2 bg-warm-gray-400 animate-pulse" />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <a href={html_url} className="flex flex-wrap">
      <motion.div
        className="bg-blue-gray-200 dark:bg-blue-gray-800 w-full cursor-pointer shaodow-xl p-4 rounded-lg space-y-2"
        variants={{
          hidden: {
            y: 20,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
          },
        }}
      >
        <div className="w-full flex items-center justify-start">
          <GoRepo className="w-5 h-5" />
          <h1 className="font-semibold">{name}</h1>
        </div>
        <p className="w-full text-base mb-12">{description}</p>
        <div className="font-medium space-x-2 w-full flex text-center items-center justify-around">
          <span className="flex spaxe-x-0.5 text-center items-center">
            <AiFillStar className="w-6 h-6" />
            <p>{stargazers_count}</p>
          </span>
          <span className="flex text-center items-center">
            <span
              className="mr-0.5 h-4 w-4 rounded-full"
              style={{
                "background-color": LangColors[language].color,
              }}
            />
            <p>{language}</p>
          </span>
          <span className="flex spaxe-x-0.5 text-center items-center">
            <GoRepoForked className="w-6 h-6" />
            <p>{forks_count}</p>
          </span>
        </div>
      </motion.div>
    </a>
  );
};
