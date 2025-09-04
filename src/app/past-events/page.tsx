import * as React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import ResponsiveAppBar from '@/components/navbar';
import PastEventCard from '@/components/PastEvents/PastEventCard';

export default function PastEvents() {
  return (
    <>
    <ResponsiveAppBar/>
    <Typography> Past Events </Typography>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, max-content))",
        gap: "20px",
        // alignItems: "center",
        justifyItems: "center",
        justifyContent: "center",
        boxSizing: "border-box"
      }}
    >
      <PastEventCard name="Past Event 1" info="Description of past event 1" pic="/path/to/image1.jpg" />
      <PastEventCard name="Past Event 2" info="Description of past event 2" pic="/path/to/image2.jpg" />
      <PastEventCard name="Past Event 3" info="Description of past event 3" pic="/path/to/image3.jpg" />
    </div>
    </>
  );
}
