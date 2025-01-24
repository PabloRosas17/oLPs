import React from 'react';
import { Chip } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";

const MuiAboutChip = () => {
  return (
    <Chip
      label="About"
      color="primary"
      size="small"
      component={RouterLink}
      to="/about"
      sx={{
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          backgroundColor: 'primary.dark',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)' },
      }}
    />
  );
};

export default MuiAboutChip;