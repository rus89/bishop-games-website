// ABOUTME: Navigation link item for the mobile sidebar navigation.
// ABOUTME: Renders an anchor-linked item with hover styling from the MUI theme.
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import styled from '@emotion/styled';

const NavItemStyle = styled.div`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    font-weight: 400;
    color: ${({ theme }) => theme.palette.text.primary};
    cursor: pointer;
    &:hover {
      font-weight: 1000;
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

const NavItem = ({ title, id }) => {
  return (
    <Box aria-describedby={id} marginTop={2} marginBottom={2}>
      <NavItemStyle>
        <AnchorLink to={'/#' + id} title={title}>
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
