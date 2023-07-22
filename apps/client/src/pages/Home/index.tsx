import { Box } from "@boxlooting/utils";

import { Button, Wrapper } from "components";
import { useBoxes } from "hooks/useAPI";

export const Home = () => {
  const { boxes = [] } = useBoxes();

  return (
    <Wrapper>
      <h1>Choose a lootbox</h1>
      {boxes.map((box: Box) => (
        <Button onClick={() => window.open(`/${box.id}`, "_self")}>
          {box.name.toUpperCase()}
        </Button>
      ))}
    </Wrapper>
  );
};
