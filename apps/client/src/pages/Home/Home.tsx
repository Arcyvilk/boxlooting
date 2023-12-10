import { Button } from "components";
import s from "./Home.module.scss";

export const Home = () => {
  const navigateTo = (to: string) => {
    window.open(`/${to}`, "_self");
  };

  return (
    <div className={s.home}>
      <Button onClick={() => navigateTo("map")}>Map</Button>
      <Button onClick={() => navigateTo("loot")}>Loot</Button>
    </div>
  );
};
