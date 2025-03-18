// import RIOT_CONSTANT from "@/constants/RIOT_CONSTANT";
import { RotationChampionData } from "@/types/Championrotation";

//CSR
const fetchRotationChampion = async (): Promise<
  [number[], number[], number]
> => {
  // const res = await fetch(`${RIOT_CONSTANT.BASE_URL}/api/rotationChampions`);
  const res = await fetch("http://localhost:3000/api/rotationChampions");
  const data: RotationChampionData = await res.json();
  return [
    data.freeChampionIds,
    data.freeChampionIdsForNewPlayers,
    data.maxNewPlayerLevel,
  ];
};

export default fetchRotationChampion;
