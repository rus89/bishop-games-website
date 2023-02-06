import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const NavItem = ({ title, id }) => {

  return (
    <Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        aria-describedby={id}
        sx={{ cursor: 'pointer' }}
      >
        <Typography
          fontWeight={400}
          color={'text.primary'}
        >
          <AnchorLink to={'/#' + id}>
            {title}
          </AnchorLink>
        </Typography>
      </Box>
    </Box>
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default NavItem;
