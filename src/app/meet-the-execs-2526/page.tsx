import * as React from 'react';
// import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import ResponsiveAppBar from '@/components/navbar';
import ExecCard from '@/components/MeetTheExecs/ExecCard';
import adminexecs from '../../../execs_2526/admin.json';
import eventsexecs from '../../../execs_2526/events.json';
import socialmediaexecs from '../../../execs_2526/socialmedia.json';
// import Link from 'next/link';
// import '../../App.css';

export default function MeetTheExecs() {

  const adminColour = `
  0 5px 15px rgba(255, 110, 196, 0.35),
  0 10px 25px rgba(170, 255, 140, 0.25),
  0 20px 40px rgba(200, 120, 255, 0.2);
`
  const eventsColour = 
  `0 5px 15px rgba(255, 110, 196, 0.4),
  0 10px 25px rgba(200, 120, 255, 0.3),
  0 20px 40px rgba(150, 80, 200, 0.2)`;
  
  const socialmediaColour = `
  0 5px 15px rgba(120, 245, 120, 0.35),
  0 10px 25px rgba(170, 255, 140, 0.25),
  0 20px 40px rgba(100, 200, 100, 0.15)`;


  return (
    <div style={{marginBottom: "5vh"}}>
    <ResponsiveAppBar/>
    {/* <Typography className="title"> Meet The Execs 2025 - 2026</Typography> */}
    <Typography sx={{fontSize: '2.25rem', fontWeight: 700, color: '#111827', marginTop: '2rem', marginBottom: '0.75rem', position: 'relative', display: 'flex', paddingBottom: '0.5rem', justifyContent: 'center', alignItems: 'center', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}> Meet The Execs 2025 - 2026</Typography>


    {/* <Typography className="subtitle"> Admin </Typography> */}
    <Typography sx={{fontSize: '1.2rem', fontWeight: 500, color: '#6b7280', marginTop: '2.5rem', marginBottom: '2.5rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', letterSpacing: '0.5px', textTransform: 'uppercase', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> Admin </Typography>


    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, max-content))",
        gap: "20px",
        // alignItems: "center",
        justifyItems: "center",
        justifyContent: "center",
        boxSizing: "border-box"
      }}
    >
      {adminexecs.map((exec) => (
      <ExecCard key={exec.name} name={exec.name} pic={exec.pic} role={exec.role} year={exec.year} program={exec.program} favartists={exec.favartists} info={exec.info} boxShadowColour={adminColour}></ExecCard>
      )) }
    </div>

    {/* <Typography className="subtitle"> Events </Typography> */}
    <Typography sx={{fontSize: '1.2rem', fontWeight: 500, color: '#6b7280', marginTop: '2.5rem', marginBottom: '2.5rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', letterSpacing: '0.5px', textTransform: 'uppercase', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> Events </Typography>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, max-content))",
        gap: "20px",
        // alignItems: "center",
        justifyItems: "center",
        justifyContent: "center",
        boxSizing: "border-box"

      }}
    >
      {eventsexecs.map((exec) => (
      <ExecCard key={exec.name} name={exec.name} pic={exec.pic} role={exec.role} year={exec.year} program={exec.program} favartists={exec.favartists} info={exec.info} boxShadowColour={eventsColour}></ExecCard>
      )) }
    </div>

    {/* <Typography className="subtitle"> Social Media </Typography> */}

    <Typography sx={{fontSize: '1.2rem', fontWeight: 500, color: '#6b7280', marginTop: '2.5rem', marginBottom: '2.5rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', letterSpacing: '0.5px', textTransform: 'uppercase', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> Social Media </Typography>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, max-content))",
        gap: "20px",
        // alignItems: "center",
        justifyItems: "center",
        justifyContent: "center",
        boxSizing: "border-box"

      }}
    >
      {socialmediaexecs.map((exec) => (
        <div key={exec.name} style={{ margin: 0 }}>
          <ExecCard  name={exec.name} pic={exec.pic} role={exec.role} year={exec.year} program={exec.program} favartists={exec.favartists} info={exec.info} boxShadowColour={socialmediaColour}></ExecCard>
        </div>
      )) }
    </div>

    {/* <Typography className="subtitle"> Past Execs </Typography> */}
{/* 
    <Typography sx={{fontSize: '1.2rem', fontWeight: 500, color: '#6b7280', marginTop: '2.5rem', marginBottom: '2.5rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', letterSpacing: '0.5px', textTransform: 'uppercase', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> Past Execs </Typography>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, max-content))",
        gap: "3vw",
        alignItems: "center",
        justifyContent: "center",
        
      }}
    >
      <Button style={{backgroundColor: "lightgray",}}>
        <Link href="/meet-the-execs-2425" style={{ textDecoration: 'none', color: 'black' }}>
          2024/2025
        </Link>
      </Button>

      <Button style={{backgroundColor: "lightgray",}}>
        <Link href="/meet-the-execs-2324" style={{ textDecoration: 'none', color: 'black' }}>
          2023/2024
        </Link>
      </Button>
    </div> */}
    
    </div>
  );
}
