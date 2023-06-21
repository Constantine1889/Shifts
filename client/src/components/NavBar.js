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
        <Navbar bg="dark" variant="dark" className='mb-2'>
        <Container>
          <Navbar.Brand >Shifts</Navbar.Brand>
          <Nav className="ml-auto">
            {userStore.isAuth ? 
            <Button variant={"outline-light"} onClick={() => userStore.setIsAuth(false)}>Sign out</Button> : 
            <Button variant={"outline-light"} >Sign in</Button>}
          </Nav>
        </Container>
      </Navbar>
    );
}) 

export default NavBar;
