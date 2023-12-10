import { Title } from "components";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={s.header}>
      <Title title="Lootboxing" />
    </div>
  );
};
