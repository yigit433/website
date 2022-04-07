import { SiYoutube } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { MdRestore } from "react-icons/md";
import { BiLinkExternal } from "react-icons/bi";

export default ({ service, content, url }) => {
  const icons = {
    youtube: <SiYoutube className="w-8 h-8" />,
    spotify: <FaSpotify className="w-8 h-8" />,
    idle: <MdRestore className="w-8 h-8" />,
  };
  const theme = {
    youtube: "bg-red-500 border-red-500 text-red-500 dark:text-red-400",
    spotify: "bg-green-500 border-green-500 text-green-500 dark:text-green-400",
    idle: "bg-warm-gray-500 border-warm-gray-500 text-warm-gray-500 dark:text-warm-gray-400",
  };

  return (
    <div
      className={`transition-all duration-150 ease-linear border-l-3 items-center text-center flex justify-between space-x-2 p-4 rounded-md bg-opacity-25 ${theme[service]}`}
    >
      {icons[service]}{" "}
      {url ? (
        <a
          className="flex justify-center space-x-2 items-center hover:(border-b-1 border-blue-500)"
          href={url}
        >
          <p>{content}</p> <BiLinkExternal className="w-5 h-5" />
        </a>
      ) : (
        <span className="flex justify-center space-x-2 items-center">
          <p>{content}</p>
        </span>
      )}
    </div>
  );
};
