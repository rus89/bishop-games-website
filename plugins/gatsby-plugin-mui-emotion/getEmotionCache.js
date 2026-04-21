// ABOUTME: Creates and returns the shared Emotion cache instance for MUI styling.
// ABOUTME: Used by both the SSR and browser Gatsby plugin files.

import createCache from '@emotion/cache';

export default function getEmotionCache() {
  return createCache({ key: 'mui' });
}