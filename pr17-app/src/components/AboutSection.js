import React from "react";
import { Paper } from '@mui/material';

const AboutSection = () => (
  <Paper
    sx={{
      backgroundColor: 'primary.main',
      padding: 4,
      textAlign: 'center',
      width: '60%',
      boxShadow: 3,
    }}
  >
    <Typography variant="h4" gutterBottom>
      Hi.
    </Typography>
    <Typography variant="body1" gutterBottom>
      Welcome to my website.
      <br />
      Here you'll find information about me and my work.
      <br />
      Feel free to reach out to me if you have any questions!
    </Typography>
  </Paper>
);

export default AboutSection;