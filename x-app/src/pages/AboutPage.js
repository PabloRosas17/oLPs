import React, { useState } from 'react';
import { Box, Stack, Tabs } from '@mui/material';
import AboutSection from '../components/AboutSection.js';
import MuiBreadCrumbs from '../components/MuiBreadCrumbs.js';
import CenteredBox from '../components/CenteredBox.js';
import ContactTab from '../components/ContactTab.js';
import StickyHeader from '../components/StickyHeader.js';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const AboutPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:pablo.rosas.0170@gmail.com';
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/PabloRosas17', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/PabloRosas17', '_blank');
  };

  return (
    <div>
      <StickyHeader />
      <MuiBreadCrumbs />
      <Box sx={{ backgroundColor: 'background.default', position: 'relative', height: '100vh', padding: 2 }}>
        <CenteredBox>
          <AboutSection />
        </CenteredBox>
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <Stack direction="column" spacing={1} alignItems="center">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="contact tabs"
              sx={{
                '& .MuiTabs-indicator': {
                  display: 'none',
                },
              }}
            >
              <ContactTab
                icon={<LinkedInIcon />}
                label="LinkedIn"
                onClick={handleLinkedInClick}
              />
              <ContactTab
                icon={<GitHubIcon />}
                label="GitHub"
                onClick={handleGitHubClick}
              />
              <ContactTab
                icon={<EmailIcon />}
                label="Email"
                onClick={handleEmailClick}
              />
            </Tabs>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default AboutPage;
