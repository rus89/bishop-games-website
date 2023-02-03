import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

import Container from 'components/Container';

const steps = [
  {
    label: 'Ideation & Conceptualization',
    description: 'At the beginning of the game development process, it\'s important for you, the client, to be involved in generating and evaluating game ideas. This is your opportunity to share your vision and provide input on what you would like to see in the game. During this step, you\'ll work with the development team to create a high-level concept for the game. This concept will provide a roadmap for the rest of the development process and ensure that the final product meets your expectations. By taking an active role in the ideation and conceptualization stage, you\'ll have a greater level of control over the outcome of the project and can help ensure its success.',
  },
  {
    label: 'Defining Requirements',
    description:
      'The second step of the game development process is all about clarifying your goals, needs, and expectations for the project. This step is critical in ensuring that everyone involved has a shared understanding of what you want to achieve with the project. By defining your requirements at the outset, you\'ll help guide the development team and ensure that the project stays on track. This step is an opportunity for you to communicate exactly what you\'re looking for, and for the development team to ask questions and gather any additional information they need. By working together in this step, you\'ll help ensure that the final product meets your expectations and delivers the results you\'re looking for.',
  },
  {
    label: 'Planning & Design',
    description: 'The third step in the game development process is all about putting together the game design and outlining the development plan. During this step, the development team will work with you to determine the budget, timeline, and resources needed to bring your game to life. You\'ll play an important role in this step by providing input on your priorities and helping to set the parameters for the project. By working together to outline the development plan, you\'ll help ensure that the project stays on track and that all stakeholders have a shared understanding of what is expected and when. This step is critical in laying the foundation for a successful project and setting the stage for the rest of the development process.',
  },
  {
    label: 'Development',
    description: 'The next step in the game development process is where the magic really happens: the game is brought to life! During this phase, the development team will be using various tools and technologies such as Unity, C#, and others to build your game. This step is critical in delivering the final product, and the development team will be working hard to ensure that everything is working as it should. As the client, you\'ll play an important role in this phase by providing feedback and offering guidance as needed. The development team will also be performing thorough testing and debugging to ensure that the game is functioning correctly. By working together during this phase, you\'ll help ensure that the final product meets your expectations and delivers the results you\'re looking for.',
  },
  {
    label: 'Testing & Quality Assurance',
    description: 'The penultimate step in the game development process is all about making sure the game is ready for prime time. This step involves thoroughly testing the game to identify and fix any bugs or issues that could impact the player experience. As the client, you\'ll play a critical role in this step by providing feedback and working with the development team to make sure everything is working as it should. The development team will be using various testing tools and techniques to simulate real-world use cases and uncover any issues that need to be addressed. By working together during this step, you\'ll help ensure that the final product is as polished and bug-free as possible, which will help increase player satisfaction and encourage positive reviews and ratings. This step is critical in preparing the game for release and setting the stage for success.',
  },
  {
    label: 'Release & Maintenance',
    description: 'Finally, the moment you\'ve been waiting for! The last step in the game development process is the release of the game to the market. This is the point where you, as the client, can see the results of all your hard work and investment come to life. You\'ll finally be able to share the game with your audience and see how they respond. Of course, the work doesn\'t end there. Ongoing maintenance and updates are necessary to keep the game running smoothly and address any issues that arise. As the client, you\'ll continue to play a key role in this process by providing feedback and working with the development team to prioritize updates and improvements. With your ongoing support and collaboration, you can help ensure that the game remains a top-performing, engaging experience for your players.',
  },
];

const Workflow = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Container data-aos={'fade-up'}>
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
            Our Workflow
          </Typography>
        </Box>
      </Box>
      <Box width={1}
        component={Card}
        padding={8}
        borderRadius={2}
      >
        <Stepper activeStep={activeStep}>
          {steps.map((step, index) => (
            <Step
              key={step.label}
              completed={completed[index]}
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
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button
                  color="primary"
                  variant={'outlined'}
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Box sx={{ mt: 2, mb: 1, p: 2 }}>
                <Typography>{steps[activeStep].description}</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color="primary"
                  variant={'outlined'}
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button
                  variant={'contained'}
                  onClick={handleNext}
                  sx={{ mr: 1 }}
                >
                  Next
                </Button>
              </Box>
            </React.Fragment>
          )}
        </div>
      </Box>
    </Container>
  );
};

export default Workflow;
