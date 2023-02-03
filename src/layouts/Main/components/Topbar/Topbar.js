import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem } from './components';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
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
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src={'../../../../../images/logo/logo_v2.png'}
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <NavItem
            title={'Services'}
            id={'services'}
            items={services}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Workflow'}
            id={'workflow'}
            items={workflow}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Portfolio'}
            id={'portfolio'}
            items={portfolio}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Testimonials'}
            id={'testimonials'}
            items={testimonials}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Stats'}
            id={'stats'}
            items={stats}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Our Team'}
            id={'ourTeam'}
            items={ourTeam}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'FAQ'}
            id={'faq'}
            items={faq}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Blog'}
            id={'blog'}
            items={blog}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            //TODO: izvuci ovaj podatak sa 1 mesta
            href="mailto:office@bishop.games"
            size="large"
          >
            Contact Us
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
