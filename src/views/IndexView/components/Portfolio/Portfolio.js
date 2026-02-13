import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Container from 'components/Container';
import SectionHeader from 'components/SectionHeader';
import Portfolio1 from 'images/portfolio/1.webp';
import Portfolio2 from 'images/portfolio/2.webp';
import Portfolio3 from 'images/portfolio/3.webp';
import Portfolio4 from 'images/portfolio/4.webp';
import Portfolio5 from 'images/portfolio/5.webp';
import Portfolio6 from 'images/portfolio/6.webp';
import Portfolio7 from 'images/portfolio/7.webp';
import Portfolio8 from 'images/portfolio/8.webp';
import Portfolio9 from 'images/portfolio/9.webp';
import Portfolio10 from 'images/portfolio/10.webp';
import Portfolio11 from 'images/portfolio/11.webp';
import Portfolio12 from 'images/portfolio/12.webp';

const mockLeftGrid = [
  { image: Portfolio1, title: 'Project Alpha' },
  { image: Portfolio2, title: 'Cosmic Runner' },
  { image: Portfolio3, title: 'Dungeon Quest' },
  { image: Portfolio4, title: 'Sky Pirates' },
];
const mockMiddleGrid = [
  { image: Portfolio5, title: 'Neon Strike' },
  { image: Portfolio6, title: 'Puzzle Kingdom' },
  { image: Portfolio7, title: 'Battle Arena' },
  { image: Portfolio8, title: 'Shadow Lands' },
];
const mockRightGrid = [
  { image: Portfolio9, title: 'Rocket Dash' },
  { image: Portfolio10, title: 'Crystal Maze' },
  { image: Portfolio11, title: 'Pixel Warriors' },
  { image: Portfolio12, title: 'Ocean Voyage' },
];

const Column = ({ data }) => {
  const theme = useTheme();

  return (
    <Box>
      {data.map((item, i) => (
        <Box
          data-aos={'fade-up'}
          data-aos-delay={i * 100}
          key={i}
          sx={{
            marginBottom: { xs: 2, sm: 3 },
            '&:last-child': { marginBottom: 0 },
          }}
        >
          <Box
            boxShadow={1}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 2,
              '&:hover': {
                '& img': {
                  transform: 'scale(1.2)',
                },
                '& .portfolio-overlay': {
                  opacity: 1,
                },
              },
            }}
          >
            <Box
              component={'img'}
              loading="lazy"
              height={1}
              width={1}
              src={item.image}
              alt={item.title}
              maxHeight={{ xs: 400, sm: 600, md: 1 }}
              sx={{
                transition: 'transform .7s ease !important',
                transform: 'scale(1.0)',
                objectFit: 'cover',
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              }}
            />
            <Box
              className="portfolio-overlay"
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                padding: 2,
                opacity: 0,
                transition: 'opacity 0.3s ease',
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: 'common.white',
                  fontWeight: 600,
                }}
              >
                {item.title}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

Column.propTypes = {
  data: PropTypes.array.isRequired,
};

const Portfolio = () => {
  return (
    <Container data-aos={'fade-up'}>
      <SectionHeader
        title="Our Portfolio"
        subtitle="Discover our knockout portfolio that packs a punch!"
      />
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Column data={mockLeftGrid} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Column data={mockMiddleGrid} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Column data={mockRightGrid} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Portfolio;
