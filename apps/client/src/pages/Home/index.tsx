import { Box } from "@boxlooting/utils";

import { Button, Wrapper } from "components";
import { useBoxes } from "hooks/useAPI";
import { styled } from "styled-components";

export const Home = () => {
  const { boxes = [] } = useBoxes();

  return (
    <Wrapper>
      <Title>Choose a lootbox</Title>
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

const Title = styled.h1`
  font-size: 3em;
  color: white;
  text-align: center;
  text-shadow: 0 0 10px black;
  margin-bottom: 2em;
`;

const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
