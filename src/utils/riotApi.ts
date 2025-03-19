// import RIOT_CONSTANT from "@/constants/RIOT_CONSTANT";
import RIOT_CONSTANT from "@/constants/RIOT_CONSTANT";
import { RotationChampionData } from "@/types/Championrotation";
// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

//CSR
const fetchRotationChampion = async (): Promise<
  [number[], number[], number]
> => {
  const res = await fetch(`${RIOT_CONSTANT.BASE_URL}/api/rotation`);
  // const res = await fetch(`/api/rotation`);
  const data: RotationChampionData = await res.json();
  return [
    data.freeChampionIds,
    data.freeChampionIdsForNewPlayers,
    data.maxNewPlayerLevel,
  ];
};

export default fetchRotationChampion;
