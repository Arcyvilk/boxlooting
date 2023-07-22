import { Routes, Route } from 'react-router-dom';

import { BoxView } from 'pages/BoxView';
import { Home } from 'pages/Home';

import { Box, boxes } from 'data/boxes';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {boxes.map((box: Box) => (
        <Route path={`/${box.id}`} element={<BoxView box={box} />} />
      ))}
      <Route element={<Home />} />
    </Routes>
  );
};
