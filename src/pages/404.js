// ABOUTME: 404 error page entry point.
// ABOUTME: Renders the NotFoundCover view for unmatched routes.
import React from 'react';
import NotFoundCover from 'views/NotFoundCover';

const FourOFourPage = () => {
  return <NotFoundCover />;
};

export default FourOFourPage;

export function Head() {
  return (
    <>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>Page not found — Bishop Games</title>
      <meta
        name="description"
        content="The page you requested could not be found."
      />
      <meta name="robots" content="noindex, nofollow" />
    </>
  );
}
