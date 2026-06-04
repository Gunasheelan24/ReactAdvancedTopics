import React from "react";
import LandingPage from "./features/landing/page/Index";

import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/landing-page" element={<LandingPage />} />
    </Routes>
  );
};

export default App;
