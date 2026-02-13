import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { StaticImage } from 'gatsby-plugin-image';
import {
  Hero,
  Services,
  Workflow,
  Portfolio,
  Reviews,
  Stats,
  Team,
  Faq,
  Contact,
} from './components';

const IndexView = () => {
  const theme = useTheme();

  return (
    <Main>
      <Box
        id={'hero'}
        minHeight={'80vh'}
        sx={{
          position: 'relative',
        }}
      >
        <StaticImage
          src="../../images/hero/hero.webp"
          alt="hero image"
          loading="eager"
          objectFit="cover"
          style={{
            width: '100%',
            minHeight: '80vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        />
        <Box
          padding={{ xs: '2rem', sm: '4rem', md: '8rem' }}
          maxWidth={{ xs: 1, lg: '50%' }}
          sx={{
            position: 'absolute',
            top: '0%',
            height: '100%',
            backgroundImage: `linear-gradient(90deg, ${theme.palette.background.level1}, transparent)`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'baseline',
          }}
        >
          <Hero />
        </Box>
      </Box>

      {/* Services */}
      <Container id="services" paddingTop={'0 !important'}>
        <Services />
      </Container>

      {/* Portfolio */}
      <Container
        id="portfolio"
        maxWidth={1}
        paddingTop={'0 !important'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Portfolio />
      </Container>

      {/* Workflow */}
      <Container id="workflow" paddingTop={'0 !important'}>
        <Workflow />
      </Container>

      {/* Testimonials */}
      <Container
        id="testimonials"
        maxWidth={1}
        paddingTop={'0 !important'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Reviews />
      </Container>

      {/* Stats */}
      <Container id="stats" paddingTop={'0 !important'}>
        <Stats />
      </Container>

      {/* Our Team */}
      <Container
        id="team"
        maxWidth={1}
        paddingTop={'0 !important'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Team />
      </Container>

      {/* FAQ */}
      <Container id="faq" paddingTop={'0 !important'}>
        <Faq />
      </Container>

      {/* Contact */}
      <Container
        id="contact"
        maxWidth={1}
        paddingTop={'0 !important'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Contact />
      </Container>

      {/* Box between Contact and Footer */}
      <Box
        maxWidth={1}
        width={1}
        margin={'0 auto'}
        paddingX={2}
        paddingY={{ xs: 4, sm: 6, md: 8 }}
        sx={{
          backgroundImage: `linear-gradient(0deg, ${theme.palette.text.primary}, transparent)`,
        }}
      ></Box>
    </Main>
  );
};

export default IndexView;
