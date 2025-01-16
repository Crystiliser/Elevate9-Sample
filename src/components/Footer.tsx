import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';


interface FooterProps {
    icon: React.ReactNode,
    name?: string,
    phone?: string,
    email?: string,
    navItems: {
        name: string,
        link: string
    }[]
}


function Footer(props: FooterProps) {

    const {
        icon,
        name,
        phone,
        email,
        navItems
    } = props;


    return (
        <Grid container sx={{ width: '100%' }}>
            <Grid size={3}>
                {icon}
            </Grid>
            <Grid size={3}>
                <Typography>
                    {name}
                </Typography>
                <Typography>
                    Phone: {phone}
                </Typography>
                <Typography>
                    Email: {email}
                </Typography>
            </Grid>
            <Grid size={6}>
                {navItems.map((item) => (
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                        {item.name}
                    </Typography>
                ))}
            </Grid>
        </Grid>
    );
}


export default Footer;
