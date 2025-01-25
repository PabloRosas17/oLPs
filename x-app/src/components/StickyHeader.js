import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar } from '@mui/material';

const StickyHeader = () => {
  const [scrollingUp, setScrollingUp] = useState(true);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrollingUp(window.scrollY < window.prevScrollY);
    }
    window.prevScrollY = window.scrollY;
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="sticky"
      sx={{
        transition: 'top 0.3s',
        top: scrollingUp ? 0 : '-56px',
        height: '10px',
        padding: '0 16px',
      }}
    >
      <Toolbar />
    </AppBar>
  );
};

export default StickyHeader;