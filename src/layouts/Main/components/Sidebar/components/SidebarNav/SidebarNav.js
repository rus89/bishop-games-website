import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';

const SidebarNav = ({ pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    services: services,
    workflow: workflow,
    portfolio: portfolio,
    testimonials: testimonials,
    stats: stats,
    ourTeam: ourTeam,
    faq: faq,
    blog: blog,
  } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="Bishop Games"
          width={{ xs: 100, md: 120 }}
        >
          {/* TODO: promeniti logo */}
          <Box
            component={'img'}
            src={
              mode === 'light'
                ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
                : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem title={'Services'} items={services} />
        </Box>
        <Box>
          <NavItem title={'Workflow'} items={workflow} />
        </Box>
        <Box>
          <NavItem title={'Portfolio'} items={portfolio} />
        </Box>
        <Box>
          <NavItem title={'Testimonials'} items={testimonials} />
        </Box>
        <Box>
          <NavItem title={'Stats'} items={stats} />
        </Box>
        <Box>
          <NavItem title={'Our Team'} items={ourTeam} />
        </Box>
        <Box>
          <NavItem title={'FAQ'} items={faq} />
        </Box>
        <Box>
          <NavItem title={'Blog'} items={blog} />
        </Box>
        <Box marginTop={1}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="blank"
            href="mailto:office@bishop.games"
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
