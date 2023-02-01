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
  Team
} from './components';

const IndexView = () => {
  const theme = useTheme();

  return (
    <Main>
      {/* Hero */}
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
          marginTop: -13,
          paddingTop: 13,
        }}
      >
        <Container >
          <Hero />
        </Container>
        {/* <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: '100%',
            marginBottom: theme.spacing(-1),
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box> */}
      </Box>

      {/* Services */}
      <Container paddingTop={'0 !important'}>
        <Services />
      </Container>
      {/* <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          width: '100%',
          marginBottom: theme.spacing(-1),
        }}
      >
        <path
          fill={theme.palette.alternate.main}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box> */}

      {/* workflow */}
      {/* TODO: videti zasto se ovaj container ne poklapa sa prethodnim u services */}
      <Container maxWidth={1} paddingTop={'0 !important'}
        sx={{
          backgroundColor: theme.palette.alternate.main
        }}>
        {/* NOTE: ideja za prikaz https://thefront.maccarianagency.com/cloud-hosting */}
        <Workflow />
      </Container>
      {/* TODO: ovaj kod ispod se ponavlja neprestano */}
      {/* <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          width: '100%',
          marginBottom: theme.spacing(-1),
        }}
      >
        <path
          fill={theme.palette.background.paper}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box> */}

      {/* Portfolio */}
      <Container paddingTop={'0 !important'}>
        {/* NOTE: ideje za prikaz
        https://thefront.maccarianagency.com/home
        https://thefront.maccarianagency.com/rental
         */}
        <Portfolio />
      </Container>
      {/* <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          width: '100%',
          marginBottom: theme.spacing(-1),
        }}
      >
        <path
          fill={theme.palette.alternate.main}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box> */}

      {/* Testimonials */}
      {/* NOTE: Ideja
      https://thefront.maccarianagency.com/e-learning
      https://thefront.maccarianagency.com/service
      https://thefront.maccarianagency.com/web-basic
      https://thefront.maccarianagency.com/coworking
       */}
      <Container maxWidth={1} paddingTop={'0 !important'}
        sx={{
          backgroundColor: theme.palette.alternate.main
        }}>
        <Reviews />
      </Container>

      {/* Stats */}
      {/* NOTE: Ideja
      https://thefront.maccarianagency.com/e-learning
      https://thefront.maccarianagency.com/job-listing
       */}
      <Container paddingTop={'0 !important'}>
        <Stats />
      </Container>

      {/* Our Team */}
      {/* NOTE: ideja
      https://thefront.maccarianagency.com/startup
      https://thefront.maccarianagency.com/desktop-app
      https://thefront.maccarianagency.com/expo
      https://thefront.maccarianagency.com/service
       */}
      <Container maxWidth={1} paddingTop={'0 !important'}
        sx={{
          backgroundColor: theme.palette.alternate.main
        }}>
        <Team />
      </Container>

      {/* FAQ */}
      {/* NOTE: Ideja
      
       */}

    </Main>
  );
};

export default IndexView;
