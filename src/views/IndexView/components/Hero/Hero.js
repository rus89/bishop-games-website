/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useEffect } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Typed from 'typed.js';

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

  return (
    //TODO: za full screen po visini je dodat props minHeight={'80vh'}
    // nisam siguran zasto 80 radi posao, a treba da bude 100 (kad se stavi 100 onda je previse)
    <Grid container spacing={4} minHeight={'80vh'}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="text.primary"
              sx={{
                fontWeight: 700,
              }}
            >
              Transform your {' '}
              <Typography
                component={'span'}
                variant={'inherit'}
                color={'primary'}
                ref={typedJSRef}
                sx={{
                  background: `linear-gradient(180deg, transparent 82%, ${alpha(
                    theme.palette.secondary.main,
                    0.3,
                  )} 0%)`,
                }}
              >
              </Typography>
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
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
              //TODO promeniti ovo da povlaci podatke iz nekog skladista a ne hard code
              href={'mailto:office@bishop.games'}
              target={'_blank'}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          height={1}
          width={1}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          data-aos={isMd ? 'fade-left' : 'fade-up'}
        >
          <Box height={1} width={1} maxWidth={500}>
            <Box
              component={'img'}
              //TODO: promeniti src
              src={
                'https://sanica.carrd.co/assets/images/gallery01/33a11a65_original.jpg'
              }
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
