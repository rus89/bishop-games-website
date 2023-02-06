import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
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
        loading="lazy"
        sx={{
          marginTop: 4,
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundImage: 'url("../../../../../images/hero/hero.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        {/* <Container > */}
        <Hero />
        {/* </Container> */}
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
        paddingTop={'0 !important'}
        sx={{
          backgroundColor: theme.palette.alternate.main
        }}>
        <Portfolio />
      </Container>

      {/* Workflow */}
      <Container
        id='workflow'
        maxWidth={1}
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

    </Main>
  );
};

export default IndexView;
