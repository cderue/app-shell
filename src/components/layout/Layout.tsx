import { Content } from "@carbon/react";
import React from 'react';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav';

const Layout = ({ children }: {children: any}) => {
    return (
        <>
            <Nav />
            <Content>
                {children}
            </Content>
            <Footer />
        </>
    );
};

export default Layout;
