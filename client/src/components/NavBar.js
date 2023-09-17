import React, { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'

const NavBar = observer(() => {
    const {userStore} = useContext(Context)
    return (
      <div>Navbar</div>
    );
}) 

export default NavBar;
