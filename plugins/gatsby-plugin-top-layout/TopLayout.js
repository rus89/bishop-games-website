import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Page from '../../src/components/Page';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Bishop Games - Your favorite game development studio</title>
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
          content="../../src/images/og/og.webp"
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
          content="https://bishop.games"
        />
        <meta name="twitter:title" content="Bishop Games - Your favorite game development studio" />
        <meta name="twitter:description" content="A full-service game development studio specializing in Unity game programming, game art, and the complete game development lifecycle" />
        <meta name="twitter:url" content="https://bishop.games/?src=twitter" />
        <meta name="twitter:image:src" content="http://bishop.games/image/all.png" />
        <meta name="twitter:image:alt" content="Best game development studio" />
        <meta name="twitter:creator" content="@rusimovmilan" />
        <meta name="twitter:site" content="@bishopgames" />
        <link rel="canonical" href="https://bishop.games" />
      </Helmet>
      <Page>
        {props.children}
      </Page>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
