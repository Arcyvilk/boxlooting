import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import s from "./Navigation.module.scss";

export const Navigation = () => {
  const activeTab = location.pathname;

  return (
    <div className={s.navigation}>
      <NavigationButton activeTab={activeTab} label="Map" path="map" />
      <NavigationButton activeTab={activeTab} label="Loot" path="box" />
    </div>
  );
};

type NavigationButtonProps = {
  activeTab: string;
  label: string;
  path: string;
};
const NavigationButton = ({
  activeTab,
  label,
  path,
}: NavigationButtonProps) => {
  const navigate = useNavigate();
  const navigateTo = (to: string) => {
    navigate(to);
  };

  return (
    <button
      className={classNames(s.navigation__button, {
        active: activeTab === `/${path}`,
      })}
      onClick={() => navigateTo(path)}
    >
      {label}
    </button>
  );
};
