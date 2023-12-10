import { styled } from "styled-components";
import { Box } from "@boxlooting/utils";

import { Button, Title } from "components";
import { useBoxes } from "hooks/useAPI";

export const Loot = () => {
  const { boxes = [] } = useBoxes();

  return (
    <>
      <Title title="Choose a lootbox" />
      <Boxes>
        {boxes.map((box: Box) => (
          <Button onClick={() => window.open(`/box/${box.id}`, "_self")}>
            {box.name.toUpperCase()}
          </Button>
        ))}
      </Boxes>
    </>
  );
};

const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
