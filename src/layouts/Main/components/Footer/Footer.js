import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useStaticQuery, graphql } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { StaticImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import getTheme from 'theme';
import navigationLinks from 'data/navigation';

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

const Footer = () => {
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
                width={48}
              />
            </AnchorLink>
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            {navigationLinks.map((item, index) =>
              <Box marginTop={1} marginLeft={2} marginRight={2} key={index}>
                <NavItemStyle>
                  <AnchorLink to={'/#' + item.id} title={item.title}>
                    {item.title}
                  </AnchorLink>
                </NavItemStyle>
              </Box>
            )}

            <Box marginTop={1}>
              <AnchorLink to={'/#contact'} title={"Let's Talk"} style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Let&apos;s Talk
                </Button>
              </AnchorLink>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box display={'flex'} justifyContent={'center'} marginBottom={1}>
          <a href="https://www.linkedin.com/company/bishop-games" target="_blank" rel="noreferrer">
            <IconButton aria-label="linkedin" size={'small'} color={'primary'}>
              <LinkedInIcon />
            </IconButton>
          </a>
          <a href="https://www.facebook.com/bishopgamesstudio" target="_blank" rel="noreferrer">
            <IconButton aria-label="facebook" size={'small'} color={'primary'}>
              <FacebookIcon />
            </IconButton>
          </a>
          <a href="https://www.instagram.com/bishop.games/" target="_blank" rel="noreferrer">
            <IconButton aria-label="instagram" size={'small'} color={'primary'}>
              <InstagramIcon />
            </IconButton>
          </a>
        </Box>
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
