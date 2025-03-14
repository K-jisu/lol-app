// 챔피언의 정보 타입
type ChampionInfo = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};

// 이미지 관련 타입
type ImageInfo = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

// 스킨 타입
type Skin = {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
};

// 챔피언의 스킬 타입
type Spell = {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip: {
    label: string[];
    effect: string[];
  };
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  datavalues: object;
  effect: (number[] | null)[];
  effectBurn: (string | null)[];
  vars: unknown[];
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: ImageInfo;
  resource: string;
};

// 패시브 스킬 타입
type Passive = {
  name: string;
  description: string;
  image: ImageInfo;
};

// 챔피언의 주요 데이터 타입
type ChampionDetail = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: ImageInfo;
  skins: Skin[];
  lore: string;
  blurb: string;
  allytips: string[];
  enemytips: string[];
  tags: string[];
  partype: string;
  info: ChampionInfo;
  stats: {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
  };
  spells: Spell[];
  passive: Passive;
};

// 전체 챔피언 데이터 타입
type ChampionData = {
  [key: string]: ChampionDetail;
};

// 데이터를 포함한 상위 타입
type GameData = {
  type: string;
  format: string;
  version: string;
  data: ChampionData;
};
