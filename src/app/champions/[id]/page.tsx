import SkillCard from "@/_components/SkillCard";
import fetchData from "@/app/api/fetchData";
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

// SSR
const ChampionDetail = async ({ params }: Props) => {
  const id = params.id;

  const champion: ChampionDetailType = await fetchData.fetchChampionDetail(id);
  // const { data: champion, isLoading } = useQuery<ChampionDetailType>({
  //   queryKey: ["champions", id],
  //   queryFn: () => fetchData.fetchChampionDetail(id),
  // });

  // if (isLoading) return <div>...Loading</div>;

  // console.log(champion);

  return (
    <div className="text-gray-300 min-h-screen flex flex-col items-center py-10 px-5">
      <section className="flex flex-col items-center gap-4 text-center max-w-2xl">
        <h2 className="text-4xl font-bold text-yellow-400">{champion.name}</h2>
        <h3 className="text-2xl text-gray-400 italic">{champion.title}</h3>
        <Image
          width={200}
          height={200}
          src={`
            ${process.env.NEXT_PUBLIC_RIOT_IMG_URL}champion/${champion.image.full}
          `}
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
                return <SkillCard spell={spell} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChampionDetail;
