import React from 'react';
import Form from 'react-bootstrap/Form';

const Employee = () => {
    return (
        <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
            <Form className='w-50'>
                <Form.Group className="mb-2" controlId="firstName">
                     <Form.Label>First Name</Form.Label>
                     <Form.Control type="text" placeholder='Enter your name...' size='sm'/>
                </Form.Group>
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" size='sm'/>
                </Form.Group>
                <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
          </Form>
        </div>
    );
}

export default Employee;
