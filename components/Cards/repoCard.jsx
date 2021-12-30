import { GoRepo } from "react-icons/go";

export default ({
  name,
  description,
  language,
  stargazers_count,
  forks_count,
  html_url,
}) => {
  return (
    <a href={html_url} className="flex flex-wrap">
      <div className="bg-blue-gray-200 dark:bg-blue-gray-800 w-full cursor-pointer shaodow-xl p-4 rounded-lg space-y-2">
        <div className="w-full flex items-center justify-start">
          <GoRepo className="w-5 h-5" />
          <h1 className="font-semibold">{name}</h1>
        </div>
        <p className="w-full text-base mb-12">{description}</p>
      </div>
    </a>
  );
};
