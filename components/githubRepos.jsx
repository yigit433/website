import { motion } from "framer-motion";
import swr from "swr";

import AnnouncementEmbed from "./announcementEmbed";
import RepoCard from "./Cards/repoCard";

export default function GithubRepos() {
  const { data, error } = swr(
    "https://api.github.com/users/SherlockYigit/repos",
    (url) => fetch(url).then((res) => res.json())
  );
  const isLoading = !data && !error;
  const isLoaded = data && !error;

  return (
    <>
      {error && (
        <AnnouncementEmbed
          type="error"
          message="There was a problem while fetching Github repositories!"
        />
      )}
      {(isLoading || isLoaded) && (
        <motion.div
          className="grid gap-4 md:grid-cols-2"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: {
              opacity: 1,
              scale: 0,
            },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {isLoaded &&
            data
              .filter(
                (repo) => !repo.fork && !["SherlockYigit"].includes(repo.name)
              )
              .map((repo, i) => <RepoCard key={i} {...repo} />)}
          {isLoading &&
            [0, 1, 2, 3].map((i) => <RepoCard key={i} skeleton={true} />)}
        </motion.div>
      )}
    </>
  );
}
