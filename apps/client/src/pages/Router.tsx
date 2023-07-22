import { Routes, Route } from "react-router-dom";
import { useBoxes } from "hooks/useBoxes";

import { Home } from "pages/Home";
// import { BoxView } from "pages/BoxView";

export const Router = () => {
  const { boxes = [] } = useBoxes();

  console.log(boxes);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* {boxes.map((box: Box) => (
        <Route path={`/${box.id}`} element={<BoxView box={box} />} />
      ))} */}
      <Route element={<Home />} />
    </Routes>
  );
};
