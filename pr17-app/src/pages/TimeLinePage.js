// TimeLinePage.js
import React, { useState } from 'react';
import { Stack } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@mui/lab';
import BreadCrumbs from '../components/BreadCrumbs.js';
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
      <BreadCrumbs />
      <Stack direction="column" spacing={4} sx={{ marginTop: 5 }}>
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
    </div>
  );
};

export default TimeLinePage;