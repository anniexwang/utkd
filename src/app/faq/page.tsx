import * as React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import ResponsiveAppBar from '@/components/navbar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import faqs from '../../../public/faq-questions.json';

export default function FAQ() {
  return (
    <>
    <ResponsiveAppBar/>
    <Typography> FAQ </Typography>
     <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      {faqs.map((faq) => (
        <Accordion key={faq.question}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
          >
            <Typography component="span">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
    </>
  );
}
