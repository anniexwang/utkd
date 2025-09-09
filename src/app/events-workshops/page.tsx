import * as React from 'react';
// import { Link } from 'react-router-dom';
import { Typography, Stack } from '@mui/material';
import ResponsiveAppBar from '@/components/navbar';
import EventsCard from '@/components/EventsWorkshops/EventsCard';
import WorkshopCard from '@/components/EventsWorkshops/WorkshopCard';
import '../../App.css';

export default function EventsWorkshops() {
  return (
    <>
    
    <ResponsiveAppBar/>
    <Typography> Events/Workshops </Typography>
    

    <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">

    <WorkshopCard workshopPoster={"/path/to/image.jpg"} link1="https://docs.google.com/forms/d/e/1FAIpQLSfi0Fla_f9ouJPTD-z5wXDgY2dQhnopD_WQ-WHcnw5FnUNXlA/viewform" link2="https://docs.google.com/forms/d/e/1FAIpQLSfi0Fla_f9ouJPTD-z5wXDgY2dQhnopD_WQ-WHcnw5FnUNXlA/viewform" />
    
    <EventsCard name={"Back to School Social"} info={"info"} countdown={"25"} />
    
    </Stack>
    </>
  );
}
