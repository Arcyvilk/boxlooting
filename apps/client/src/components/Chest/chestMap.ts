import chest_gold from "assets/lotties/chest_gold.json";
import chest_green from "assets/lotties/chest_green.json";

export enum ChestType {
  GOLD = "gold",
  GREEN = "green",
}
export const chestMap = {
  [ChestType.GOLD]: chest_gold,
  [ChestType.GREEN]: chest_green,
};
