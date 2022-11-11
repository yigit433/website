import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Swr from "swr";

import AnnouncementEmbed from "../components/announcementEmbed";
import RepoCard from "../components/Cards/repoCard";
import MainLayout from "../layouts/mainLayout";

export default function Repositories() {
  const searchInput = useRef(null);

  const { data, error } = Swr(
    "https://api.github.com/users/yigit433/repos",
    (url) => fetch(url).then((res) => res.json())
  );
  const isLoading = !data && !error;
  const isLoaded = data && !error;
  const isDisabled = isLoading || !isLoaded || error;

  return (
    <MainLayout>
      <div className="space-y-0.5">
        <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-alignment">
          Repositories
        </h1>
        <p className="text-md sm:text-lg md:text-xl text-alignment">
          On this page you can search and reach the projects I have developed
          open source in Github.
        </p>
      </div>
      <div className="flex space-x-1 justify-center">
        <input
          disabled={isDisabled}
          className={`${
            isDisabled ? "cursor-not-allowed" : ""
          } px-3 py-2 w-full rounded-md bg-light-900 shadow-xl border-3 border-dark-100 bg-dark-700 text-neutral-100 focus:(outline-none border-dark-200)`}
          ref={searchInput}
        />
        <button
          disabled={isDisabled}
          className={`${
            isDisabled ? "cursor-not-allowed" : ""
          } shadow-xl rounded-md px-3 py-2 bg-green-500 text-green-100`}
        >
          Search
        </button>
      </div>
      <>
        {error && (
          <AnnouncementEmbed
            type="error"
            message="There was a problem while fetching Github repositories!"
          />
        )}
        {(isLoading || isLoaded) && (
          <motion.div
            className="grid gap-4 md:grid-cols-3"
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
                  (repo) => !repo.fork && !["yigit433"].includes(repo.name)
                )
                .map((repo, i) => <RepoCard key={i} {...repo} />)}
            {isLoading &&
              [0, 1, 2, 3, 4, 5].map((i) => (
                <RepoCard key={i} skeleton={true} />
              ))}
          </motion.div>
        )}
      </>
    </MainLayout>
  );
}
