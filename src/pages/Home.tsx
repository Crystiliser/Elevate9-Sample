import { Box } from '@mui/material';

import HeaderImage from '../assets/header.png';


function Home() {

  return (
    <Box sx={{ backgroundImage: `url(${HeaderImage})`, height: '82vh' }}>
      Coming Soon
    </Box>
  );
}

export default Home;
