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

const mock = [
  {
    feedback:
      'We brought Anica into a small team on a project that had a very strongly defined art style and goals and she nearly instantly picked up the right tone, quality level and was highly productive from the very start. Her ability to adapt to our processes, structure and project meant that we lost almost no time at all onboarding her and she was very quickly producing exceptionally high quality assets that would could just plug into the game straight away. She communicates well, is highly professional and very flexible - all in all a huge boost to any team lucky to have her talents!',
    name: 'Callum Godfrey',
    title: 'Head of Casual Mobile Games at Kwalee',
    avatar: 'https://media.licdn.com/dms/image/C5603AQHJSEbt13Yy1Q/profile-displayphoto-shrink_800_800/0/1652286766669?e=1680739200&v=beta&t=PpW88MJJvmSz0v83RRyJaXQZUW01JwN76XLCPf3wl94',
  },
  {
    feedback: 'I\'ve known Milan for several years now, and I can honestly say that it\'s a real privilege to call him a friend. We first met when he came to the company where I was the team leader. He was a fresh and promising Unity developer at the time, and even though we never cooperated directly on a project I knew for sure that he was a talented professional. He worked closely as a consultant with the lead developer from my team, and helped him with several Unity projects. Even then, he exhibited traits that a good leader should possess. He is a true professional in his respective field, he has integrity and patience necessary for coping with the team leader duties. I was thrilled to hear that he was offered a well deserved position in the company, and not at all surprised, since he is a logical choice for such a responsible job. Milan is one of the most organized and disciplined people I know, and yet manages to retain a cheerful spirit and a playful disposition. He is a necessary ingredient for a successful team and therefore successful company. In my humble opinion, anyone who hires him is a lucky person. ',
    name: 'Aleksandra Stankovic',
    title: 'ASO Consultant at Phiture',
    avatar: 'https://media.licdn.com/dms/image/C4E03AQF4ZXwtPBkrdQ/profile-displayphoto-shrink_100_100/0/1533649910197?e=1681344000&v=beta&t=JAqYgluzt-n07O-wDILn0V5RI3j5VbEXw-3BxgQXcVY',
  },
  {
    feedback:
      'Anica is a very skilled and hard-working illustrator. She impressed us with her vision, skills and communication. Looking forward to work on our next concepts together, thanks!',
    name: 'Serhiy Kozachuk',
    title: 'CEO at Virede Games',
    avatar: 'https://www.upwork.com/profile-portraits/c1KYSjDeHkX_LrgJE4SIILKqwEGPMGmda05x6AhwheEk0SbNbLdcziUsOygc9jQ3BZ',
  },
];

const Reviews = () => {
  const theme = useTheme();

  return (
    <Container
      data-aos={'fade-up'}
      data-aos-delay={500}
    >
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
            Our customers are our biggest fans.
          </Typography>
          <Typography variant="h6" align={'center'} color={'text.secondary'}>
            We don't like to brag, but we don't mind letting our customers do it
            for us.
          </Typography>
        </Box>
      </Box>
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
                      loading='lazy'/>
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
                        i === 1
                          ? theme.palette.common.white
                          : 'text.secondary',
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
