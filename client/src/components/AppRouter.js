import React,{useContext} from 'react';
import {Routes,Route} from 'react-router-dom'
import {Context} from '../index'
import Auth from '../pages/Auth';
import PageNotFound from '../pages/NotFoundPage'
import Layuot from './Layuot';
import { observer } from 'mobx-react-lite';
import { authAdminRoutes, publicRoutes,authEmployeeRoutes } from '../routes';

const AppRouter = observer(() => {

  const {userStore,scheduleStore} = useContext(Context)
  const {isAuth,user} = userStore


  /**
   * Routing 
   * 
   * add role check after html and styling!!!
   */
  return (
       <Routes>
        <Route path='/' element={<Layuot/>}>

          {publicRoutes.map(({path,Component}) =>
            <Route key={path} path={path} element={<Component/>}/>
          )}

          {(isAuth ) && authAdminRoutes.map(({path,Component})=> 
          <Route key={path} path={path} element={<Component/>}/>
          )}

           {(isAuth ) && authEmployeeRoutes.map(({path,Component})=> 
          <Route key={path} path={path} element={<Component/>}/>
          )}

          <Route index element={<Auth/>}/>
        </Route>
        
        <Route path="*" element={<PageNotFound/>}/>
       </Routes>
    );
}) 

export default AppRouter;
