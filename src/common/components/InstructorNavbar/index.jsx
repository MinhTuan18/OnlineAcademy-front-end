import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Avatar, Box, Link, Toolbar } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Logo } from '../../icons/logo';

export const Navbar = () => (
  <AppBar elevation={0} style={{ backgroundColor: '#ffffff' }}>
    <Toolbar
      disableGutters
      style={{
        alignItems: 'center',
        display: 'flex',
        minHeight: 64,
      }}
    >
      <Box
        px={3}
        py={1}
        component={RouterLink}
        to="/instructor"
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <img src="/images/logo.png" className="main-logo" height="65"  alt="Awesome Logo" />
      </Box>
      <Box style={{ flexGrow: 1 }} />
      <Box px={3} py={1}>
        <RouterLink 
            to='/'
            style={{ color: '#7c4bc0' }}
            target="_blank"
            variant="body2"
        >
            Student
        </RouterLink>
      </Box>
      
      <NotificationsIcon style={{color: '#f16101'}}/>
      <Box px={3} py={1}>
        <Avatar
            alt="User"
            src="/images/team-1-7.jpg"
        />
      </Box>
    </Toolbar>
    <div className="site-header__decor">
        <div className="site-header__decor-row">
            <div className="site-header__decor-single">
                <div className="site-header__decor-inner-1"></div>
            </div>
            <div className="site-header__decor-single">
                <div className="site-header__decor-inner-2"></div>
            </div>
            <div className="site-header__decor-single">
                <div className="site-header__decor-inner-3"></div>
            </div>
        </div>
    </div>
  </AppBar>
);

export * from './CourseCreationNavbar';
