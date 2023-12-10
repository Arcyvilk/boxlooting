import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@boxlooting/utils";

import { useBoxes } from "hooks/useAPI";

import { Loot } from "pages/Loot";
import { BoxView } from "pages/Loot/BoxView";
import { Map } from "pages/Map";
import { Home } from "pages/Home";

import s from "./App.module.scss";
import { Navigation } from "containers/Navigation";

export const App = (): JSX.Element => {
  const { boxes = [] } = useBoxes();

  return (
    <div className={s.app}>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/box" element={<Loot />} />

          {boxes.map((box: Box) => (
            <Route path={`/box/${box.id}`} element={<BoxView box={box} />} />
          ))}

          <Route element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
