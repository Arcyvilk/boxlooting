export type Reward = {
  id: string;
  type: 'coin' | 'item';
  name: string;
};

export const rewards: Reward[] = [
  {
    id: 'coin',
    type: 'coin',
    name: 'coin',
  },
  {
    id: 'hexite',
    type: 'item',
    name: 'hexite',
  },
  {
    id: 'preciousgem',
    type: 'item',
    name: 'precious gem',
  },
];
