import * as React from 'react';
// import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import ResponsiveAppBar from '@/components/navbar';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function ContactUs() {
  return (
    <>
    <ResponsiveAppBar/>
    {/* <Typography> Contact Us </Typography> */}

    <Typography sx={{fontSize: '1.2rem', fontWeight: 500, color: '#6b7280', marginTop: '5rem', marginBottom: '2.5rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', letterSpacing: '0.5px', textTransform: 'uppercase', display: 'flex', justifyContent: 'center', alignItems: 'center', textShadow: '2px 2px 4px rgba(255, 110, 196, 0.35)' }}> Follow Us On Social Media! </Typography>

    <div style={{ display: "flex", flexDirection: "row", gap: "5vw", marginTop: '5rem', marginBottom: '5rem', justifyContent: 'center', alignItems: 'center' }}>

      <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: 'center', gap: '8px'}}>
        {/* <YouTubeIcon /> */}
        <FontAwesomeIcon icon={faYoutube} size="2x" style={{ color: "#FF0000"}}/>
        <Typography
          component='a'
          href='https://www.youtube.com/@utkdc_official'
          target='_blank'
          rel='noopener noreferrer'
        > 
          YouTube 
        </Typography>
        
      </div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: 'center', gap: '8px'}}>
        {/* <InstagramIcon /> */}
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        <Typography
          component='a'
          href='https://www.instagram.com/utkdc_official/'
          target='_blank'
          rel='noopener noreferrer'
        > 
          Instagram 
        </Typography> 
      </div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: 'center', gap: '8px'}}>
        {/* <MusicNoteIcon /> */}
        <FontAwesomeIcon icon={faTiktok} size="2x" style={{ color: "#010101" }} />
        <Typography
          component='a'
          href='https://www.tiktok.com/@utkdc_official'
          target='_blank'
          rel='noopener noreferrer'
        > 
          Tiktok 
        </Typography>
      </div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: 'center', gap: '8px'}}>
        {/* <MusicNoteIcon /> */}
        <FontAwesomeIcon icon={faDiscord} size="2x" style={{ color: "#5865F2" }} />
          <Typography
          component='a'
          href='https://discord.gg/PgPp5uFcKj'
          target='_blank'
          rel='noopener noreferrer'
        > 
          Discord 
        </Typography>
      </div>
    </div>

    </>
  );
}
