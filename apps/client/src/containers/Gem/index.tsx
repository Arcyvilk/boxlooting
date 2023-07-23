import Lottie from "react-lottie";

import animationData from "assets/lotties/gem.json";
import { styled } from "styled-components";
import { useState } from "react";

type Props = { link: string };
export const Gem = ({ link }: Props) => {
  const [isRedeemed, setIsRedeemed] = useState(false);

  const onClick = () => {
    if (isRedeemed) return;
    setIsRedeemed(true);
    window.open(link, "_blank");
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <StyledButton onClick={onClick} disabled={isRedeemed}>
      <Lottie
        options={defaultOptions}
        height={100}
        width={100}
        style={{ filter: "drop-shadow(0 10px 10px black)" }}
        eventListeners={[
          {
            eventName: "click",
            callback: onClick,
          },
        ]}
      />
    </StyledButton>
  );
};

const StyledButton = styled.button<{ disabled?: boolean }>`
  all: unset;
  cursor: pointer;
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "grayscale(0)")};
`;
