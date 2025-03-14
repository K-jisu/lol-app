"use server";
import RIOT_CONSTANT from "@/constants/RIOT_CONSTANT";
import { ChampionDetail, GameData } from "@/types/ChampionDetail";
import { Champion } from "@/types/Champions";
import { Item, ItemData } from "@/types/Items";

// ISR
const fetchChampion = async (): Promise<Champion[]> => {
  const res = await fetch(`${RIOT_CONSTANT.RIOT_URL}champion.json`, {
    next: {
      revalidate: 86400,
    },
  });
  const { data } = await res.json();
  return Object.values(data);
};

//SSR
const fetchChampionDetail = async (id: string): Promise<ChampionDetail> => {
  const res = await fetch(`${RIOT_CONSTANT.RIOT_URL}champion/${id}.json`);
  const data: GameData = await res.json();
  return Object.values(data.data)[0];
};

//SSG
const fetchItems = async (): Promise<[string, Item][]> => {
  const res = await fetch(`${RIOT_CONSTANT.RIOT_URL}item.json`, {
    cache: "force-cache",
  });
  const { data }: { data: ItemData } = await res.json();
  return Object.entries(data);
};

const serverApi = {
  fetchChampion,
  fetchChampionDetail,
  fetchItems,
};

export default serverApi;
