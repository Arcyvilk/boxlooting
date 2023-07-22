import { Box } from "@boxlooting/utils";

export const boxes: Box[] = [
  {
    id: "greenbox",
    name: "green box",
    rewards: [
      { id: "hexite", quantityMin: 1, quantityMax: 3, chance: 10 },
      { id: "coin", quantityMin: 5, quantityMax: 10, chance: 90 },
    ],
  },
  {
    id: "redbox",
    name: "red box",
    rewards: [
      { id: "hexite", quantityMin: 5, quantityMax: 5, chance: 20 },
      { id: "coin", quantityMin: 10, quantityMax: 10, chance: 80 },
    ],
  },
];
