// ABOUTME: 404 error page with centered message and back-to-home button.
// ABOUTME: Uses site metadata for the contact email link.
import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { graphql, useStaticQuery } from 'gatsby';
import Main from 'layouts/Main';
import Container from 'components/Container';

const NotFoundCover = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
        }
      }
    }
  `);

  return (
    <Main>
      <Box
        sx={{
          width: 1,
          minHeight: 'calc(100vh - 58px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth={600}>
          <Typography
            variant="h1"
            component="h1"
            align="center"
            sx={{ fontWeight: 700 }}
          >
            404
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            align="center"
          >
            Oops! Looks like you followed a bad link.
            <br />
            If you think this is a problem with us, please{' '}
            <Link
              href={'mailto:' + data.site.siteMetadata.email}
              underline="none"
            >
              tell us
            </Link>
          </Typography>
          <Box
            marginTop={4}
            display="flex"
            justifyContent="center"
          >
            <Button
              component={Link}
              variant="contained"
              color="primary"
              size="large"
              href="/"
            >
              Back home
            </Button>
          </Box>
        </Container>
      </Box>
    </Main>
  );
};

export default NotFoundCover;
