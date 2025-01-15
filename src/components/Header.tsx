import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';


function Header() {

  return (
    <AppBar position='static'>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Services
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Get A Quote
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Connect
        </Typography>
    </AppBar>
  );
}

export default Header;
