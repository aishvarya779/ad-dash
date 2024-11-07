import { Box, Typography } from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: 'center', bgcolor: '#1A1A19', p: 3, color: 'white' }}
      >
        <Box
          sx={{
            my: 3,
            '& svg': {
              fontSize: '60px',
              mr: 2,
              cursor: 'pointer',
            },
            '& svg:hover': {
              color: 'goldenrod',
              transform: 'translateX(5px)',
              transition: 'all 400ms'
            },
          }}
        >
          <InstagramIcon />
          <XIcon />
          <YouTubeIcon />
          <FacebookIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{
            '@media (max-width:600px)': {
              fontSize: '1rem',
            },
          }}
        >
          All Rights Reserved &copy; Ads World
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
