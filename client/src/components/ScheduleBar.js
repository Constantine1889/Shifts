import React, { useContext } from 'react';
import { Row,Col,Stack } from 'react-bootstrap';
import { Context } from '../index';


const {scheduleStore} = useContext(Context)
const schedule = scheduleStore.schedule()

const ScheduleBar = () => {
    return (
       <>
        {scheduleStore.positionNames().map((pos,)=>{
           
            return (
                <Row key={pos}>
                <Col className='border d-flex align-items-center justify-content-center'>{pos}</Col>
                    {[...schedule[pos]]}
                </Row>
            )
        })}
       
       </>
    );
}

export default ScheduleBar;
