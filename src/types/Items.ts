// 아이템 이미지 타입
interface ItemImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

// 아이템 골드 정보 타입
interface ItemGold {
  base: number;
  purchasable: boolean;
  total: number;
  sell: number;
}

// 아이템 맵 적용 여부 타입
interface ItemMaps {
  [key: number]: boolean;
}

// 아이템 속성 타입
interface ItemStats {
  FlatMovementSpeedMod?: number;
}

// 아이템 타입
interface Item {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: ItemImage;
  gold: ItemGold;
  tags: string[];
  maps: ItemMaps;
  stats: ItemStats;
}

// 전체 아이템 데이터 타입
interface ItemData {
  [key: string]: Item;
}
