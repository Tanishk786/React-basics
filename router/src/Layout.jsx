import React from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import { Outlet } from "react-router-dom";

const Layout = () => {

    return (
        <>
            <Header/>
            {/* Here Home cant be passed directly we have to pass it dynamically because when page reloads then we have to make changes there */}
            <Outlet/>            
            <Footer/>
        </>
    );
}

export default Layout;