import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from 'components/Container';

const faqs = [
  {
    question: 'What services does your Unity game development studio offer?',
    answer:
      'We provide Unity game development services that cover all aspects of game development, from concept to deployment. Our team is experienced in creating games that are visually stunning and have engaging gameplay that keeps players coming back for more.',
  },
  {
    question:
      'Can you provide examples of previous projects you have worked on?',
    answer:
      'Yes, we have worked on a variety of projects ranging from small hyper-casual games to larger, more complex games. Please feel free to take a look at our portfolio or references from our previous clients.',
  },
  {
    question: 'What is your process for game development projects?',
    answer:
      'Our process typically involves an initial consultation, project planning, development, testing and deployment. Our team works closely with clients to ensure that the project is delivered on time and within budget.',
  },
  {
    question: 'How do you manage communication and collaboration with clients?',
    answer:
      'We use project management tools as Notion and regular check-ins to ensure effective communication and collaboration with clients. Our team is also available for virtual meetings and updates as needed.',
  },
  {
    question: 'Can you handle projects with tight deadlines?',
    answer:
      'Yes, we have a track record of delivering projects on time and can handle tight deadlines by utilizing our team of experienced game developers.',
  },
  {
    question: 'What is your pricing structure for game development projects?',
    answer:
      'Our pricing structure is based on the scope and complexity of the project. We offer competitive rates and are flexible with our pricing to meet the needs of our clients. Our mission is to create a great value.',
  },
  {
    question: 'How do you ensure the quality of your work?',
    answer:
      'We have a rigorous quality control process in place, which includes regular testing and quality assurance checks throughout the development process. Our team is also dedicated to delivering high-quality work and ensuring client satisfaction.',
  },
  {
    question: 'Can you provide after-sales support for the games you develop?',
    answer:
      'Yes, we offer after-sales support and maintenance services for the games we develop. Our team is available for any updates or modifications that may be required post-deployment.',
  },
  {
    question: 'How do you handle intellectual property and confidentiality?',
    answer:
      'We take intellectual property and confidentiality very seriously and have strict policies in place to ensure that client information is kept confidential.',
  },
  {
    question:
      'Can you provide references or case studies from previous clients?',
    answer:
      'Yes, we are happy to provide references or case studies from previous clients upon request. Our goal is to build long-term relationships with our clients and deliver high-quality work that exceeds their expectations.',
  },
];

const FaqGroupItem = ({ title, items }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={2}>
        <Typography fontWeight={700} variant={'h5'}>
          {title}
        </Typography>
      </Box>
      <Box>
        {items.map((item, i) => (
          <Box
            component={Accordion}
            key={i}
            padding={1}
            marginBottom={i === item.length - 1 ? 0 : 2}
            borderRadius={`${theme.spacing(1)} !important`}
            sx={{
              '&::before': {
                display: 'none',
              },
            }}
          >
            <Box
              component={AccordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls={item.question}
              id={`panel1a-header--${i}`}
            >
              <Typography fontWeight={600}>{item.question}</Typography>
            </Box>
            <AccordionDetails>
              <Typography color="text.secondary">{item.answer}</Typography>
            </AccordionDetails>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

FaqGroupItem.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array.isRequired,
};

const Faq = () => {
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
            FAQ
          </Typography>
          <Typography variant="body1" fontSize={'1.25rem'} fontWeight={500} fontStyle={'italic'} align={'center'} color={'text.secondary'}>
            You ask, we answer - it&apos;s like having a cheat sheet for game
            development!
          </Typography>
        </Box>
        <Box marginBottom={6} data-aos={'fade-up'} data-aos-delay={100}>
          <FaqGroupItem items={faqs} />
        </Box>
      </Box>
    </Container>
  );
};

export default Faq;
