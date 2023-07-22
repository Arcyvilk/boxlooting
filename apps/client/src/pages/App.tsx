import { BrowserRouter } from "react-router-dom";

import { Router } from "pages/Router";

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};
