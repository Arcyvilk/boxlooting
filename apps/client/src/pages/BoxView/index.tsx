import React, { useState } from "react";
import { Box } from "@boxlooting/utils";

import { Button, Flex, Wrapper } from "components";
import { useRewards } from "hooks/useAPI";

type Props = {
  box: Box;
};

export const BoxView = (props: Props) => {
  const { box } = props;
  const [isRedeemed, setIsRedeemed] = useState(false);
  const { rewards } = useRewards(box.id);

  const onRedeemLoot = () => {
    setIsRedeemed(true);
    rewards.links.forEach((link: string) => window.open(link, "_blank"));
  };

  return (
    <Wrapper>
      <Flex $align $justify>
        <h1>{box.name.toUpperCase()}</h1>
      </Flex>
      <Flex $column $align $justify>
        <Button onClick={onRedeemLoot} disabled={isRedeemed}>
          Redeem your loot
        </Button>
      </Flex>
    </Wrapper>
  );
};
