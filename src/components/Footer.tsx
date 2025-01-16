import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

import FooterImage from '../assets/footer-1-blue.jpg';


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


const GridContainerStyle = {
    width: '100%',
    padding: 4,
    backgroundImage: `url(${FooterImage})`,
    color: '#fff'
};


function Footer(props: FooterProps) {

    const {
        icon,
        name,
        phone,
        email,
        navItems
    } = props;


    return (
        <Grid container sx={GridContainerStyle}>
            <Grid size={3} sx={{ paddingLeft: 10 }}>
                {icon}
            </Grid>
            <Grid size={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
            <Grid size={6} sx={{ textAlign: 'right', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
