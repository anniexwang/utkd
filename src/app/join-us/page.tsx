import * as React from 'react';
// import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import ResponsiveAppBar from '@/components/navbar';
// import '../../App.css';

export default function JoinUs() {
  return (
    <>
    <ResponsiveAppBar/>
    <Typography> Join Us </Typography>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1vw",
        // alignItems: "center",
        justifyItems: "stretch",
        justifyContent: "stretch",
        boxSizing: "border-box"
      }}
    >
      <div style={{padding: '2vw'}}>
        <Typography className='subtitle1'> Member Sign Up Form </Typography>
        <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSfi0Fla_f9ouJPTD-z5wXDgY2dQhnopD_WQ-WHcnw5FnUNXlA/viewform?embedded=true" 
            width='100%' 
            height='400vh' 
            title='Google Form'
            // frameBorder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // allowFullScreen
            style={{ margin: 0 }}
        >
          </iframe>
      </div>

      <div style={{padding: '2vw'}}>
        <Typography className='subtitle1'> Dance Cover Form </Typography>
        <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSfi0Fla_f9ouJPTD-z5wXDgY2dQhnopD_WQ-WHcnw5FnUNXlA/viewform?embedded=true" 
            width='100%' 
            height='400vh' 
            title='Google Form'
            // frameBorder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // allowFullScreen
            // style={{ margin: 0 }}
        >
          </iframe>
      </div>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1vw",
        // alignItems: "center",
        justifyItems: "stretch",
        justifyContent: "strech",
        boxSizing: "border-box"
      }}
    >

      <div style={{padding: '2vw'}}>
      <Typography className='subtitle1'> Looking for Members </Typography>
      <Typography>
        - 
        <br/>
        
        - 
        <br/>
        - 
      </Typography>
    </div>

    <div style={{padding: '2vw'}}>
      <Typography className='subtitle1'> Performance Opportunities </Typography>
      <Typography>
        - 
        <br/>
        
        - 
        <br/>
        - 
      </Typography>
    </div>

    </div>

    
    
    </>
  );
}
