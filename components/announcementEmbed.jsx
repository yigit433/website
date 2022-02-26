import { IoCheckmarkDone, IoCloseCircleOutline } from "react-icons/io5";
import { MdInfoOutline } from "react-icons/md";
import { ImWarning } from "react-icons/im";

export default function AnnouncementEmbed({ type = "info", message }) {
  const embedTypes = {
    info: {
      classN: "bg-blue-500 border-blue-500 text-blue-500 dark:text-blue-400",
      icon: <MdInfoOutline className="w-8 h-8" />,
    },
    success: {
      classN:
        "bg-green-500 border-green-500 text-green-500 dark:text-green-400",
      icon: <IoCheckmarkDone className="w-8 h-8" />,
    },
    warning: {
      classN:
        "bg-orange-500 border-orange-500 text-orange-500 dark:text-orange-400",
      icon: <ImWarning className="w-8 h-8" />,
    },
    error: {
      classN: "bg-red-500 border-red-500 text-red-500 dark:text-red-400",
      icon: <IoCloseCircleOutline className="w-8 h-8" />,
    },
  };
  const embed = embedTypes[type];

  return (
    <div
      className={`border-l-3 items-center text-center flex justify-between space-x-2 p-4 rounded-md bg-opacity-25 ${embed.classN}`}
    >
      {embed.icon}{" "}
      <span className="flex justify-center space-x-2 items-center">
        <p>{message}</p>
      </span>
    </div>
  );
}
