import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Component/Shared/Banner/Banner';
import Footer from '../Component/Shared/Footer/Footer';
import Navbar from '../Component/Shared/Navbar/Navbar';


const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;