import React from "react";
import { Box } from '@mui/material';
import MuiBreadCrumbs from '../components/MuiBreadCrumbs.js';
import StickyHeader from '../components/StickyHeader.js';

const AboutPage = () => {
  return (
    <div /* { title: "About", content: "About this website. ❓" }, */>
      <StickyHeader />
      <MuiBreadCrumbs />
      <Box sx={{ position: 'relative', height: '100vh', padding: 2 }}>
        <p>env.REACT_APP_ABOUT_DESCRIPTION</p>
      </Box>
    </div>
  );
};

export default AboutPage;