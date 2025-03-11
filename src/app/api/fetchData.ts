const fetchChampion = async (): Promise<Champion[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_RIOT_CHAMPION_URL}`, {
    cache: "force-cache",
  });
  const { data } = await res.json();
  return Object.values(data);
};

const fetchData = {
  fetchChampion,
};

export default fetchData;
