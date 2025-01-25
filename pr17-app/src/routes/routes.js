import React from 'react';
import { Route, Routes } from 'react-router-dom';

import TimeLinePage from '../pages/TimeLinePage';
import AboutPage from '../pages/AboutPage';

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/pr17-app" element={<TimeLinePage />} /> {/* ROOT */}
      <Route path="/pr17-app/timeline" element={<TimeLinePage />} />
      <Route path="/pr17-app/about" element={<AboutPage />} />
    </Routes>
  );
};

export default RoutesConfig;