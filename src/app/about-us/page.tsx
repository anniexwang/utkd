import * as React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import ResponsiveAppBar from '@/components/navbar';

export default function AboutUs() {
  return (
    <>
    <ResponsiveAppBar/>
    <Typography> About Us </Typography>
    </>
  );
}
