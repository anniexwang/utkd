import * as React from 'react';
// import { Link } from 'react-router-dom';
// import ResponsiveAppBar from '@/components/navbar';
// import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import { Card, CardContent, Typography } from '@mui/material';

export default function EventsCard({name, info, countdown} : {
    name: string,
    info: string,
    countdown: string
}) {
  return (
    <Card sx={{ width: "30vw", height: "80vh", margin: 2, borderRadius: 2}}>

      <CardContent>
        <div style={{ flexDirection: 'column', padding: '3vw', justifyContent: 'center', display: 'flex', alignItems: 'center', height: '100%', border: '1px solid black', borderRadius: 16 }}>

        <Typography variant="h1" component="div">
            {countdown}
        </Typography>

        <Typography variant="body1" component="div">
            days
        </Typography>
        </div>


      <Typography variant="h6" component="div" sx={{ marginTop: 2, marginBottom: 2 }}>
          {name} 
        </Typography>
        {/* {role && ( */}
          
        {/* )} */}
        <Typography variant="body2" color="text.secondary">
            {info}
          </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
