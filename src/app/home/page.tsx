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
      <div style={{
        position: "relative", 
        paddingBottom: "56.25%", // 16:9 ratio (9/16 = 0.5625)
        height: 0, 
        width: "100%",
      }}>
        <Typography> Home </Typography>
        <iframe 
          src="https://www.youtube.com/embed/ggkrnZ_40-o?si=9KrPM_ram_ei5B0D" 
          title='Youtube'
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ 
            position: "absolute", 
            top: 0, 
            left: 0, 
            width: "60%", 
            height: "60%" 
          }}
        ></iframe>
        </div>



          
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

        <div style={{ display: "flex", flexDirection: "row", gap: "2vw" }}>
            <div style={{ position: "relative", paddingBottom: "56.25%", width: "100%", height: 0 }}>

        <iframe 
          src="https://www.youtube.com/embed/ggkrnZ_40-o?si=9KrPM_ram_ei5B0D" 
          title='Youtube'
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ 
            position: "absolute", 
            top: 0, 
            left: 0, 
            width: "60%", 
            height: "60%" 
          }}

        ></iframe>
        </div>
        <iframe 
          src="https://www.youtube.com/embed/ggkrnZ_40-o?si=9KrPM_ram_ei5B0D" 
          title='Youtube'
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ marginTop: '5vw',
            width: '18vw',
            height: '13vh'
          }}
        ></iframe>
        <iframe 
          src="https://www.youtube.com/embed/ggkrnZ_40-o?si=9KrPM_ram_ei5B0D" 
          title='Youtube'
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ marginTop: '5vw',
            width: '18vw',
            height: '13vh'
          }}
        ></iframe>
        

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
