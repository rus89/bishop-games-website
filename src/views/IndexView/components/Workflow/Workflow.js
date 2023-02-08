import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import Container from 'components/Container';

const steps = [
  {
    label: 'Ideation & Conceptualization',
    description: '- Collaborative effort between you and us at the start of game development process' +
      '- Vital for you to be involved in generating and evaluating game ideas' +
      '- Opportunity for you to share vision and provide input on game features' +
      '- High level game concept created to serve as roadmap for rest of development process' +
      '- Increased control for you over outcome of project by participating in this stage' +
      '- Concept ensures final product meets your expectations' +
      '- Investment well spent with peace of mind of being on the same page with us' +
      '- Seamless and enjoyable experience for you' +
      '- Involvement in ideation and conceptualization leads to a final product that you envision',
  },
  {
    label: 'Defining Requirements',
    description:
      '- Detailed understanding of your vision and requirements' +
      '- Identification of game features and functionality' +
      '- Prioritization of features and functionality based on importance and feasibility' +
      '- Development of a comprehensive game design document by us' +
      '- Clear definition of project scope and timeline' +
      '- Communication of project requirements to development team by us' +
      '- Regular review and update of project requirements by us' +
      '- Ensuring project stays on track and meets your expectations.',
  },
  {
    label: 'Planning & Design',
    description:
      '- Collaborative effort between you and us to create a detailed game plan' +
      '- Development of detailed game design documents by us' +
      '- Finalization of project scope, timeline and budget' +
      '- Creation of detailed production schedules and milestones' +
      '- Allocation of resources for development and testing' +
      '- Development of detailed game mechanics and systems' +
      '- Creation of detailed game asset lists and budgets' +
      '- Communication of project plan to development team by us' +
      '- Regular review and update of project plan by us.',
  },
  {
    label: 'Development',
    description:
      '- Implementation of game mechanics and systems by development team' +
      '- Creation of game assets by game artist' +
      '- Integration of game assets into the game' +
      '- Development of user interface and menu systems' +
      '- Regular progress updates and demonstrations to you' +
      '- Testing and debugging of the game' +
      '- Refining game play and fixing any issues' +
      '- Implementation of feedback from you and the development team' +
      '- Ensuring the project stays on track and meets timeline and budget.',
  },
  {
    label: 'Testing & Quality Assurance',
    description:
      '- Thorough testing of the game by QA team' +
      '- Identification and fixing of any bugs or issues' +
      '- Verification of game features and functionality' +
      '- Performance and compatibility testing' +
      '- User acceptance testing by you' +
      '- Regular progress updates and demonstrations to you' +
      '- Refinement of game play based on feedback from you and QA team' +
      '- Documentation of all bugs and issues' +
      '- Finalization of all game elements prior to release.',
  },
  {
    label: 'Release & Maintenance',
    description:
      '- Final preparations for game release by us' +
      '- Coordination with platform owners for game release' +
      '- Marketing and promotion of the game' +
      '- Monitoring of game performance and user feedback' +
      '- Maintenance and support of the game' +
      '- Regular updates and bug fixes' +
      '- Addition of new content and features based on user feedback and demand' +
      '- Communication with you regarding game performance and future plans' +
      '- Continuous improvement of the game experience for players.',
  },
];

const Workflow = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

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
            Our Workflow
          </Typography>
          <Typography variant="h6" align={'center'} color={'text.secondary'}>
            Streamline your success with our smooth and efficient workflow!
          </Typography>
        </Box>
      </Box>
      <Box width={1}
        component={Card}
        borderRadius={2}
      >
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((step, index) => (
            <Step
              key={step.label}
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: 0,
                width: '100%',
                '& .MuiButtonBase-root': {
                  position: 'relative',
                  bgcolor:
                    activeStep === index ? 'primary.main' : 'alternate.main',
                  color: activeStep === index ? 'text.primary' : 'common.white',
                  height: theme.spacing(6),
                  padding: theme.spacing(0, 3),
                  zIndex: 1,
                },
                '& .MuiStepLabel-label.Mui-active': {
                  color: theme.palette.common.white,
                },
                '& .MuiSvgIcon-root.Mui-active': {
                  color: theme.palette.common.white,
                  '& .MuiStepIcon-text': {
                    fill: theme.palette.primary.main,
                  },
                },
              }}
            >
              <React.Fragment>
                <StepButton onClick={handleStep(index)}>
                  {isMd ? step.label : ''}
                </StepButton>
                {index === steps.length - 1 ? null : (
                  <Box
                    sx={{
                      width: 0,
                      height: 0,
                      borderTop: `${theme.spacing(3)} solid transparent`,
                      borderBottom: `${theme.spacing(3)} solid transparent`,
                      borderLeft: `${theme.spacing(2)} solid ${activeStep === index
                        ? theme.palette.primary.main
                        : theme.palette.alternate.main
                      }`,
                      transform: `translateX(${theme.spacing(0)})`,
                      zIndex: 2,
                    }}
                  />
                )}
              </React.Fragment>
            </Step>
          ))}
        </Stepper>
        <div>
          <React.Fragment>
            <Box sx={{ mt: 2, mb: 1, p: 2 }} justifyContent={'center'} align={'center'}>
              <Grid container spacing={1}>
                {steps[activeStep].description.split('-').slice(1).map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <Box
                      component={ListItem}
                      disableGutters
                      width={'auto'}
                      padding={0}
                    >
                      <Box
                        component={ListItemAvatar}
                        minWidth={'auto !important'}
                        marginRight={2}
                      >
                        <Box
                          component={Avatar}
                          bgcolor={theme.palette.warning.light}
                          width={20}
                          height={20}
                        >
                          <svg
                            width={12}
                            height={12}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Box>
                      </Box>
                      <ListItemText primary={item} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
              {/* {steps[activeStep].description.split('-').slice(1).map((item, i) => (
                <ListItem disablePadding key={i}>
                  <ListItemText primary={'-' + item} />
                </ListItem>
              ))} */}
            </Box>
          </React.Fragment>
        </div>
      </Box>
    </Container>
  );
};

export default Workflow;
