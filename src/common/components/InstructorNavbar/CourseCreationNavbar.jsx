import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Avatar, Box, Toolbar, Typography, LinearProgress, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 5,
    },
    bar: {
      backgroundColor: '#7c4bc0',
    },
}))(LinearProgress);

export const CourseCreationNavbar = (props) => {
    const { step } = props;
    return (
    <AppBar elevation={0} style={{ backgroundColor: '#ffffff', position: 'fixed' }}>
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
            <Divider orientation='vertical' flexItem/>
            <Box px={3} py={1}>
            <Typography variant='h6' color='textPrimary'>
                Step {step} of 3
            </Typography>
            </Box>
            <Box style={{ flexGrow: 1 }} />
            <Box px={3} py={1}>
            <RouterLink style={{color: '#7c4bc0', fontWeight: '700', fontSize: '15px'}} to='/instructor/courses'>
                Exit
            </RouterLink>
            </Box>
        </Toolbar>
        <BorderLinearProgress variant="determinate" value={step === 1 ? 100/3 : step === 2 ? 200/3 : 100}/>
    </AppBar>
)};

CourseCreationNavbar.defaultProps = {
    step: 1
}

CourseCreationNavbar.propTypes = {
    step: PropTypes.number,
}
