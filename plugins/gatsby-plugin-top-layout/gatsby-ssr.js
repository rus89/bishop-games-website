import React, { StrictMode } from 'react';
import TopLayout from './TopLayout';

export const wrapRootElement = ({ element }) => {
  return (
    <StrictMode>
      <TopLayout>{element}</TopLayout>
    </StrictMode>
  );
};
