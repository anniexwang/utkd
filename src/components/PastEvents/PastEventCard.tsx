import * as React from 'react';
// import { Link } from 'react-router-dom';
// import ResponsiveAppBar from '@/components/navbar';
// import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function PastEventCard({name, info, pic}: {
    name: string,
    info: string,
    pic: string
}) {
  return (
    <Card sx={{ width: 300, margin: 2, borderRadius: 2}}>

      <CardContent>

        <CardMedia
            component="img"
            image={pic}  // path to image
            alt={pic}
            style={{ height: 250, objectFit: 'cover' }}
        />

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
