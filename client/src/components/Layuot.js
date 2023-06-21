import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar'


const Layuot = () => {
    
    return (
        <> 
        <NavBar/>
        <Outlet/>
        </>  
    );
}

export default Layuot;
