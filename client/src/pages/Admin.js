import React, { useContext } from 'react';
import { Button, Col, Container, Stack,Row, FormSelect } from 'react-bootstrap';
import EmpoyeesList from '../components/EmpoyeesList';
import DatesBar from '../components/DatesBar';
import { Context } from '../index';






const Admin = () => {
    const {scheduleStore} = useContext(Context)


    return (
    <div>Admin Page</div>
    );
}

export default Admin;
