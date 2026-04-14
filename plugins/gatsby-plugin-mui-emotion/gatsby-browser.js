// ABOUTME: Gatsby browser plugin that sets up the MUI Emotion cache.
// ABOUTME: Ensures consistent style injection order during client-side rendering.
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { CacheProvider } from '@emotion/react';
import getEmotionCache from './getEmotionCache';

const cache = getEmotionCache();

export const wrapRootElement = ({ element }) => {
  return <CacheProvider value={cache}>{element}</CacheProvider>;
};
