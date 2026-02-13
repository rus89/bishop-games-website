import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bishop Games',
    url: 'https://bishop.games',
    logo: 'https://bishop.games/static/logo.webp',
    description:
      'A full-service game development studio specializing in Unity game programming, game art, and the complete game development lifecycle',
    email: 'office@bishop.games',
    sameAs: [
      'https://www.linkedin.com/company/bishop-games',
      'https://www.facebook.com/bishopgamesstudio',
      'https://www.instagram.com/bishop.games/',
    ],
    knowsAbout: [
      'Game Development',
      'Unity Development',
      'Game Art',
      'Game Programming',
      'Animation',
      'Game Consulting',
    ],
  };

  setHeadComponents([
    <script
      key="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />,
  ]);
};
