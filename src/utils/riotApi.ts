import RIOT_CONSTANT from "@/constants/RIOT_CONSTANT";
import { RotationChampionData } from "@/types/Championrotation";
//CSR
const fetchRotationChampion = async (): Promise<
  [number[], number[], number]
> => {
  const res = await fetch(`${RIOT_CONSTANT.RIOT_ROTATION_CHAMPION_URL}`, {
    headers: {
      "X-Riot-Token": `${process.env.NEXT_PUBLIC_RIOT_API_KEY}` || "",
    },
  });
  const data: RotationChampionData = await res.json();
  return [
    data.freeChampionIds,
    data.freeChampionIdsForNewPlayers,
    data.maxNewPlayerLevel,
  ];
};

export default fetchRotationChampion;
