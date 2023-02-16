/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useStaticQuery, graphql } from 'gatsby';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        description
        email
        siteUrl
        title
      }
    }
  }
  `);

  return (
    <Box>
      <Box marginBottom={2}>
        <Typography
          variant="h2"
          color="background.level2"
          sx={{
            fontWeight: 700,
          }}
        >
          Transform your {' '}
          <Typography
            component={'span'}
            variant={'inherit'}
            color={'primary.light'}
          >
            idea into a full-potential game.
          </Typography>
        </Typography>
      </Box>
      <Box marginBottom={3}>
        <Typography
          variant="h6"
          component="p"
          color="background.level2"
          sx={{ fontWeight: 400 }}
        >
          Get a stunning and fully functional game developed for your brand with our expert team.
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
      >
        <Button
          component={'a'}
          variant="contained"
          color="primary"
          size="large"
          fullWidth={isMd ? false : true}
          href={'mailto:' + data.site.siteMetadata.email}
          target={'_blank'}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
