import { useTheme } from "next-themes";
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";

export default () => {
  return (
    typeof window !== "undefined" &&
    (() => {
      const { theme, setTheme } = useTheme();

      return (
        <button
          className="flex items-center justify-center p-2 text-[#696969] bg-blue-gray-200 dark:(bg-blue-gray-800 text-blue-gray-300) rounded-md focus:outline-none py-2 px-2"
          onClick={(e) => {
            e.preventDefault();

            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {theme !== "dark" ? (
            <IoMoonSharp className="w-5 h-5 text-violet-900" />
          ) : (
            <IoSunnySharp className="w-5 h-5 text-yellow-300" />
          )}
        </button>
      );
    })()
  );
};
