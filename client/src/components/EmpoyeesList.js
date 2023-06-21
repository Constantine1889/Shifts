import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite'
import { Col, Row } from 'react-bootstrap';
import { Context } from '../index';


const EmpoyeesList = observer(() => {
    const {scheduleStore} = useContext(Context)
    const {employees} = scheduleStore

    return (
    <Col className=''>
        {employees.map(({name,maxShifts,currentShifts},i) => {
            return (
            <Row key={i} className='border-bottom border-dark text-center p-1'>
                <Col xs={8} className='' title="Employee's Name">{name}</Col>
                <Col className='border-start' title='Current Number of Shifts'>{currentShifts}</Col>
                <Col className='border-start' title='Max Number of Shifts'>{maxShifts}</Col>
            </Row>
            )
        })}
       
    </Col>
    );
}) 

export default EmpoyeesList;
