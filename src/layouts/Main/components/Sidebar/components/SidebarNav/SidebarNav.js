import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NavItem from './components/NavItem';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { StaticImage } from 'gatsby-plugin-image';
import navigationLinks from 'data/navigation';

const SidebarNav = () => {
  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box display={'flex'} width={{ xs: 100, md: 120 }}>
          <AnchorLink to={'/#hero'} title={'Bishop Games'}>
            <StaticImage
              src="../../../../../../images/logo/logo.webp"
              alt='logo'
              width={48}
            />
          </AnchorLink>
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        {navigationLinks.map((item, index) =>
          <NavItem title={item.title} id={item.id} key={index} />
        )}
        <Box marginTop={1}>
          <AnchorLink to={'/#contact'} title={'Contact Us'} style={{ textDecoration: 'none' }}>
            <Button
              size={'large'}
              variant="contained"
              color="primary"
              fullWidth
            >
              Contact Us
            </Button>
          </AnchorLink>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {};

export default SidebarNav;
