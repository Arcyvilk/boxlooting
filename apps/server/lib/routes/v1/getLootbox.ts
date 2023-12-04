import { Request } from "@hapi/hapi";
import { Box, BoxReward, Reward } from "@boxlooting/utils";

import { getDataFromDb } from "../../utils/getData";

// const BASE_URL =
//   "lifeup://api/reward?type=item&content=Learn API Calls&number=1&item_name=treasure";

type FoundReward = Reward & BoxReward;
type FoundRewardWithQuantity = Omit<
  FoundReward,
  "quantityMin" | "quantityMax"
> & { quantity: number };

export const getLootbox = async (request: Request) => {
  const boxes = await getDataFromDb<Box>("boxes");
  const rewards = await getDataFromDb<Reward>("rewards");

  const lootboxId = request.params.lootbox;
  const box = boxes.find((box) => box.id === lootboxId);
  if (!box) return []; // This should never happen

  const boxRewards = box.rewards
    .map((boxReward) => {
      const reward = rewards.find((r) => r.id === boxReward.id);
      if (!reward) return null; // This should never happen
      return {
        ...boxReward,
        name: reward.name,
        type: reward.type,
      };
    })
    .filter(Boolean) as FoundReward[];

  const foundRewards = getFoundRewards(boxRewards);
  const finalRewards = getRewardsWithQuantity(foundRewards);

  const links = finalRewards.map(
    (finalReward) =>
      `lifeup://api/reward?type=${finalReward?.type}&content=You looted a thing!&number=${finalReward?.quantity}&item_name=${finalReward?.name}`,
  );

  const message =
    finalRewards.length > 0
      ? `You looted something!`
      : "Chest is empty. Unlucky :c";

  return { message, links };
};

/**
 *  Determine which rewards were dropped from the lootbox.
 */
const getFoundRewards = (boxRewards: FoundReward[]) => {
  const rewards = boxRewards.filter((reward) => {
    const isFound = Math.floor(Math.random() * 101);
    return reward.chance >= isFound;
  });

  return rewards;
};

/**
 * Determine the quantity of items dropped from the lootbox.
 */
const getRewardsWithQuantity = (
  boxRewards: FoundReward[],
): FoundRewardWithQuantity[] => {
  const rewards = boxRewards.map((reward) => {
    const quantity = Math.floor(
      Math.random() * (reward.quantityMax - reward.quantityMin) +
        reward.quantityMin,
    );
    return {
      ...reward,
      quantity,
    };
  });

  return rewards;
};
