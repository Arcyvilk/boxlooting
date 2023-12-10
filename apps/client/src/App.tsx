import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@boxlooting/utils";

import { useBoxes } from "hooks/useAPI";
import { Header, Navigation } from "containers";

import { HomeView, MapView, LootView, BoxView } from "./pages";

import s from "./App.module.scss";

export const App = (): JSX.Element => {
  const { boxes = [] } = useBoxes();

  return (
    <div className={s.app}>
      <BrowserRouter>
        <div className={s.app__top}>
          <Header />
          <Navigation />
        </div>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/box" element={<LootView />} />

          {boxes.map((box: Box) => (
            <Route path={`/box/${box.id}`} element={<BoxView box={box} />} />
          ))}

          <Route element={<HomeView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
