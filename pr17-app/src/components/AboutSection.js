import React from 'react';
import { Paper, Typography } from '@mui/material';

const AboutSection = () => (
  <Paper
    sx={{
      padding: 4,
      textAlign: 'center',
      width: '60%',
      boxShadow: 3,
      '&:hover': {
        backgroundColor: 'background.paper',
        boxShadow: '0px 4px 10px rgba(21, 21, 21, 0.3)',
      },
    }}
  >
    <Typography variant="h4" gutterBottom sx={{ color: 'primary.dark' }}>
      Hi.
    </Typography>
    <Typography variant="body1" gutterBottom sx={{ color: 'primary.light' }}>
      Welcome to my website.
      <br />
      Here you'll find information about me and my work.
      <br />
      Feel free to reach out to me if you have any questions!
    </Typography>
  </Paper>
);

export default AboutSection;
