import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar/NavBar'


const Layuot = () => {
    
    return (
        <> 
        <NavBar/>
        <main>
          <Outlet/>
        </main>
        
        </>  
    );
}

export default Layuot;
