import * as React from 'react';
import { Typography, Box } from '@mui/material';
import ResponsiveAppBar from '@/components/navbar';

// import YouTubeIcon from '@mui/icons-material/YouTube';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import MusicNoteIcon from '@mui/icons-material/MusicNote';
// import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

import { League_Spartan, Bebas_Neue, Saira_Condensed } from 'next/font/google';

const league = League_Spartan({
  variable: "--font-league",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebads",
  subsets: ["latin"],
  weight: "400",
});

const sairaCondensed = Saira_Condensed({
  variable: "--font-saira-condensed",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});



export default function Home() {

  return (
    <>
      <ResponsiveAppBar/>
      
        {/* <Typography> Home </Typography> */}

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Left Side (Text) */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              className={league.className}
              // classNames={bebasNeue.className}
              // className={sairaCondensed.className}

              sx={{
                fontSize: '2.25rem',
                fontWeight: 700,
                color: '#111827',
                marginTop: '2rem',
                marginBottom: '0.75rem',
                position: 'relative',
                paddingBottom: '0.5rem',
                textShadow: '2px 2px 4px rgba(255, 110, 196, 0.35)'
                // fontFamily: 'Bebas Neue, sans-serif'
                // fontFamily: '"League Spartan", sans-serif'
              }}
            >
              UofT Kpop Dance Club
            </Typography>

            <Typography
              sx={{
                fontSize: '1.2rem',
                fontWeight: 500,
                color: '#6b7280',
                marginTop: '2.5rem',
                marginBottom: '0.75rem',
                maxWidth: '700px',
                marginLeft: 'auto',
                marginRight: 'auto',
                letterSpacing: '0.5px',
                textShadow: '2px 2px 4px rgba(120, 245, 120, 0.35)'

              }}
            >
              Sharing our love for Kpop and Dancing at UofT!
            </Typography>
          </Box>

          {/* Right Side (Logo) */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box
              component="img"
              src="/UTKDC_logo.svg"
              sx={{
                marginTop: { md: '2.5rem' },
                width: { xs: '40vw', md: '50vw' },
                height: 'auto',
              }}
            />
          </Box>
        </Box>




        {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
          <Typography 
            component='a'
            href='https://www.youtube.com/@utkdc_official'
            target='_blank'
            rel='noopener noreferrer'
            sx={{fontSize: '1.2rem', fontWeight: 500, color: '#6b7280', marginTop: '2.5rem', marginBottom: '2.5rem', maxWidth: '700px', letterSpacing: '0.5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> Learn More </Typography>
          <TrendingFlatIcon sx={{color: '#6b7280'}}/>
        </div> */}

        {/* <div style={{
        position: "relative", 
        // paddingBottom: "56.25%", // 16:9 ratio (9/16 = 0.5625)
        // height: "100%", 
        // width: "100%",
        }}>
        <iframe 
          src="https://www.youtube.com/embed/ggkrnZ_40-o?si=9KrPM_ram_ei5B0D" 
          title='Youtube'
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ 
            // position: "absolute", 
            top: 0, 
            left: 0, 
            position: "relative", 
            width: "100%", 
            height: "100%" 
          }}
        ></iframe>
        </div> */}

        

        <Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' }, // stack on mobile, side by side on desktop
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '2rem',
    marginTop: '3rem',
  }}
>
  {/* Left: Video */}
  <Box sx={{ flex: 1, width: '100%', maxWidth: '800px', margin: '0 auto', display: 'flex',
    flexDirection: 'column',
    alignItems: 'center' }}>
    <Typography sx={{fontSize: '1.2rem', fontWeight: 500, color: '#6b7280', marginTop: '2.5rem', marginBottom: '2.5rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', letterSpacing: '0.5px', textTransform: 'uppercase', display: 'flex', justifyContent: 'center', alignItems: 'center', textShadow: '2px 2px 4px rgba(255, 110, 196, 0.35)' }}> Latest Cover </Typography>

    <iframe
      src="https://www.youtube.com/embed/ggkrnZ_40-o?si=9KrPM_ram_ei5B0D"
      title="Youtube"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{
        width: '95%',
        aspectRatio: '16 / 9',
      }}
    ></iframe>
  </Box>

  {/* Right: Text */}
  <Box sx={{ flex: 1, margin: '0 auto' }}>

    <Typography sx={{fontSize: '1.2rem', fontWeight: 500, color: '#6b7280', marginTop: '2.5rem', marginBottom: '2.5rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', letterSpacing: '0.5px', textTransform: 'uppercase', display: 'flex', justifyContent: 'center', alignItems: 'center', textShadow: '2px 2px 4px rgba(120, 245, 120, 0.35)' }}> Recent Covers </Typography>

    <Typography
      sx={{
        fontSize: '1.2rem',
        fontWeight: 500,
        color: '#6b7280',
        marginTop: '1.5rem',
        marginBottom: '0.75rem',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(200, 120, 255, 0.3)',
      }}
    >
      February
    </Typography>
    <Typography
      component="a"
      href="https://www.youtube.com/watch?v=p-f9ED0Q97A"
      target="_blank"
      rel="noopener noreferrer"
      sx={{ display: 'block', textAlign: 'center' }}
    >
      MEOVV - MEOW
    </Typography>

    <Typography
      sx={{
        fontSize: '1.2rem',
        fontWeight: 500,
        color: '#6b7280',
        marginTop: '1.5rem',
        marginBottom: '0.75rem',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(200, 120, 255, 0.3)',
      }}
    >
      March
    </Typography>
    <Typography
      component="a"
      href="https://www.youtube.com/watch?v=LFAIjRyMD2Q"
      target="_blank"
      rel="noopener noreferrer"
      sx={{ display: 'block', textAlign: 'center' }}
    >
      LE SSERAFIM - Perfect Night
    </Typography>

    <Typography
      sx={{
        fontSize: '1.2rem',
        fontWeight: 500,
        color: '#6b7280',
        marginTop: '1.5rem',
        marginBottom: '0.75rem',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(200, 120, 255, 0.3)',
      }}
    >
      April
    </Typography>
    <Typography
      component="a"
      href="https://www.youtube.com/watch?v=rOSLuD3cRpE"
      target="_blank"
      rel="noopener noreferrer"
      sx={{ display: 'block', textAlign: 'center' }}
    >
      BADVILLAN - BADVILLAN
    </Typography>

    <Typography
      sx={{
        fontSize: '1.2rem',
        fontWeight: 500,
        color: '#6b7280',
        marginTop: '1.5rem',
        marginBottom: '0.75rem',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(200, 120, 255, 0.3)',
      }}
    >
      June
    </Typography>
    <Typography
      component="a"
      href="https://www.youtube.com/watch?v=SQuoRzVN5F0"
      target="_blank"
      rel="noopener noreferrer"
      sx={{ display: 'block', textAlign: 'center' }}
    >
      TREASURE - JIKJIN
    </Typography>

    <Typography
      sx={{
        fontSize: '1.2rem',
        fontWeight: 500,
        color: '#6b7280',
        marginTop: '1.5rem',
        marginBottom: '0.75rem',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(200, 120, 255, 0.3)',
      }}
    >
      July
    </Typography>
    <Typography
      component="a"
      href="https://www.youtube.com/watch?v=ggkrnZ_40-o"
      target="_blank"
      rel="noopener noreferrer"
      sx={{ display: 'block', textAlign: 'center' }}
    >
      Tomorrow X Together - Chasing That Feeling
    </Typography>
  </Box>
</Box>


        <Typography sx={{fontSize: '1.2rem', fontWeight: 500, color: '#6b7280', marginTop: '5rem', marginBottom: '2.5rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', letterSpacing: '0.5px', textTransform: 'uppercase', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> Follow Us On Social Media! </Typography>

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
