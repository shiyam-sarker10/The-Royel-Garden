import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../component/nav/Nav';

const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;