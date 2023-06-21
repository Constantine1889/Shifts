import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const EmployeeForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the employee data here
    console.log('Employee data:', { name, email, phone, address, position, department });
    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setPosition('');
    setDepartment('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="position">
        <Form.Label>Position</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="department">
        <Form.Label>Department</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </Form.Group>

      <Button className='mt-2' variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};

export default EmployeeForm;
