import React from "react";
import { Tab } from '@mui/material';

const ContactTab = ({ icon, onClick, label }) => {
  return (
    <Tab
      icon={icon}
      aria-label={label}
      onClick={onClick}
      sx={{
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: '#f0f0f0',
        },
      }}
    />
  );
};

export default ContactTab;