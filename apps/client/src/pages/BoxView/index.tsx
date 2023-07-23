import React from "react";
import { Box } from "@boxlooting/utils";

import { Flex, Title } from "components";
import { Chest, ChestType, Wrapper } from "containers";

type Props = {
  box: Box;
};

export const BoxView = (props: Props) => {
  const { box } = props;

  return (
    <Wrapper>
      <Flex $column $align $justify>
        <Title title={box.name.toUpperCase()} />
        <Chest type={ChestType.GOLD} boxId={box.id} />
      </Flex>
    </Wrapper>
  );
};
