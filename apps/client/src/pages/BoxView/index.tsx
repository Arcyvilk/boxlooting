import React, { useState } from 'react';

import { Button, Flex, Wrapper } from 'components';
import { Box } from 'data/boxes';
import { getLinks } from 'utils/getLinks';

type Props = {
  box: Box;
};

export const BoxView = (props: Props) => {
  const { box } = props;
  const [isRedeemed, setIsRedeemed] = useState(false);

  const onRedeemLoot = () => {
    setIsRedeemed(true);
    const links = getLinks(box.id);
    links.forEach((link: string) => window.open(link, '_blank'));
  };

  return (
    <Wrapper>
      <Flex align justify>
        <h1>{box.name.toUpperCase()}</h1>
      </Flex>
      <Flex column align justify>
        <Button onClick={onRedeemLoot} disabled={isRedeemed}>
          Redeem your loot
        </Button>
      </Flex>
    </Wrapper>
  );
};
