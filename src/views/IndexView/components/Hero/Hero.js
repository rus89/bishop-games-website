/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useEffect } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Typed from 'typed.js';
import { useStaticQuery, graphql } from 'gatsby';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const typedJSRef = useRef(null);

  // Setting up typedJS
  useEffect(() => {
    const typedJS = new Typed(typedJSRef.current, {
      strings: ['idea into a full-potential game.', 'vision into a full-service game.', 'concept into a top-performing game.', 'brand from unknown to world-class with a custom game.', 'concept into a stunning game reality.'],
      typeSpeed: 40,
      backSpeed: 40,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: false,
    });

    return () => typedJS.destroy();
  }, []);

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
    //TODO: za full screen po visini je dodat props minHeight={'80vh'}
    // nisam siguran zasto 80 radi posao, a treba da bude 100 (kad se stavi 100 onda je previse)
    <Box>
      <Grid container spacing={4}
        sx={{
          minHeight: '100vh',
          height: '100%',
        }}>
        <Grid
          container
          alignItems={'center'}
          xs={12}
          md={6}
          sx={{
            backgroundImage: `linear-gradient(90deg, ${theme.palette.background.level1}, transparent)`,
            padding: 15,
          }}>
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
                  color={'text.ternary'}
                  ref={typedJSRef}
                >
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
