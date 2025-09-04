import * as React from 'react';
// import { Link } from 'react-router-dom';
// import ResponsiveAppBar from '@/components/navbar';
// import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function ExecCard({name, pic, role, year, program, favartists, info} : {
    name: string,
    pic: string,
    role: string,
    year: string,
    program: string,
    favartists: string,
    info?: string
}) {
  return (
    <Card sx={{ width: 300, margin: 2, boxShadow: 15, borderRadius: 2}}>
      
      <CardContent>
        <Typography variant="h6" component="div">
            {role}
        </Typography>
        <CardMedia
        component="img"
        image={pic}  // path to image
        alt={name}
        style={{ height: 250}}
      />
      <Typography gutterBottom variant="h6" component="div">
          {name} 
        </Typography>
        {/* {role && ( */}
          
        {/* )} */}
        <Typography variant="body2" color="text.secondary">
            Year: {year}
            <br/>
            Program: {program}
            <br/>
            Fav. Artist(s): {favartists}
          </Typography>

        <Typography variant="body2" color="text.secondary">
            
          </Typography>
        <Typography variant="body2" color="text.secondary">
            
          </Typography>

        {info && (
          <Typography variant="body2" color="text.secondary">
            {info}
          </Typography>
        )}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
