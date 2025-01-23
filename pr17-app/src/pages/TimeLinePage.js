import React from "react";
import BreadCrumbs from "../components/BreadCrumbs.js";
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from "@mui/lab";
import { Stack, Typography } from "@mui/material";
import timelineData from "../assets/data/timelineData";

const TimeLinePage = () => {
    return (
      <div style={{ height: "100vh", overflow: "scroll" }}>
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
                  <Typography variant="h5" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body1">{item.content}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Stack>
      </div>
    );
  };

export default TimeLinePage;