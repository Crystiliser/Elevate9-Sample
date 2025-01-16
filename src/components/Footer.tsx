import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

import Logo from '../assets/logo-embossed.png';
import { Typography } from '@mui/material';


function Footer() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={3}>
                    <img src={Logo} alt="Elevate 9 Logo" />
                </Grid>
                <Grid size={3}>
                    <Typography>
                        Elevate9.io
                    </Typography>
                    <Typography>
                        Phone: 555.555.555
                    </Typography>
                    <Typography>
                        Email: info@elevate.io
                    </Typography>
                </Grid>
                <Grid size={6}>
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
                </Grid>
            </Grid>
        </Box>
    );
}


export default Footer;
