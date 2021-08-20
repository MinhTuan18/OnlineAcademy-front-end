import React from 'react';
import { Box, Typography, Container } from '@material-ui/core';
import PropTypes from 'prop-types';

const InstructorPageHeader = ({ title }) => {
    return (
        <Box mb={1}>
            <Container maxWidth="lg">
                <Typography
                    color="textPrimary"
                    variant="h4"
                >
                    {title}
                </Typography>
            </Container>
        </Box>
    );
};

InstructorPageHeader.propTypes = {
    title: PropTypes.string,
}

export default InstructorPageHeader;

