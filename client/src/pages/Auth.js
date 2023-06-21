import React from 'react';
import { Button, Col, Container,Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {


    
    return (
        <Container 
         className='d-flex flex-column justifyf-content-center align-items-center flex-grow-1'
         >
            <Col xs={6} className='p-5 d-flex flex-column align-items-center border rounded'>
                <h2 className='text-uppercase'>log in</h2>
                <Form 
                className='d-flex flex-column'
                style={{width:'90%'}} 
                >
                    <Form.Control
                    className='mt-3'
                    placeholder='Enter your Email'/>
        
                    <Form.Control
                    className='mt-3'
                    placeholder='Enter your Password'/>
                    <Row className='m-0 mt-3 flex-nowrap justify-content-between align-items-center' >
                        
                        <Button variant='outline-success'
                        className='text-uppercase'
                        style={{width:'30%'}}>
                            sign in
                        </Button>
                        <Col sm={3} style={{textAlign:'center'}}>
                            <Link to={REGISTRATION_ROUTE}>Sign Up</Link>
                        </Col>
                    
                        
                    </Row>
                  
                </Form>
            </Col>
        </Container>
    );
}

export default Auth;
