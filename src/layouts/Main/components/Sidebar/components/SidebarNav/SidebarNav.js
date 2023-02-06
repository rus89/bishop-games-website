import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NavItem from './components/NavItem';
import { graphql, useStaticQuery } from 'gatsby';

const SidebarNav = () => {
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
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="Bishop Games"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={'../../../../../images/logo/logo_v2.png'}
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem
            title={'Services'}
            id={'services'}
          />
        </Box>
        <Box>
          <NavItem
            title={'Workflow'}
            id={'workflow'}
          />
        </Box>
        <Box>
          <NavItem
            title={'Portfolio'}
            id={'portfolio'}
          />
        </Box>
        <Box>
          <NavItem
            title={'Testimonials'}
            id={'testimonials'}
          />
        </Box>
        <Box>
          <NavItem
            title={'Stats'}
            id={'stats'}
          />
        </Box>
        <Box>
          <NavItem
            title={'Our Team'}
            id={'ourTeam'}
          />
        </Box>
        <Box>
          <NavItem
            title={'FAQ'}
            id={'faq'}
          />
        </Box>
        <Box>
          <NavItem
            title={'Blog'}
            id={'blog'}
          />
        </Box>
        <Box marginTop={1}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="blank"
            href={'mailto:' + data.site.siteMetadata.email}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
};

export default SidebarNav;
