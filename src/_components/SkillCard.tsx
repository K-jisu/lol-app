import Image from "next/image";
import React from "react";
import parser from "html-react-parser";
import RIOT_CONSTANT from "@/constants/RIOT_CONSTANT";
import { Passive, Spell } from "@/types/ChampionDetail";

type SkillProp =
  | { passive: Passive; spell?: never }
  | { passive?: never; spell: Spell };

const SkillCard = ({ passive, spell }: SkillProp) => {
  return (
    <article className="bg-gray-800 border border-yellow-500 rounded-lg p-4 shadow-md max-w-2xl">
      <h3 className="text-yellow-400 text-xl font-bold mb-2 text-center">
        {passive ? passive.name : spell.name}
      </h3>
      <figure className="flex justify-center">
        <Image
          width={passive ? passive.image.w : spell.image.w}
          height={passive ? passive.image.h : spell.image.h}
          src={`${RIOT_CONSTANT.RIOT_IMG_URL}${
            passive
              ? "passive/" + passive.image.full
              : "spell/" + spell.image.full
          }`}
          alt={passive ? passive.name : spell.name}
          className="rounded-lg border-2 border-yellow-500"
        />
      </figure>
      <p className="mt-3 text-gray-300 text-sm leading-relaxed">
        {passive ? parser(passive.description) : parser(spell.description)}
      </p>
    </article>
  );
};

export default SkillCard;
