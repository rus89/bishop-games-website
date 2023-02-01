import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const NavItem = ({ title, items }) => {

  const handleClick = (event) => {

  };

  return (
    <Box>
      <Box
        marginBottom={2}
        display={'flex'}
        alignItems={'center'}
        sx={{
          cursor: 'pointer'
        }}
        onClick={(e) => handleClick(e)}
      >
        <Typography
          fontWeight={400}
          color={'text.primary'}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

NavItem.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

export default NavItem;
