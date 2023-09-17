import React, { useContext } from 'react';
import { Context } from '../../index';
import {observer} from 'mobx-react-lite'

const NavBar = observer(() => {
    const {userStore} = useContext(Context)
    return (
      <header>
        <div className='max-width'>
           <div className='logo'>Shifts</div>
        </div>
        
      </header>
    );
}) 

export default NavBar;
