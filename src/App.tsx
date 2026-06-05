import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy Loading
const LandingPage = lazy(() => import("./features/landing/page/Index"));
const Blog = lazy(() => import("./features/blogs/Index"));
const ErrorPage = lazy(() => import("./features/landing/Index"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/landing-page" element={<LandingPage />} />

        {/* Route params & Query param */}
        <Route path="/blog/:user" element={<Blog />} />

        {/* WildCard Routes */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
