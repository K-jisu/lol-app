const fetchChampion = async (): Promise<Champion[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_RIOT_URL}champion.json`, {
    next: {
      revalidate: 86400,
    },
  });
  const { data } = await res.json();
  return Object.values(data);
};

const fetchChampionDetail = async (id: string): Promise<ChampionDetail> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_URL}champion/${id}.json`
  );
  const data: GameData = await res.json();
  return Object.values(data.data)[0];
};

const fetchItems = async (): Promise<[string, Item][]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_RIOT_URL}item.json`, {
    cache: "force-cache",
  });
  const { data }: { data: ItemData } = await res.json();
  return Object.entries(data);
};

const fetchData = {
  fetchChampion,
  fetchChampionDetail,
  fetchItems,
};

export default fetchData;
