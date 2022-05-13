import { useState } from "react";
import { useRouter } from "next/router";
import { GoThreeBars } from "react-icons/go";

import ThemeButton from "./themeButton";
import Config from "../config";

export default () => {
  const [mobileNav, toggleMobileNav] = useState(false);
  const Router = useRouter();

  return (
    <>
      <nav className="w-full mt-4 flex justify-between lg:(px-16 py-0) px-6 py-2">
        <div className="flex space-x-2">
          <h1 className="text-2xl font-semibold">
            {Config.siteName.first + " "}
            <button
              className="rounded-md p-0.5 text-white bg-gradient-to-r from-emerald-400 to-teal-600"
              onClick={(e) => {
                e.preventDefault();

                Router.push("/");
              }}
            >
              {Config.siteName.second}
            </button>
          </h1>
          <ul className="<lg:hidden flex items-center space-x-1 text-base">
            {Config.routes
              .filter((route) => !route?.invisible)
              .map((route, index) => {
                return route.to.match("(http|https)://^") ? (
                  <a
                    href={route.to}
                    alt={route.description}
                    className="text-white/75 hover:text-white focus:outline-none py-2 px-3 rounded-md"
                  >
                    {route.name}
                  </a>
                ) : (
                  <button
                    className="text-white/75 hover:text-white focus:outline-none py-2 px-3 rounded-md"
                    alt={route.description}
                    onClick={(e) => {
                      e.preventDefault();

                      Router.push(route.to);
                    }}
                  >
                    {route.name}
                  </button>
                );
              })}
          </ul>
        </div>
        <div className="flex space-x-2">
          <div className="group relative">
            <button
              className="lg:hidden flex items-center justify-center p-2 focus:outline-none rounded-md text-[#696969] bg-blue-gray-200 dark:(bg-blue-gray-800 text-blue-gray-300)"
              onClick={(e) => {
                e.preventDefault();

                toggleMobileNav(!mobileNav);
              }}
            >
              <GoThreeBars className="w-5 h-5" />
            </button>
            <div
              className={`mt-1 z-99 lg:hidden ${
                mobileNav ? "<lg:block" : "hidden"
              } rounded-md absolute left-0 top-full text-[#696969] bg-blue-gray-200 dark:(bg-blue-gray-800 text-blue-gray-300)`}
            >
              <ul className="py-1">
                {Config.routes
                  .filter((route) => !route?.invisible)
                  .map((route, index) => {
                    return route.to.match("(http|https)://^") ? (
                      <a
                        href={route.to}
                        className="block px-4 py-2 hover:bg-blue-gray-400 dark:(hover:bg-blue-gray-900)"
                      >
                        {route.name}
                      </a>
                    ) : (
                      <button
                        className="block px-4 py-2 hover:bg-blue-gray-400 dark:(hover:bg-blue-gray-900)"
                        alt={route.description}
                        onClick={(e) => {
                          e.preventDefault();

                          Router.push(route.to);
                        }}
                      >
                        {route.name}
                      </button>
                    );
                  })}
              </ul>
            </div>
          </div>
          <ThemeButton />
        </div>
      </nav>
    </>
  );
};
