import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { StaticImage } from 'gatsby-plugin-image';
import { NavItem } from './components';
import { graphql, useStaticQuery } from 'gatsby';

const Topbar = ({ onSidebarOpen }) => {
  const theme = useTheme();

  const data = useStaticQuery(graphql`
query {
  site {
    siteMetadata {
      description
      email
      siteUrl
      title
    }
  }
}
`);

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
        title="Bishop Games"
        width={{ xs: 100, md: 120 }}
      >
        <StaticImage
          src='../../../../images/logo/logo_v2.png'
          alt='logo image'
          style={{
            height: '40%',
            width: '40%',
          }}
        />
      </Box>
      {/* //TODO: ovo treba napraviti dinamicki mozda da se itemi i id povlace iz nekog fajla kako se kod ne bi menjao svaki put kada se doda ili oduzme neka komponenta */}
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <NavItem
            title={'Services'}
            id={'services'}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Workflow'}
            id={'workflow'}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Portfolio'}
            id={'portfolio'}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Testimonials'}
            id={'testimonials'}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Stats'}
            id={'stats'}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Our Team'}
            id={'ourTeam'}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'FAQ'}
            id={'faq'}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Blog'}
            id={'blog'}
          />
        </Box>
        <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href={'mailto:' + data.site.siteMetadata.email}
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
};

export default Topbar;
