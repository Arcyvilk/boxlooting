import { boxes } from "data/boxes";

export const getBoxes = () => {
  const boxIds = boxes.map((box) => ({
    id: box.id,
    name: box.name,
  }));
  return boxIds;
};
