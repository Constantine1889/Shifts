import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite'
import { Col, Row } from 'react-bootstrap';
import { Context } from '../index';


const EmpoyeesList = observer(() => {
    const {scheduleStore} = useContext(Context)
    const {employees} = scheduleStore

    return (
        <div>Employee List Container</div>
    );
}) 

export default EmpoyeesList;
