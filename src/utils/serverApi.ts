"use server";

import RIOT_CONSTANT from "@/constants/RIOT_CONSTANT";
import { ChampionDetail, GameData } from "@/types/ChampionDetail";
import { Champion } from "@/types/Champions";
import { Item, ItemData } from "@/types/Items";

export const fetchVersion = async (): Promise<string> => {
  const res = await fetch(`${RIOT_CONSTANT.RIOT_URL}/api/versions.json`);
  const data = await res.json();
  return data[0];
};

// ISR
export const fetchChampion = async (): Promise<Champion[]> => {
  const version = await fetchVersion();
  const res = await fetch(
    `${RIOT_CONSTANT.RIOT_URL}/cdn/${version}/data/ko_KR/champion.json`,
    {
      next: {
        revalidate: 86400,
      },
    }
  );
  const { data } = await res.json();
  return Object.values(data);
};

//SSR
export const fetchChampionDetail = async (
  id: string
): Promise<ChampionDetail> => {
  const version = await fetchVersion();
  const res = await fetch(
    `${RIOT_CONSTANT.RIOT_URL}/cdn/${version}/data/ko_KR/champion/${id}.json`
  );
  const data: GameData = await res.json();
  return Object.values(data.data)[0];
};

//SSG
export const fetchItems = async (): Promise<[string, Item][]> => {
  const version = await fetchVersion();
  const res = await fetch(
    `${RIOT_CONSTANT.RIOT_URL}/cdn/${version}/data/ko_KR/item.json`,
    {
      cache: "force-cache",
    }
  );
  const { data }: { data: ItemData } = await res.json();
  return Object.entries(data);
};
