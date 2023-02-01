import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

//NOTE: postoji sansa da ova komponenta nece imati potrebe da se koristi 
// zato sto box komponenta koja predstavlja delove landinga ima u sebi mogucnost za href
// i tako ce preko tog hrefa da se krece po delovima stranice umesto da se otvaraju nove stranice
// jedino sto ce mozda morati da se koristi kada bude bio napravljen blog
const NavItem = ({ title, id, items, colorInvert = false }) => {

  const handleClick = (event, popoverId) => {
    
  };

  const linkColor = colorInvert ? 'common.white' : 'text.primary';

  return (
    <Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        aria-describedby={id}
        sx={{ cursor: 'pointer' }}
        // onClick={(e) => handleClick(e, id)}
      >
        <Typography
          fontWeight={400}
          color={linkColor}
          href={items.href}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  colorInvert: PropTypes.bool,
};

export default NavItem;
