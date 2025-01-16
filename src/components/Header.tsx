import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Icon from '../assets/logo-new-removebg-preview.png';
import { IconButton, Toolbar } from '@mui/material';


interface HeaderProps {
    title?: string;
    navItems: {
        name: string,
        link: string
    }[]
}


function Header(props: HeaderProps) {
    const {
        title,
        navItems
    } = props;


    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton edge="start">
                    <img src={Icon} alt="Elevate 9 Header Icon" />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    {title}
                </Typography>

                <Box sx={{ display: { sm: 'flex' } }}>
                    {navItems.map((item) => (
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                            {item.name}
                        </Typography>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
