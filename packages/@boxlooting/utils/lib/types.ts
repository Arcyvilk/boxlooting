export type Box = {
  id: string;
  name: string;
  rewards: BoxReward[];
};

export type BoxReward = {
  id: string;
  quantityMin: number;
  quantityMax: number;
  chance: number;
};

export type Reward = {
  id: string;
  type: "coin" | "item";
  name: string;
};
