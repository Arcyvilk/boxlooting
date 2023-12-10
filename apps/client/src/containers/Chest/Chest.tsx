import { useState } from "react";
import Lottie from "react-lottie";

import { ChestType, chestMap } from "containers/Chest/chestMap";
import { useRewards } from "hooks/useAPI";
import { Gem } from "containers/Gem";

import s from "./Chest.module.scss";

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
    <div className={s.chest}>
      {rewards.links.map((link) => (
        <Gem link={link} />
      ))}
    </div>
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
