import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import Container from 'components/Container';
import SectionHeader from 'components/SectionHeader';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Anica from 'images/team/Anica.webp';
import Milan from 'images/team/Milan.webp';

const mock = [
  {
    name: 'Anica Smiljković',
    title: 'Artist',
    avatar: Anica,
    linkedin: 'https://www.linkedin.com/in/anica-smiljkovic/',
    facebook: 'https://www.facebook.com/anica.smiljkovic.7',
    instagram: 'https://www.instagram.com/anicaa_bishop/',
  },
  {
    name: 'Milan Rusimov',
    title: 'Game Developer',
    avatar: Milan,
    linkedin: 'https://www.linkedin.com/in/rusimovmilan/',
    facebook: 'https://www.facebook.com/milan.rusimov',
    instagram: 'https://www.instagram.com/rus89__/',
  },
];

const Team = () => {
  return (
    <Container data-aos={'fade-up'}>
      <Box zIndex={2} position={'relative'}>
        <SectionHeader
          title="Team"
          subtitle="We may be small, but our team packs a punch with their skills and dedication."
        />
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
              <Box component={Card} boxShadow={0} bgcolor={'transparent'}>
                <Box
                  component={'img'}
                  borderRadius={2}
                  width={1}
                  height={1}
                  src={item.avatar}
                  loading="lazy"
                  alt={item.name}
                />
                <CardContent>
                  <ListItemText
                    primary={item.name}
                    secondary={item.title}
                    primaryTypographyProps={{ fontWeight: 700 }}
                  />
                  <Box marginTop={1}>
                    <a href={item.linkedin} target="_blank" rel="noreferrer">
                      <IconButton
                        aria-label="linkedin"
                        size={'small'}
                        color={'primary'}
                      >
                        <LinkedInIcon />
                      </IconButton>
                    </a>
                    <a href={item.facebook} target="_blank" rel="noreferrer">
                      <IconButton
                        aria-label="facebook"
                        size={'small'}
                        color={'primary'}
                      >
                        <FacebookIcon />
                      </IconButton>
                    </a>
                    <a href={item.instagram} target="_blank" rel="noreferrer">
                      <IconButton
                        aria-label="instagram"
                        size={'small'}
                        color={'primary'}
                      >
                        <InstagramIcon />
                      </IconButton>
                    </a>
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
