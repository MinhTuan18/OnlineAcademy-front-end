import React from 'react';
import { Box, Container, Link, Typography } from '@material-ui/core';

export const Footer = () => (
  <Box component="footer">
    <Container maxWidth="lg">
      <Box
        p={3}
        style={{
          backgroundColor: '#F5F5F5',
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <Typography
          color="textSecondary"
          variant="body2"
        >
          © 2021 Online Academy
        </Typography>
        <Box style={{ flexGrow: 1 }} />
        <Box px={1}>
            <Link
            color="textSecondary"
            href="#"
            target="_blank"
            underline="hover"
            variant="body2"
            >
                About Us
            </Link>
        </Box>
      </Box>
    </Container>
  </Box>
);
