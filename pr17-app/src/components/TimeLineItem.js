import React from "react";

const TimelineItem = ({ title, content }) => {
  return (
    <div className="timeline-item">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default TimelineItem;