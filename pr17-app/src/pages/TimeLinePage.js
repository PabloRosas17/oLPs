import React, { useState } from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@mui/lab';
import { Stack, Box } from '@mui/material';
import MuiAboutChip from '../components/MuiAboutChip.js';
import MuiBreadCrumbs from '../components/MuiBreadCrumbs.js';
import StickyHeader from '../components/StickyHeader.js';
import TimeLineCard from '../components/TimeLineCard.js';
import timelineData from '../assets/data/timelineData.js';

const TimeLinePage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div style={{ height: '100vh', overflow: 'scroll' }}>
      <StickyHeader />
      <MuiBreadCrumbs />
      <Box sx={{ backgroundColor: 'background.default', position: 'relative', height: '100vh', padding: 2 }}>
        <Stack direction="column" spacing={4} sx={{ marginTop: 1 }}>
          <Timeline position="alternate">
            {timelineData.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  {index < timelineData.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <TimeLineCard
                    title={item.title}
                    content={item.content}
                    expandedIndex={expandedIndex}
                    index={index}
                    handleExpand={handleExpand}
                  />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Stack>
        <MuiAboutChip />
      </Box>
    </div>
  );
};

export default TimeLinePage;
