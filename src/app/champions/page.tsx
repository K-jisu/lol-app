import ChampionCard from "@/_components/ChampionCard";
import { fetchChampion, fetchVersion } from "@/utils/serverApi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Champions",
  description: "League of Legends Champions",
};

const ChampinPage = async () => {
  const champions = await fetchChampion();
  await fetchVersion();

  return (
    <div>
      <h1>챔피언 목록</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {champions.map((champion) => {
          return <ChampionCard key={champion.id} champion={champion} />;
        })}
      </div>
    </div>
  );
};

export default ChampinPage;
