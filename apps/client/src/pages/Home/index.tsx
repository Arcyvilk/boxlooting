import { styled } from "styled-components";
import { Box } from "@boxlooting/utils";

import { Button, Title } from "components";
import { Wrapper } from "containers";
import { useBoxes } from "hooks/useAPI";

export const Home = () => {
  const { boxes = [] } = useBoxes();

  return (
    <Wrapper>
      <Title title="Choose a lootbox" />
      <Boxes>
        {boxes.map((box: Box) => (
          <Button onClick={() => window.open(`/${box.id}`, "_self")}>
            {box.name.toUpperCase()}
          </Button>
        ))}
      </Boxes>
    </Wrapper>
  );
};

const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
