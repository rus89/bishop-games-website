import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import styled from '@emotion/styled';
import getTheme from 'theme';

const NavItem = ({ title, id }) => {

  const theme = getTheme();

  const NavItemStyle = styled.div`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    font-weight: 400;
    color: ${theme.palette.text.primary};
    cursor: pointer;
    &:hover {
      font-weight: 1000;
      color: ${theme.palette.primary.main};
      }
    }
  `;

  return (
    <Box
      aria-describedby={id}
      marginLeft={2}
      marginRight={2}
    >
      <NavItemStyle>
        <AnchorLink
          to={'/#' + id}
          title={title}>
          {title}
        </AnchorLink>
      </NavItemStyle>
    </Box>
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default NavItem;
