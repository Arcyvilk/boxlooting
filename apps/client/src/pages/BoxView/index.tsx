import React, { useState } from "react";
import { Box } from "@boxlooting/utils";

import { Flex, Wrapper } from "components";
import { useRewards } from "hooks/useAPI";
import { styled } from "styled-components";
import { Chest } from "components/Chest";
import { ChestType } from "components/Chest/chestMap";

type Props = {
  box: Box;
};

export const BoxView = (props: Props) => {
  const { box } = props;
  const [isRedeemed, setIsRedeemed] = useState(false);
  const { rewards } = useRewards(box.id);

  const onRedeemLoot = () => {
    setIsRedeemed(true);
  };

  const onAnimationFinish = () => {
    rewards.links.forEach((link: string) => window.open(link, "_blank"));
  };

  return (
    <Wrapper>
      <Flex $align $justify>
        <Title>{box.name.toUpperCase()}</Title>
      </Flex>
      <Flex $column $align $justify>
        <StyledButton onClick={onRedeemLoot} disabled={isRedeemed}>
          <Chest type={ChestType.GOLD} onAnimationFinish={onAnimationFinish} />
        </StyledButton>
      </Flex>
    </Wrapper>
  );
};

const Title = styled.h1`
  font-size: 4em;
  color: white;
  text-align: center;
  text-shadow: 0 0 10px black;
`;

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
`;
