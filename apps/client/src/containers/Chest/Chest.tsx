import Lottie from "react-lottie";
import { useState } from "react";

import { ChestType, chestMap } from "containers/Chest/chestMap";
import { useRewards } from "hooks/useAPI";
import { Flex } from "components";
import { Gem } from "containers/Gem";

type Props = {
  boxId: string;
  type: ChestType;
};
export const Chest = (props: Props) => {
  const { boxId, type } = props;
  const [isRedeemed, setIsRedeemed] = useState(false);

  const { rewards } = useRewards(boxId);

  const onAnimationFinish = () => {
    setIsRedeemed(true);
  };

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: chestMap[type],
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return isRedeemed ? (
    <Flex flexWrap="wrap">
      {rewards.links.map((link) => (
        <Gem link={link} />
      ))}
    </Flex>
  ) : (
    <Lottie
      options={defaultOptions}
      height={200}
      width={200}
      style={{
        filter: "drop-shadow(0 0px 10px black) drop-shadow(0 0px 50px #fdc000)",
      }}
      eventListeners={[
        {
          eventName: "complete",
          callback: onAnimationFinish,
        },
      ]}
    />
  );
};
