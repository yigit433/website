import ThemeButton from "./themeButton";
import Config from "../config";

export default () => {
  return (
    <>
      <nav className="w-full mt-4 flex justify-between lg:(px-16 py-0) px-6 py-2">
        <div className="flex space-x-2">
          <h1 className="text-2xl font-semibold">
            {Config.siteName.first + " "}
            <span className="rounded-md p-0.5 text-white bg-gradient-to-r from-emerald-400 to-teal-600">
              {Config.siteName.second}
            </span>
          </h1>
          <ul className="<lg:hidden flex items-center space-x-1 text-base">
            {Config.routes
              .filter((route) => !route?.invisible)
              .map((route, index) => {
                return (
                  <a
                    href={route.to}
                    alt={route.description}
                    className="hover:bg-blue-gray-300 dark:(hover:bg-blue-gray-800) focus:outline-none py-2 px-3 rounded-md"
                  >
                    {route.name}
                  </a>
                );
              })}
          </ul>
        </div>
        <ThemeButton />
      </nav>
    </>
  );
};
