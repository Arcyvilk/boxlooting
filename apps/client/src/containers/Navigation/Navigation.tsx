import { Title } from "components";
import s from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <div className={s.navigation}>
      <Title title="Lootboxing" />
    </div>
  );
};
