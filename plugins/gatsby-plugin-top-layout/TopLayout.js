import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../src/components/Page';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

export default function TopLayout(props) {
  return (
    <>
      <Page>{props.children}</Page>
    </>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
