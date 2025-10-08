import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Banner from '../pages/Home/Banner/Banner';

const RootLayout = () => {
    return (
        <div className='bg-black text-white'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;