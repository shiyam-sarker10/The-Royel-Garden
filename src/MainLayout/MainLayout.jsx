import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../component/nav/Nav';
import Footer from '../component/footer/Footer';

const MainLayout = () => {
    return (
        <div className=''>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;