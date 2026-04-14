// ABOUTME: Gatsby SSR entry point for the top-layout plugin.
// ABOUTME: Wraps the app in the Page component during server-side rendering.
import React from 'react';
import TopLayout from './TopLayout';

export const wrapRootElement = ({ element }) => {
  return (<TopLayout>{element}</TopLayout>);
};
