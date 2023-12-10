import { Box } from "@boxlooting/utils";

import { Button, Title } from "components";
import { useBoxes } from "hooks/useAPI";

import s from "./LootView.module.scss";

export const LootView = () => {
  const { boxes = [] } = useBoxes();

  return (
    <>
      <Title title="Choose a lootbox" />
      <div className={s.lootview__boxes}>
        {boxes.map((box: Box) => (
          <Button onClick={() => window.open(`/box/${box.id}`, "_self")}>
            {box.name.toUpperCase()}
          </Button>
        ))}
      </div>
    </>
  );
};
