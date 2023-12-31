import { Routes, Route } from "react-router-dom";
import { Box } from "@boxlooting/utils";

import { useBoxes } from "hooks/useAPI";
import { Home } from "pages/Home";
import { BoxView } from "pages/BoxView";
import { Map } from "pages/Map";

export const Router = () => {
  const { boxes = [] } = useBoxes();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      {boxes.map((box: Box) => (
        <Route path={`/box/${box.id}`} element={<BoxView box={box} />} />
      ))}
      <Route element={<Home />} />
    </Routes>
  );
};
