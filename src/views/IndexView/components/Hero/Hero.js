/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
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
    //TODO: za full screen po visini je dodat props minHeight={'80vh'}
    // nisam siguran zasto 80 radi posao, a treba da bude 100 (kad se stavi 100 onda je previse)
    <Box>
      <Grid container spacing={4}
        sx={{
          minHeight: '80vh',
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
