import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useStaticQuery, graphql } from 'gatsby';
import LogoImage from 'images/logo/logo.webp';

//TODO: srediti ovo
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
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="theFront"
            width={80}
          >
            <Box
              component={'img'}
              src={LogoImage}
              alt='logo image'
              height={1}
              width={1}
            />
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/"
                color="text.primary"
                variant={'subtitle2'}
              >
                Home
              </Link>
            </Box>
            <Box marginTop={1}>
              <Button
                component={'a'}
                variant="contained"
                color="primary"
                size="large"
                href={data.site.siteMetadata.email}
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
          color="text.secondary"
          gutterBottom
        >
          &copy; {data.site.siteMetadata.title} | {new Date().getFullYear()} | All Rights Reserved
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          {data.site.siteMetadata.description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
