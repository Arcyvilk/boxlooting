export type Box = {
  id: string;
  name: string;
  rewards: BoxReward[];
};

export type BoxReward = {
  id: string;
  quantity: number;
  chance: number;
};

export const boxes: Box[] = [
  {
    id: 'greenbox',
    name: 'green box',
    rewards: [
      { id: 'hexite', quantity: 1, chance: 10 },
      { id: 'coin', quantity: 10, chance: 90 },
    ],
  },
  {
    id: 'redbox',
    name: 'red box',
    rewards: [
      { id: 'hexite', quantity: 5, chance: 20 },
      { id: 'coin', quantity: 10, chance: 80 },
    ],
  },
];
