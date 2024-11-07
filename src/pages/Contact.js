import React from 'react';
import Layout from '../components/Layout';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 10,
          p: 2,
          textAlign: 'center',
          '& h4': {
            fontWeight: 700,
            mb: 2,
          },
          '& p': {
            textAlign: 'justify',
            fontSize: '1.4rem'
          }
        }}
      >
        <Typography variant="h4">Contact Ad World</Typography>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi impedit
          nisi enim, dolore odit fugiat ea ut natus voluptates? Explicabo sed
          est nemo error consectetur assumenda earum, quibusdam aperiam mollitia
          incidunt quae harum cupiditate officiis iste quos numquam delectus
          eos.
        </p>
      </Box>
      <Box sx={{m:3}}>
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor: 'black', color: 'white', textAlign: 'center'}}>
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
              <TableCell>
                <SupportAgentIcon sx={{color:'red', pt: 1}} /> 1800-00-0000 (Tollfree)
              </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                <MailIcon sx={{color:'skyblue', pt: 1}} /> abcdefgh@xyz.com
              </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                <CallIcon sx={{color:'green', pt: 1}} /> abcdefgh@xyz.com
              </TableCell>
              </TableRow>
             
              
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
