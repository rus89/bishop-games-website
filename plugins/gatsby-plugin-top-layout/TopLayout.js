import React, { StrictMode } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Page from '../../src/components/Page';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        {/* <link
          rel="shortcut icon"
          href="https://assets.maccarianagency.com/favicons/thefront/favicon.ico"
        /> */}
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png" />
        <link rel="manifest" href="../site.webmanifest" /> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Bishop Games - Your favorite game development studio</title>
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content='A full-service game development studio specializing in Unity game programming, game art, and the complete game development lifecycle'
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        {/* TODO: promeniti ovo */}
        <meta
          property="og:image"
          content="https://assets.maccarianagency.com/screenshots/the-front/social.png"
        />
        <meta
          property="og:title"
          content="Bishop Games - Your favorite game development studio"
        />
        <meta
          property="og:description"
          content="A full-service game development studio specializing in Unity game programming, game art, and the complete game development lifecycle"
        />
        <meta
          property="og:url"
          content="https://www.bishop.games"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </Helmet>
      <StrictMode>
        <Page>
          {props.children}
        </Page>
      </StrictMode>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
