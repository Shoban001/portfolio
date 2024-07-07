import React from "react";
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';
import { Outlet } from "react-router-dom";

const Layout = ({children}) => {
    return (
        <React.Fragment>
                <Header/>
                    <main>
                        {children}
                        <Outlet/>
                    </main>
                <Footer/>
        </React.Fragment>
    );
};

export default Layout;