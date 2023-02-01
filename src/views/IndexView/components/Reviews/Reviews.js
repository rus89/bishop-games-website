/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
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
    feedback:
      'Brilliant job! Anica is an excellent illustrator and very easy to communicate with, she took all directions on board',
    name: 'senoritajoellit',
    title: 'Customer',
    avatar: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b2faa14e02e2479c5052c38b04fed940-1588352182470/e5b5a999-1afe-4062-963c-2a4159cfe513.jpg',
  },
  {
    feedback:
      'Anica was so kind and very professional. I love the work that she has done. She took my character description and brought it to life',
    name: 'jeffreygrech',
    title: 'Customer',
    avatar: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/d142664d4558f4fe520cbd67fb4a6597-1600574416499/382a9c29-40df-4980-8e77-55ad2375861d.jpg',
  },
  {
    feedback:
      'She did it again! Excellent job! She understood the idea right away and got it exactly the way I wanted it to. Placing a new order soon!',
    name: 'ksiitari',
    title: 'Customer',
    avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
  },
  {
    feedback:
      'Anica was a pleasure to work with and more than skilled for the task. She is thoughtful, easy to work with, and required minimal supervision. We would definitely rehire her for any future work. Well done, Anica. Thank you for a great experience!',
    name: 'Clara Bertoletti',
    title: 'Customer',
    avatar: 'https://assets.maccarianagency.com/avatars/img4.jpg',
  },
  {
    feedback:
      'Working with Anica has been a pleasure for me. Along with her undeniable talent, Anica has been an absolute joy to corporate with. She is definitely one of the most talented freelancers I have worked with - creative, responsible, communicative, and a great executor. Her final assets are always polished and clean, and she took feedback and direction well. If I had the chance to work with her again in the future, I would definitely hire her!',
    name: 'Jhon Anderson',
    title: 'Customer',
    avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
  },
  {
    feedback:
      'Anica is definitely one of the top talent on Upwork when it comes to illustrations and art, I was really lucky to find her for my project. She excelled in all given tasks, surprised me with her proactivity in making my ideas better with her expert advices. Everything was within given timeframes, communication though different stages of the process so changes were made on the fly which made everything more fluent, more efficient and painless for everyone. Will definitely have her as one of the main candidates for my future projects.',
    name: 'Chary Smith',
    title: 'Customer',
    avatar: 'https://assets.maccarianagency.com/avatars/img6.jpg',
  },
];

const Reviews = () => {
  const theme = useTheme();

  return (
    <Container data-aos={'fade-up'}>
      <Box>
        <Box marginBottom={4}>
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
            Our customers are our biggest fans.
          </Typography>
          <Typography variant="h6" align={'center'} color={'text.secondary'}>
            We don't like to brag, but we don't mind letting our customers do it
            for us.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {mock.map((item, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={i}
              sx={{
                border: 0,
                [theme.breakpoints.up('md')]: {
                  borderRight: `1px solid ${theme.palette.alternate.dark}`,
                  '&:nth-of-type(2n)': {
                    borderRight: `1px solid ${theme.palette.alternate.dark}`,
                  },
                  '&:nth-of-type(-n+4)': {
                    borderBottom: 0,
                  },
                  '&:nth-of-type(3n)': {
                    borderRight: 0,
                  },
                  '&:nth-of-type(-n+3)': {
                    borderBottom: `1px solid ${theme.palette.alternate.dark}`,
                  },
                },
              }}
            >
              <Box p={2}>
                <Box marginBottom={2}>
                  <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                    <ListItemAvatar>
                      <Avatar src={item.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      sx={{ margin: 0 }}
                      primary={item.name}
                      secondary={item.title}
                    />
                  </ListItem>
                </Box>
                <Typography color="text.secondary">{item.feedback}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Reviews;
