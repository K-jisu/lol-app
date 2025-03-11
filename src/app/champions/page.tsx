"use client";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../api/fetchData";
import ChampionCard from "@/_components/ChampionCard";

const ChampinPage = () => {
  const { data: champions, isLoading } = useQuery({
    queryKey: ["champions"],
    queryFn: fetchData.fetchChampion,
  });

  if (isLoading) return <div>...Loading</div>;

  return (
    <div>
      <h1>챔피언 목록</h1>
      <div className="grid grid-cols-4 gap-4">
        {champions?.map((champion) => {
          return <ChampionCard key={champion.id} champion={champion} />;
        })}
      </div>
    </div>
  );
};

export default ChampinPage;
