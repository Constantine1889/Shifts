import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Admin from '../pages/Admin'
import Auth from '../pages/Auth'
import Employee from '../pages/Employee'
import PageNotFound from '../pages/NotFoundPage'

const AppRouter = () => {
    return (
       <Routes>
         <Route path="/" element={<Admin/>}/>
         <Route path="/auth" element={<Auth/>}/>
         <Route path="/employee" element={<Employee/>}/>
         <Route path="*" element={<PageNotFound/>}/>
       </Routes>
    );
}

export default AppRouter;
