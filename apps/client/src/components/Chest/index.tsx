import Lottie from "react-lottie";
import { ChestType, chestMap } from "components/Chest/chestMap";

type Props = {
  type: ChestType;
  onAnimationFinish: () => void;
};
export const Chest = (props: Props) => {
  const { type, onAnimationFinish } = props;
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: chestMap[type],
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      height={400}
      width={400}
      style={{ filter: "drop-shadow(0 10px 10px black)" }}
      eventListeners={[
        {
          eventName: "complete",
          callback: onAnimationFinish,
        },
      ]}
    />
  );
};
