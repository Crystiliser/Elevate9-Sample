import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Icon from './assets/logo-new-removebg-preview.png';


const navItems = [
    {
      name: 'Home',
      link: '',
    },
    {
      name: 'Services',
      link: '',
    },
    {
      name: 'Get A Quote',
      link: '',
    },
    {
      name: 'Connect',
      link: '',
    }
];


const Layout: React.FC = () => {
    return (
        <>
            <Header
                icon={(<img src={Icon} />)}
                navItems={navItems}
            />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
