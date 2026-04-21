// ABOUTME: Navigation link list rendered inside the mobile sidebar drawer.
// ABOUTME: Consumes centralized navigationLinks data shared with Topbar and Footer.
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NavItem from './components/NavItem';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { StaticImage } from 'gatsby-plugin-image';
import navigationLinks from 'data/navigation';

const focusTarget = (id) => {
  const target = document.getElementById(id);
  if (!target) return;
  if (!target.hasAttribute('tabindex')) {
    target.setAttribute('tabindex', '-1');
  }
  target.focus({ preventScroll: true });
};

const SidebarNav = ({ onClose }) => {
  const handleNavigate = (id) => {
    onClose();
    focusTarget(id);
  };

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box display={'flex'} width={{ xs: 100, md: 120 }}>
          <AnchorLink
            to={'/#hero'}
            title={'Bishop Games'}
            onAnchorLinkClick={() => handleNavigate('hero')}
          >
            <StaticImage
              src="../../../../../../images/logo/logo.webp"
              alt="logo"
              width={48}
            />
          </AnchorLink>
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        {navigationLinks.map((item, index) => (
          <NavItem
            title={item.title}
            id={item.id}
            key={index}
            onNavigate={() => handleNavigate(item.id)}
          />
        ))}
        <Box marginTop={1}>
          <AnchorLink
            to={'/#contact'}
            title={'Contact Us'}
            style={{ textDecoration: 'none' }}
            onAnchorLinkClick={() => handleNavigate('contact')}
          >
            <Button
              component="span"
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

SidebarNav.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SidebarNav;
