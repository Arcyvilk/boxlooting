import React from "react";
import { Box } from "@boxlooting/utils";

import { Title } from "components";
import { Chest, ChestType } from "containers";

import s from "./BoxView.module.scss";

type Props = {
  box: Box;
};

export const BoxView = (props: Props) => {
  const { box } = props;

  return (
    <div className={s.box}>
      <Title title={box.name.toUpperCase()} />
      <Chest type={ChestType.GOLD} boxId={box.id} />
    </div>
  );
};
