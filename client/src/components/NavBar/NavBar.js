import React, { useContext } from 'react';
import { Context } from '../../index';
import {observer} from 'mobx-react-lite'
import Button from '@mui/material/Button';


const NavBar = observer(() => {
    const {userStore} = useContext(Context)
    return (
      <header>
        <div className='max-width'>
           <div className='logo'>Shifts</div>
            {false && <Button variant='outlined' size='large'  sx={{color:'white'}}> 
            Sign Out
           </Button>}
        </div>
        
      </header>
    );
}) 

export default NavBar;
