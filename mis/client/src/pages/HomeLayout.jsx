// import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Download } from '@mui/icons-material';

const HomeLayout = () => {
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: 'rgb(145, 85, 253)' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MIS
          </Typography>
          
          <IconButton color="inherit" href="/path/to/download">
            <Download />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div style={{ padding: '20px' }}> {/* Add padding to the body content */}
        {/* <nav>HomeLayout</nav> */}
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
