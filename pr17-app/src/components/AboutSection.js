import React from 'react';
import { Paper, Typography, useTheme, useMediaQuery } from '@mui/material';

const AboutSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper
      sx={{
        padding: isSmallScreen ? 2 : 4,
        textAlign: 'center',
        width: isSmallScreen ? '90%' : '60%',
        margin: 'auto',
        boxShadow: 3,
        '&:hover': {
          backgroundColor: 'background.paper',
          boxShadow: '0px 4px 10px rgba(21, 21, 21, 0.3)',
        },
      }}
    >
      <Typography
        variant={isSmallScreen ? 'h5' : 'h4'}
        gutterBottom
        sx={{ color: 'primary.dark' }}
      >
        Hi.
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{
          color: 'primary.light',
          fontSize: isSmallScreen ? '14px' : '16px',
        }}
      >
        Welcome to my website.
        <br />
        Here you'll find information about me and my work.
        <br />
        Feel free to reach out to me if you have any questions!
      </Typography>
    </Paper>
  );
};

export default AboutSection;
