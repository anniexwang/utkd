import * as React from 'react';
// import { Link } from 'react-router-dom';
// import ResponsiveAppBar from '@/components/navbar';
// import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import { Card, CardMedia, Typography, CardActions, Button } from '@mui/material';

import Link from 'next/link';

export default function WorkshopCard({workshopPoster, link1, link2} : {
    workshopPoster: string,
    link1: string,
    link2?: string
}) {
  return (
        <Card sx={{ width: '60vw', height: "80vh", margin: 2, borderRadius: 2}}>
            <Typography className="subtitle1"> This Week&apos;s Workshop </Typography>

            <CardMedia
            component="img"
            image={workshopPoster}  // path to image
            alt={workshopPoster}
            style={{ width: '60vw', height: '60vh', objectFit: 'cover' }}
            />

            <CardActions sx={{ display: 'flex', justifyContent: 'center', gap: 2}}>
                <Button size="small" style={{ backgroundColor: 'lightgray', padding: 15 }} >
                    <Link href={link1} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'black' }}>
                        Sign Up for Class #1
                    </Link>
                </Button>
            {link2 ? 
                <Button size="small" style={{ backgroundColor: 'lightgray', padding: 15 }}>
                    <Link href={link2} style={{ textDecoration: 'none', color: 'black' }}>
                        Sign Up for Class #2
                    </Link>
                </Button> 
                : null
            }
            </CardActions>
        
        </Card>

        
  );
}
