import { boxes } from 'data/boxes';
import { rewards } from 'data/rewards';

const BASE_URL =
  'lifeup://api/reward?type=item&content=Learn API Calls&number=1&item_name=treasure';

export const getLinks = (boxId: string): string[] => {
  const box = boxes.find(box => box.id === boxId);
  if (!box) return []; // This should never happen

  const boxRewards = box.rewards
    .map(boxReward => {
      const reward = rewards.find(r => r.id === boxReward.id);
      if (!reward) return null; // This should never happen
      return {
        ...boxReward,
        name: reward.name,
        type: reward.type,
      };
    })
    .filter(Boolean);

  const foundRewards = boxRewards.filter(boxReward => {
    if (!boxReward) return false; // This should never happen

    const isFound = Math.floor(Math.random() * 101);
    return boxReward.chance >= isFound;
  });

  const links = foundRewards.map(
    foundReward =>
      `lifeup://api/reward?type=${foundReward?.type}&content=You looted a thing!&number=${foundReward?.quantity}&item_name=${foundReward?.name}`,
  );

  return links;
};
