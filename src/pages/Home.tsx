import { Box } from '@mui/material';

import HeaderImage from '../assets/header.png';


const ContainerStyle = {
  backgroundImage: `url(${HeaderImage})`,
  height: '82vh',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat'
};


function Home() {

  return (
    <Box sx={ContainerStyle}>
      Coming Soon
    </Box>
  );
}

export default Home;
