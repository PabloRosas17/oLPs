import React from 'react';
import { Route, Routes } from 'react-router-dom';

import TimeLinePage from '../pages/TimeLinePage';
import PyFunziesPage from '../pages/PyFunziesPage';
import LeBeautePage from '../pages/LeBeautePage';
import SwiftTruckPage from '../pages/SwiftTruckPage';
import AboutPage from '../pages/AboutPage';

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<TimeLinePage />} />
      <Route path="/timeline" element={<TimeLinePage />} />
      <Route path="/pyfunzies"  element={<PyFunziesPage />} />
      <Route path="/lebeaute"  element={<LeBeautePage />} />
      <Route path="/swifttruck"  element={<SwiftTruckPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default RoutesConfig;