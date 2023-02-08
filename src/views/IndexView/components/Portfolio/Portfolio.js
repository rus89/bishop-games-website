import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Container from 'components/Container';
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
  {
    image: Portfolio1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    title: 'Lorem ipsum dolor sit amet,',
  },
  {
    image: Portfolio2,
    description: 'Excepteur sint occaecat cupidatat non proident',
    title: 'Consectetur adipiscing elit',
  },
  {
    image: Portfolio3,
    description: 'Eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    title: 'Labore et dolore magna aliqua',
  },
  {
    image: Portfolio4,
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    title: 'Eiusmod tempor incididunt',
  }
];
const mockMiddleGrid = [
  {
    image: Portfolio5,
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus',
    title: 'Sed ut perspiciatis',
  },
  {
    image: Portfolio6,
    description:
      'Qui blanditiis praesentium voluptatum deleniti atque corrupti',
    title: 'Unde omnis iste natus',
  },
  {
    image: Portfolio7,
    description:
      'On the other hand, we denounce with righteous indignation and dislike',
    title: 'Sit voluptatem',
  },
  {
    image: Portfolio8,
    description: 'Quos dolores et quas molestias excepturi',
    title: 'Accusantium doloremque',
  }
];
const mockRightGrid = [
  {
    image: Portfolio9,
    description: 'Et harum quidem rerum facilis est et expedita distinctio',
    title: 'Totam rem aperiam',
  },
  {
    image: Portfolio10,
    description: 'Nam libero tempore, cum soluta nobis est eligendi optio',
    title: 'Uae ab illo inventore',
  },
  {
    image: Portfolio11,
    description: 'Itaque earum rerum hic tenetur a sapiente delectus',
    title: 'Beatae vitae dicta',
  },
  {
    image: Portfolio12,
    description:
      'On the other hand, we denounce with righteous indignation and dislike',
    title: 'Nemo enim ipsam',
  },
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
                '& .portfolio-massonry__main-item': {
                  bottom: 0,
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
              alt={item.description}
              maxHeight={{ xs: 400, sm: 600, md: 1 }}
              sx={{
                transition: 'transform .7s ease !important',
                transform: 'scale(1.0)',
                objectFit: 'cover',
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              }}
            />
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
  const theme = useTheme();

  return (
    <Container data-aos={'fade-up'}>
      <Box marginBottom={8}>
        <Box>
          <Box display={'flex'} justifyContent={'center'}>
            {[1, 2, 3, 4, 5].map((item) => (
              <Box key={item} color={theme.palette.warning.light}>
                <svg
                  width={18}
                  height={18}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </Box>
            ))}
          </Box>
          <Typography
            variant="h2"
            color="text.primary"
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Our Portfolio
          </Typography>
          <Typography variant="h6" align={'center'} color={'text.secondary'}>
            Discover our knockout portfolio that packs a punch!
          </Typography>
        </Box>
      </Box>
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
