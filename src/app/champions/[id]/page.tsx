import SkillCard from "@/components/SkillCard";
import RIOT_CONSTANT from "@/constants/RIOT_CONSTANT";
import { ChampionDetail } from "@/types/ChampionDetail";
import { fetchChampionDetail, fetchVersion } from "@/utils/serverApi";
import Image from "next/image";

export const generateMetadata = ({ params }: Props) => {
  return {
    title: `${params.id}`,
    description: `${params.id}`,
  };
};

type Props = {
  params: {
    id: string;
  };
};

type ChampionDetailType = Pick<
  ChampionDetail,
  "id" | "name" | "title" | "image" | "lore" | "spells" | "passive"
>;

// SSR
const ChampionDetailPage = async ({ params }: Props) => {
  const id = params.id;
  const version = await fetchVersion();

  const champion: ChampionDetailType = await fetchChampionDetail(id);

  return (
    <div className="text-gray-300 min-h-screen flex flex-col items-center py-10 px-5">
      <section className="flex flex-col items-center gap-4 text-center max-w-2xl">
        <h2 className="text-4xl font-bold text-yellow-400">{champion.name}</h2>
        <h3 className="text-2xl text-gray-400 italic">{champion.title}</h3>
        <Image
          width={200}
          height={200}
          src={`${RIOT_CONSTANT.RIOT_URL}/cdn/${version}/img/champion/${champion.image.full}`}
          alt={champion.id}
          className="rounded-lg border-4 border-yellow-500 shadow-lg"
        />
        <p className="text-lg leading-relaxed px-4">{champion.lore}</p>
      </section>
      <section className="mt-10 w-full max-w-2xl">
        <h3 className="text-3xl font-semibold text-yellow-400 mb-6 text-center">
          {champion.name}의 스킬
        </h3>
        <div className="flex flex-col">
          <div className="border-b border-gray-600 pb-4 md:border-b-1 md:pb-6">
            <h2 className="text-xl font-bold text-yellow-300 mb-3 text-center">
              패시브
            </h2>
            <SkillCard passive={champion.passive} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-yellow-500 mb-3 text-center pt-6">
              액티브
            </h2>
            <div className="flex flex-col gap-6">
              {champion.spells.map((spell) => {
                return <SkillCard key={spell.id} spell={spell} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChampionDetailPage;
