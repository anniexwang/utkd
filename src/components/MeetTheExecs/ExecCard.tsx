import * as React from 'react';
// import { Link } from 'react-router-dom';
// import ResponsiveAppBar from '@/components/navbar';
// import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CSSProperties } from "react";

export default function ExecCard({name, pic, role, year, program, favartists, info, boxShadowColour} : {
    name: string,
    pic: string,
    role: string,
    year: string,
    program: string,
    favartists: string,
    info?: string,
    boxShadowColour: CSSProperties["boxShadow"],
}) {
  return (
    <Card sx={{ width: 300, 
      margin: 2, 
      boxShadow: boxShadowColour,
      borderRadius: 2}}>
      
      <CardContent>
        <Typography variant="h6" component="div" sx={{fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', marginBottom: '0.5rem'}}>
            {role}
        </Typography>
        <CardMedia
        component="img"
        image={pic}  // path to image
        alt={name}
        style={{ height: 250}}
      />
      <Typography gutterBottom variant="h6" component="div" sx={{fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', marginTop: '0.5rem'}}>
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
