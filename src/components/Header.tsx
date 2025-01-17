import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';


interface HeaderProps {
    icon: React.ReactNode,
    title?: string;
    navItems: {
        name: string,
        link: string
    }[],
    isFixed?: boolean
}


function Header(props: HeaderProps) {
    const {
        icon,
        title,
        navItems,
        isFixed = false
    } = props;


    return (
        <AppBar position={isFixed ? 'fixed' : 'sticky'} sx={{ width: '100%', background: 'none' }}>
            <Toolbar>
                <IconButton edge="start">
                    {icon}
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
