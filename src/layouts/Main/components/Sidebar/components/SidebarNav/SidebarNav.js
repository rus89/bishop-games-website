import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NavItem from './components/NavItem';
import { graphql, useStaticQuery } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { StaticImage } from 'gatsby-plugin-image';

const SideBarNavigationLinks = [
  {
    title: 'Services',
    id: 'services',
  },
  {
    title: 'Portfolio',
    id: 'portfolio',
  },
  {
    title: 'Workflow',
    id: 'workflow',
  },
  {
    title: 'Testimonials',
    id: 'testimonials',
  },
  {
    title: 'Stats',
    id: 'stats',
  },
  {
    title: 'Team',
    id: 'team',
  },
  {
    title: 'FAQ',
    id: 'faq',
  },
  {
    title: 'Blog',
    id: 'blog',
  },
];


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
              alt='logo'
              width={48}
            />
          </AnchorLink>
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        {SideBarNavigationLinks.map((item, index) =>
          <NavItem title={item.title} id={item.id} key={index} />
        )}
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
