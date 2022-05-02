import { useState } from "react";
import Image from "next/image";
import Swr from "swr";

import Config from "../config";

export default function ImageCard(discordUser) {
  const [imgStat, setStat] = useState(false);
  const [imgUrl, setImg] = useState(null);

  if (Config.heroProfilePic === "github") {
    const { data, error } = Swr(
      "https://api.github.com/users/SherlockYigit",
      (url) => fetch(url).then((res) => res.json())
    );

    if (data && !error && (!imgUrl || imgUrl != data?.avatar_url)) {
      setImg(data.avatar_url);
    }
  } else if (Config.heroProfilePic === "static") {
    setImg("/avatar.webp");
  }

  return (
    <div
      id="profileImg_div"
      className={`relative h-52 w-52 rounded-lg bg-gray-600 ${
        imgStat && imgUrl ? "" : "animate-pulse"
      }`}
    >
      {imgUrl && (
        <Image
          src={imgUrl}
          id="profileImg"
          alt="Profile IMG"
          onLoadingComplete={({ naturalWidth, naturalHeight }) => {
            if (naturalWidth > 1 && naturalHeight > 1) {
              setStat(true);
            } else {
              setStat(false);
            }
          }}
          layout="fill"
          objectFit="cover"
          className="rounded-lg h-52 w-52"
        />
      )}
    </div>
  );
}
