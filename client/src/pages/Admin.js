import React, { useContext } from 'react';
import { Button, Col, Container, Stack,Row, FormSelect } from 'react-bootstrap';
import EmpoyeesList from '../components/EmpoyeesList';
import DatesBar from '../components/DatesBar';
import { Context } from '../index';






const Admin = () => {
    const {scheduleStore} = useContext(Context)


    return (
        <Container fluid className='flex-grow-1 d-flex p-0'>
            <EmpoyeesList/>
            <Col xs={8}  className='border-start border-end border-dark pt-1'>
                <Row>
                    <Col xs={4}>
                        <FormSelect size="sm"> 
                            <option value="value">Value 1</option>
                            <option value="value">Value 2</option>
                            <option value="value">Value 3</option>
                        </FormSelect>
                    </Col>
                </Row>

                <Row className='mt-1 text-center'>
                    <Col className='border'>Position</Col>
                    <DatesBar/>
                </Row>

                <Row>
                    <Col className='border d-flex align-items-center justify-content-center'>Position 1</Col>
                    <Col className='border'>
                        <Stack>
                            <div className='shift border'>Name 1</div>
                            <div className='shift border'> Name 2</div>
                            <div className='shift border'>Name 3</div>
                        </Stack>
                    </Col>
                </Row>
            </Col>
            <Col  className=''>
                <Stack className='px-3 mt-3' gap={2}>
                    <Button variant='outline-dark'>Add Employee</Button>
                    <Button variant='outline-dark'>Add Position</Button>
                    <Button variant='outline-dark'>Add Site</Button>
                    <Button variant='outline-dark'>Settings</Button>
                </Stack>
            </Col>
        </Container>
    );
}

export default Admin;
