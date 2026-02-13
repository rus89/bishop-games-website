import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { NavItem } from './components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { StaticImage } from 'gatsby-plugin-image';
import navigationLinks from 'data/navigation';

const Topbar = ({ onSidebarOpen }) => {
  const theme = useTheme();

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box display={'flex'} width={{ xs: 100, md: 120 }}>
        <AnchorLink to={'/#hero'} title={'Bishop Games'}>
          <StaticImage
            src='../../../../images/logo/logo.webp'
            alt='logo'
            loading='eager'
            width={48}
          />
        </AnchorLink>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        {navigationLinks.map((item, index) =>
          <NavItem title={item.title} id={item.id} key={index} />
        )}
        <Box marginLeft={4}>
          <AnchorLink to={'/#contact'} title={'Contact Us'} style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
            >
              Contact Us
            </Button>
          </AnchorLink>
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
};

export default Topbar;
