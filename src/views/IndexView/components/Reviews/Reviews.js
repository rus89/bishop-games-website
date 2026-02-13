/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import Container from 'components/Container';
import SectionHeader from 'components/SectionHeader';
import avatarCallum from 'images/reviews/callum-godfrey.jpg';
import avatarAleksandra from 'images/reviews/aleksandra-stankovic.png';
import avatarSerhiy from 'images/reviews/serhiy-kozachuk.jpg';

const mock = [
  {
    feedback:
      'We brought Anica into a small team on a project that had a very strongly defined art style and goals and she nearly instantly picked up the right tone, quality level and was highly productive from the very start. Her ability to adapt to our processes, structure and project meant that we lost almost no time at all onboarding her and she was very quickly producing exceptionally high quality assets that would could just plug into the game straight away. She communicates well, is highly professional and very flexible - all in all a huge boost to any team lucky to have her talents!',
    name: 'Callum Godfrey',
    title: 'Head of Casual Mobile Games at Kwalee',
    avatar: avatarCallum,
  },
  {
    feedback:
      'I\'ve known Milan for several years now, and I can honestly say that it\'s a real privilege to call him a friend. We first met when he came to the company where I was the team leader. He was a fresh and promising Unity developer at the time, and even though we never cooperated directly on a project I knew for sure that he was a talented professional. He worked closely as a consultant with the lead developer from my team, and helped him with several Unity projects. Even then, he exhibited traits that a good leader should possess. He is a true professional in his respective field, he has integrity and patience necessary for coping with the team leader duties. I was thrilled to hear that he was offered a well deserved position in the company, and not at all surprised, since he is a logical choice for such a responsible job. Milan is one of the most organized and disciplined people I know, and yet manages to retain a cheerful spirit and a playful disposition. He is a necessary ingredient for a successful team and therefore successful company. In my humble opinion, anyone who hires him is a lucky person. ',
    name: 'Aleksandra Stankovic',
    title: 'ASO Consultant at Phiture',
    avatar: avatarAleksandra,
  },
  {
    feedback:
      'Anica is a very skilled and hard-working illustrator. She impressed us with her vision, skills and communication. Looking forward to work on our next concepts together, thanks!',
    name: 'Serhiy Kozachuk',
    title: 'CEO at Virede Games',
    avatar: avatarSerhiy,
  },
];

const Reviews = () => {
  const theme = useTheme();

  return (
    <Container data-aos={'fade-up'} data-aos-delay={500}>
      <SectionHeader
        title="Our customers are our biggest fans."
        subtitle="We don't like to brag, but we don't mind letting our customers do it for us."
      />
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              width={1}
              height={1}
              component={Card}
              display={'flex'}
              flexDirection={'column'}
              boxShadow={i === 1 ? 4 : 0}
              bgcolor={i === 1 ? 'primary.main' : 'none'}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  color={
                    i === 1 ? theme.palette.common.white : 'text.secondary'
                  }
                >
                  {item.feedback}
                </Typography>
              </CardContent>
              <Box flexGrow={1} />
              <CardActions sx={{ paddingBottom: 2 }}>
                <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                  <ListItemAvatar>
                    <Avatar
                      src={item.avatar}
                      alt={item.name}
                      sx={{
                        width: '48px',
                        height: '48px',
                      }}
                      imgProps={{
                        loading: 'lazy',
                      }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ margin: 0 }}
                    primary={item.name}
                    secondary={item.title}
                    primaryTypographyProps={{
                      color:
                        i === 1 ? theme.palette.common.white : 'text.primary',
                    }}
                    secondaryTypographyProps={{
                      color:
                        i === 1 ? theme.palette.common.white : 'text.secondary',
                    }}
                  />
                </ListItem>
              </CardActions>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Reviews;
