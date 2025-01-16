import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


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
            <Header navItems={navItems} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
