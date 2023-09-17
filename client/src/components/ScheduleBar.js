import React, { useContext } from 'react';
import { Row,Col,Stack } from 'react-bootstrap';
import { Context } from '../index';


const {scheduleStore} = useContext(Context)
const schedule = scheduleStore.schedule()

const ScheduleBar = () => {
    return (
        <div>Schedule Container</div>
    );
}

export default ScheduleBar;
