"use client";
import SkillCard from "@/_components/SkillCard";
import fetchData from "@/app/api/fetchData";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

type ChampionDetailType = Pick<
  ChampionDetail,
  "id" | "name" | "title" | "image" | "lore" | "spells" | "passive"
>;

const ChampionDetail = ({ params }: Props) => {
  const id = params.id;
  const { data: champion, isLoading } = useQuery<ChampionDetailType>({
    queryKey: ["champions", id],
    queryFn: () => fetchData.fetchChampionDetail(id),
  });

  if (isLoading) return <div>...Loading</div>;

  console.log(champion);

  return (
    <div className="flex flex-col items-center justify-center">
      <section className="flex flex-col gap-3">
        <h2 className=" text-4xl font-bold mb-4">{champion?.name}</h2>
        <h3 className="text-2xl text-gray-600 mb-4">{champion?.title}</h3>
        <Image
          width={200}
          height={200}
          src={`
            ${process.env.NEXT_PUBLIC_RIOT_IMG_URL}champion/${champion?.image.full}
          `}
          alt={champion!.id}
        />
        <p className="text-lg">{champion?.lore}</p>
      </section>
      <section>
        <h3>{champion?.name}의 스킬</h3>
        <SkillCard passive={champion!.passive} />
        {champion?.spells.map((spell) => {
          return (
            <>
              <SkillCard spell={spell} />
            </>
          );
        })}
      </section>
    </div>
  );
};

export default ChampionDetail;
