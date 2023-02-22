import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useStaticQuery, graphql } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { StaticImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import getTheme from 'theme';

const FooterNavigationLinks = [
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


//TODO: srediti ovo
const Footer = () => {
  const theme = getTheme();

  const NavItemStyle = styled.div`
    display: flex;
    align-items: center;
    a {
      text-decoration: none;
      font-weight: 400;
      color: ${theme.palette.background.default};
      cursor: pointer;
      &:hover {
        font-weight: 1000;
        color: ${theme.palette.primary.main};
      }
    }
  `;

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
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box display={'flex'} width={{ xs: 100, md: 120 }}>
            <AnchorLink to={'/#hero'} title={'Bishop Games'}>
              <StaticImage
                src="../../../../images/logo/logo.webp"
                alt='logo'
                width='48'
              />
            </AnchorLink>
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            {FooterNavigationLinks.map((item, index) =>
              <Box marginTop={1} marginLeft={2} marginRight={2} key={index}>
                <NavItemStyle>
                  <AnchorLink to={'/#' + item.id} title={item.title}>
                    {item.title}
                  </AnchorLink>
                </NavItemStyle>
              </Box>
            )}

            <Box marginTop={1}>
              <Button
                component={'a'}
                variant="contained"
                color="primary"
                size="large"
                href={'mailto:' + data.site.siteMetadata.email}
                target={'_blank'}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="alternate.main"
          gutterBottom
        >
          &copy; {data.site.siteMetadata.title} | {new Date().getFullYear()} |
          All Rights Reserved
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
