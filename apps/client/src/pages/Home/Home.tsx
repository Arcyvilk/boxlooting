import { useNavigate } from "react-router-dom";

import { Button } from "components";
import s from "./Home.module.scss";

export const Home = () => {
  const navigate = useNavigate();

  const navigateTo = (to: string) => {
    navigate(to);
  };

  return (
    <div className={s.home}>
      <Button onClick={() => navigateTo("map")}>Map</Button>
      <Button onClick={() => navigateTo("loot")}>Loot</Button>
    </div>
  );
};
