// import { Box } from '@mui/material';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
// import { AppBar, Box, Typography } from '@mui/material';
import './../styles/HeaderStyles.css';
import { Divider, Drawer } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
  const [open,setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openProfile = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (toggleState) => {
    setOpen(toggleState);
  };
  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, my:2, color: 'goldenrod' }}>
        Ads World
      </Typography>
      <Divider />
      <ul className="side-menu">
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/login'}>Login</Link>
        </li>
        <li>
          <Link to={'/signup'}>Signup</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
        <li>
          <Link to={'/menu'}>Menu</Link>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Ads World
            </Typography>
            {/* <Box sx={{display: {xs:'none', sm:'block'}}}>
              <ul className='navigation-menu'>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/about'}>About</Link>
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                </li>
                <li>
                  <Link to={'/menu'}>Menu</Link>
                </li>
              </ul>
            </Box> */}
            <IconButton
              color="inherit"
              aria-controls={openProfile ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openProfile ? 'true' : undefined}
              onClick={handleClick}
            >
              <PersonIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openProfile}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Box>
          <Drawer
            open={open}
            onClose={() => toggleDrawer(false)}
            sx={{
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: '240px',
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default Header;
