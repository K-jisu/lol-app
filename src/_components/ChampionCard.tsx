import Image from "next/image";
import Link from "next/link";
import React from "react";

type ChampionProps = {
  champion: Champion;
};

const ChampionCard = ({
  champion: { id, name, title, image },
}: ChampionProps) => {
  return (
    <Link href={`/champions/${id}`}>
      <div className="border-white border-solid border rounded p-4 hover:shadow-lg">
        <figure>
          <Image
            width={image.w * 2}
            height={image.h * 2}
            src={`${process.env.NEXT_PUBLIC_RIOT_IMG_URL}champion/${image.full}`}
            alt={name}
          />
        </figure>
        <h2 className="mt-2 text-xl font-semibold">{name}</h2>
        <p className="text-gray-500">{title}</p>
      </div>
    </Link>
  );
};

export default ChampionCard;
