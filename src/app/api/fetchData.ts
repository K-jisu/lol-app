// ISR
const fetchChampion = async (): Promise<Champion[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_RIOT_URL}champion.json`, {
    next: {
      revalidate: 86400,
    },
  });
  const { data } = await res.json();
  return Object.values(data);
};

//SSR
const fetchChampionDetail = async (id: string): Promise<ChampionDetail> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_URL}champion/${id}.json`
  );
  const data: GameData = await res.json();
  return Object.values(data.data)[0];
};

//SSG
const fetchItems = async (): Promise<[string, Item][]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_RIOT_URL}item.json`, {
    cache: "force-cache",
  });
  const { data }: { data: ItemData } = await res.json();
  return Object.entries(data);
};

//CSR
const fetchRotationChampion = async (): Promise<
  [number[], number[], number]
> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_ROTATION_CHAMPION_URL}api_key=${process.env.NEXT_PUBLIC_RIOT_API_KEY}`
  );
  const data: RotationChampionData = await res.json();
  return [
    data.freeChampionIds,
    data.freeChampionIdsForNewPlayers,
    data.maxNewPlayerLevel,
  ];
};

const fetchData = {
  fetchChampion,
  fetchChampionDetail,
  fetchItems,
  fetchRotationChampion,
};

export default fetchData;
