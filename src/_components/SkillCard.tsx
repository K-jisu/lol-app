import Image from "next/image";
import React from "react";

type SkillProp =
  | { passive: Passive; spell?: never }
  | { passive?: never; spell: Spell };

const SkillCard = ({ passive, spell }: SkillProp) => {
  return (
    <article className="border-white border-solid border rounded p-4 hover:shadow-lg">
      <h3 className="mt-2 text-lg font-semibold">
        {passive ? passive.name : spell.name}
      </h3>
      <Image
        width={passive ? passive.image.w : spell.image.w}
        height={passive ? passive.image.h : spell.image.h}
        src={`${process.env.NEXT_PUBLIC_RIOT_IMG_URL}${
          passive
            ? "passive/" + passive.image.full
            : "spell/" + spell.image.full
        }`}
        alt={passive ? passive.name : spell.name}
      />
      <p className="mt-2 text-sm">
        {passive ? passive.description : spell.description}
      </p>
    </article>
  );
};

export default SkillCard;
