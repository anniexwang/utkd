import * as React from 'react';
import { Typography } from '@mui/material';
import ResponsiveAppBar from '@/components/navbar';

import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

export default function Home() {
  return (
    <>
      <ResponsiveAppBar/>
      <div style={{padding: '5vw'}}>
        <Typography> Home </Typography>
        <iframe 
          src="https://www.youtube.com/embed/ggkrnZ_40-o?si=9KrPM_ram_ei5B0D" 
          width='600'
          height='400'
          title='Youtube'
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ marginTop: '5vw' }}
        ></iframe>
          
        {/* <iframe 
          src="https://www.instagram.com/utkdc_official/" 
          width='600' 
          height='400' 
          title='Instagram'
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          // style={{ marginTop: '20px' }}
        ></iframe> */}

        <div style={{ display: "flex", flexDirection: "row", gap: "5vw" }}>
        <iframe 
          src="https://www.youtube.com/embed/ggkrnZ_40-o?si=9KrPM_ram_ei5B0D" 
          width='180' 
          height='133' 
          title='Youtube'
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ marginTop: '5vw' }}
        ></iframe>
        <iframe 
          src="https://www.youtube.com/embed/ggkrnZ_40-o?si=9KrPM_ram_ei5B0D" 
          width='180' 
          height='133' 
          title='Youtube'
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ marginTop: '5vw' }}
        ></iframe>
        <iframe 
          src="https://www.youtube.com/embed/ggkrnZ_40-o?si=9KrPM_ram_ei5B0D" 
          width='180' 
          height='133' 
          title='Youtube'
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ marginTop: '5vw' }}
        ></iframe>
        </div>

        <div style={{ display: "flex", flexDirection: "row", gap: "5vw", marginTop: '2vw' }}>
          <div style={{ display: "flex", flexDirection: "row"}}>
            <YouTubeIcon />
            <Typography> YouTube </Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "row"}}>
            <InstagramIcon />
            <Typography> Instagram </Typography> 
          </div>
          <div style={{ display: "flex", flexDirection: "row"}}>
            <MusicNoteIcon />
            <Typography> Music </Typography>
          </div>
        </div>

          
        </div>
    </>
  );
}
