import { FaDiscord, FaGithub } from "react-icons/fa";

export default (account) => {
  const icon = {
    Discord: <FaDiscord className="w-5 h-5" />,
    Github: <FaGithub className="w-5 h-5" />,
  };

  return (
    <a
      href={account.url}
      className="focus:outline-none flex justify-center rounded-md p-2"
      style={{
        color: account.textColor,
        backgroundColor: account.color,
      }}
    >
      {icon[account.name]}
    </a>
  );
};
