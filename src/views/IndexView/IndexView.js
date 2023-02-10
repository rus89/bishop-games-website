import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import HeroImage from 'images/hero/hero.webp';
//TODO: proveriti ovo
import {
  Hero,
  Services,
  Workflow,
  Portfolio,
  Reviews,
  Stats,
  Team,
  Faq
} from './components';

const IndexView = () => {
  const theme = useTheme();

  return (
    <Main>
      <Box
        id={'hero'}
        loading="lazy"
        sx={{
          marginTop: 4,
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url("${HeroImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <Hero />
      </Box>

      {/* Services */}
      <Container
        id='services'
        paddingTop={'0 !important'} >
        <Services />
      </Container>

      {/* Portfolio */}
      <Container
        id='portfolio'
        maxWidth={1}
        paddingTop={'0 !important'}
        sx={{
          backgroundColor: theme.palette.alternate.main
        }}>
        <Portfolio />
      </Container>

      {/* Workflow */}
      <Container
        id='workflow'
        paddingTop={'0 !important'}>
        <Workflow />
      </Container>

      {/* Testimonials */}
      <Container
        id='testimonials'
        maxWidth={1}
        paddingTop={'0 !important'}
        sx={{
          backgroundColor: theme.palette.alternate.main
        }}>
        <Reviews />
      </Container>

      {/* Stats */}
      <Container
        id='stats'
        paddingTop={'0 !important'}>
        <Stats />
      </Container>

      {/* Our Team */}
      <Container
        id='ourTeam'
        maxWidth={1}
        paddingTop={'0 !important'}
        sx={{
          backgroundColor: theme.palette.alternate.main
        }}>
        <Team />
      </Container>

      {/* FAQ */}
      <Container
        id='faq'
        paddingTop={'0 !important'}>
        <Faq />
      </Container>

      {/* Box between FAQ and Footer */}
      <Box
        maxWidth={1}
        width={1}
        margin={'0 auto'}
        paddingX={2}
        paddingY={{ xs: 4, sm: 6, md: 8 }}
        sx={{
          backgroundImage: `linear-gradient(0deg, ${theme.palette.text.primary}, transparent)`,
        }}>
      </Box>
    </Main>
  );
};

export default IndexView;
