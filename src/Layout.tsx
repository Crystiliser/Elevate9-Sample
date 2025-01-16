import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HeaderLogo from './assets/logo-new-removebg-preview.png';
import FooterLogo from './assets/logo-embossed.png';

import './Layout.css';


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

const name = 'Elevate9.io';
const phone = '555.555.555';
const email = 'info@elevate.io';


const Layout: React.FC = () => {
    return (
        <>
            <Header
                icon={(<img src={HeaderLogo} height={121} width={147} alt="Elevate9 Logo" />)}
                navItems={navItems}
            />
            <main>
                <Outlet />
            </main>
            <Footer
              icon={(<img src={FooterLogo} alt="Elevate 9 Logo" />)}
              name={name}
              phone={phone}
              email={email}
              navItems={navItems}
            />
        </>
    );
};

export default Layout;
