import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { NavItem } from './components';
import { graphql, useStaticQuery } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { StaticImage } from 'gatsby-plugin-image';

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
        width={{ xs: 100, md: 120 }}
      >
        <AnchorLink
          to={'/#hero'}
          title={'Bishop Games'}>
          <StaticImage
            src='../../../../images/logo/logo.webp'
            alt='logo'
            style={{
              width: '40%',
            }}
          />
        </AnchorLink>
      </Box>
      {/* //TODO: ovo treba napraviti dinamicki mozda da se itemi i id povlace iz nekog fajla kako se kod ne bi menjao svaki put kada se doda ili oduzme neka komponenta */}
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <NavItem
          title={'Services'}
          id={'services'}
        />
        <NavItem
          title={'Portfolio'}
          id={'portfolio'}
        />
        <NavItem
          title={'Workflow'}
          id={'workflow'}
        />
        <NavItem
          title={'Testimonials'}
          id={'testimonials'}
        />
        <NavItem
          title={'Stats'}
          id={'stats'}
        />
        <NavItem
          title={'Team'}
          id={'ourTeam'}
        />
        <NavItem
          title={'FAQ'}
          id={'faq'}
        />
        <NavItem
          title={'Blog'}
          id={'blog'}
        />
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
