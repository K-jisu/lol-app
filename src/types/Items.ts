// 아이템 이미지 타입

import { Image } from "./Champions";

// 아이템 골드 정보 타입
type ItemGold = {
  base: number;
  purchasable: boolean;
  total: number;
  sell: number;
};

// 아이템 맵 적용 여부 타입
type ItemMaps = {
  [key: number]: boolean;
};

// 아이템 속성 타입
type ItemStats = {
  FlatMovementSpeedMod?: number;
};

// 아이템 타입
export type Item = {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: Image;
  gold: ItemGold;
  tags: string[];
  maps: ItemMaps;
  stats: ItemStats;
};

// 전체 아이템 데이터 타입
export type ItemData = {
  [key: string]: Item;
};
