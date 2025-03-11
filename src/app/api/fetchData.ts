const fetchChampion = async (): Promise<Champion[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_CHAMPION_URL}champion.json`,
    {
      next: {
        revalidate: 86400,
      },
    }
  );
  const { data } = await res.json();
  return Object.values(data);
};

const fetchChampionDetail = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_CHAMPION_URL}champion/${id}.json`
  );
  const {data} = await res.json();
  console.log(data);
  return data;
};

const fetchData = {
  fetchChampion,
  fetchChampionDetail,
};

export default fetchData;
