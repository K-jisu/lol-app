import Image from "next/image";
import React from "react";

type ChampionProps = {
  champion: Champion;
};

const ChampionCard = ({ champion: { name, title, image } }: ChampionProps) => {
  console.log(image);
  return (
    <div className="border rounded p-4 hover:shadow-lg">
      <img
        src={process.env.NEXT_PUBLIC_RIOT_CHAMPION_IMG_URL + image.full}
        alt={name}
      />
      <h2 className="mt-2 text-xl font-semibold">{name}</h2>
      <p className="text-gray-500">{title}</p>
    </div>
  );
};

export default ChampionCard;
