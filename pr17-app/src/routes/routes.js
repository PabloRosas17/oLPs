import React from 'react';
import { Route, Routes } from 'react-router-dom';

import TimeLinePage from '../pages/TimeLinePage';
import AboutPage from '../pages/AboutPage';

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/timeline" element={<TimeLinePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default RoutesConfig;