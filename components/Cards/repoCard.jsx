import { GoRepo } from "react-icons/go";
import { motion } from "framer-motion";

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
      </motion.div>
    </a>
  );
};
