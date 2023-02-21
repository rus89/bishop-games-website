import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NavItem from './components/NavItem';
import { graphql, useStaticQuery } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { StaticImage } from 'gatsby-plugin-image';

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
        <Box display={'flex'} width={{ xs: 100, md: 120 }}>
          <AnchorLink to={'/#hero'} title={'Bishop Games'}>
            <StaticImage
              src="../../../../../../images/logo/logo.webp"
              alt="logo"
              style={{
                width: '48px',
              }}
            />
          </AnchorLink>
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <NavItem title={'Services'} id={'services'} />
        <NavItem title={'Portfolio'} id={'portfolio'} />
        <NavItem title={'Workflow'} id={'workflow'} />
        <NavItem title={'Testimonials'} id={'testimonials'} />
        <NavItem title={'Stats'} id={'stats'} />
        <NavItem title={'Team'} id={'ourTeam'} />
        <NavItem title={'FAQ'} id={'faq'} />
        <NavItem title={'Blog'} id={'blog'} />
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

SidebarNav.propTypes = {};

export default SidebarNav;
