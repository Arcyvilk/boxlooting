import { Box } from "@boxlooting/utils";
import { getDataFromDb } from "utils/getData";

export const getBoxes = async () => {
  const boxes = await getDataFromDb<Box>("boxes");
  const boxIds = boxes.map((box) => ({
    id: box.id,
    name: box.name,
  }));
  return boxIds;
};
