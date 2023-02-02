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
  return (
    <Container data-aos={'fade-up'}>
      <Box zIndex={2} position={'relative'}>
        <Box marginBottom={8}>
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
