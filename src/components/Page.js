// ABOUTME: Root component that wraps the app with ThemeProvider and CssBaseline.
// ABOUTME: Initializes AOS scroll animations after mount.
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import getTheme from 'theme';
import AOS from 'aos';

export default function Page({ children }) {
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    AOS.init({
      once: true,
      delay: 0,
      duration: 800,
      offset: 0,
      easing: 'ease-in-out',
    });
    setMounted(true);
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [mounted]);

  return (
    <ThemeProvider theme={getTheme('light')}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Paper elevation={0}>{children}</Paper>
    </ThemeProvider>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};
