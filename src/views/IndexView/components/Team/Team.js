import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Container from 'components/Container';
import { useTheme } from '@mui/material/styles';

const mock = [
  {
    name: 'Anica Smiljković',
    title: 'Artist',
    avatar: '../../../../../images/team/Anica.jpeg',
  },
  {
    name: 'Milan Rusimov',
    title: 'Game Developer',
    avatar: '../../../../../images/team/Milan.jpg',
  }
];

const Team = () => {
  const theme = useTheme();

  return (
    <Container data-aos={'fade-up'}>
      <Box zIndex={2} position={'relative'}>
        <Box marginBottom={8}>
          <Box>
            <Box display={'flex'} justifyContent={'center'}>
              {[1, 2, 3, 4, 5].map((item) => (
                <Box key={item} color={theme.palette.secondary.main}>
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
              Our power
            </Typography>
          </Box>
        </Box>
        <Grid
          container
          spacing={2}
          align={'center'}
          alignItems={'center'}
          justifyContent="center"
        >
          {mock.map((item, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={i}
              data-aos={'fade-up'}
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
            >
              <Box
                component={Card}
                boxShadow={0}
                bgcolor={'transparent'}
                data-aos={'fade-up'}
                data-aos-delay={i * 100}>
                <Box
                  component={CardMedia}
                  borderRadius={2}
                  width={1}
                  height={1}
                  minHeight={320}
                  image={item.avatar}
                />
                <CardContent>
                  <ListItemText
                    primary={item.name}
                    secondary={item.title}
                    primaryTypographyProps={{ fontWeight: 700 }}
                  />
                  <Box marginTop={1}>
                    <IconButton
                      aria-label="facebook"
                      size={'small'}
                      color={'primary'}
                    >
                      <FacebookIcon />
                    </IconButton>
                    <IconButton
                      aria-label="twitter"
                      size={'small'}
                      color={'primary'}
                    >
                      <TwitterIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Team;
