import React from "react";
import LandingPage from "./features/landing/page/Index";

import { Routes, Route } from "react-router-dom";
import Blog from "./features/blogs/Index";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/landing-page" element={<LandingPage />} />

      {/* Route params & Query param */}
      <Route path="/blog/:user" element={<Blog />} />
    </Routes>
  );
};

export default App;
