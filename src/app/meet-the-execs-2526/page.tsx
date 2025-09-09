import * as React from 'react';
// import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import ResponsiveAppBar from '@/components/navbar';
import ExecCard from '@/components/MeetTheExecs/ExecCard';
import adminexecs from '../../../execs_2526/admin.json';
import eventsexecs from '../../../execs_2526/events.json';
import socialmediaexecs from '../../../execs_2526/socialmedia.json';
import Link from 'next/link';
import '../../App.css';

export default function MeetTheExecs() {
  return (
    <div style={{marginBottom: "5vh"}}>
    <ResponsiveAppBar/>
    <Typography className="title"> Meet The Execs 2025 - 2026</Typography>

    <Typography className="subtitle"> Admin </Typography>

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
      <ExecCard key={exec.name} name={exec.name} pic={exec.pic} role={exec.role} year={exec.year} program={exec.program} favartists={exec.favartists} info={exec.info}></ExecCard>
      )) }
    </div>

    <Typography className="subtitle"> Events </Typography>

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
      <ExecCard key={exec.name} name={exec.name} pic={exec.pic} role={exec.role} year={exec.year} program={exec.program} favartists={exec.favartists} info={exec.info}></ExecCard>
      )) }
    </div>

    <Typography className="subtitle"> Social Media </Typography>

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
          <ExecCard  name={exec.name} pic={exec.pic} role={exec.role} year={exec.year} program={exec.program} favartists={exec.favartists} info={exec.info}></ExecCard>
        </div>
      )) }
    </div>

    <Typography className="subtitle"> Past Execs </Typography>

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
    </div>
    
    </div>
  );
}
